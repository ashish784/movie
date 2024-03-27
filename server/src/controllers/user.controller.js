import userModel from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";

const signup = async (req, res) => {
  try {
    const { username, password, displayName } = req.body;

    const checkUser = await userModel.findOne({ username });

    if (checkUser) {
      return responseHandler.badrequest(res, "Username already in use");
    }

    const user = new userModel({
      displayName,
      username
    });

    user.setPassword(password);

    await user.save();

    const token = generateToken(user.id);

    responseHandler.created(res, {
      token,
      id: user.id,
      displayName: user.displayName,
      username: user.username
    });
  } catch (error) {
    console.error("Error signing up:", error);
    responseHandler.error(res, error);
  }
};

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username }).select("+password");

    if (!user || !user.validPassword(password)) {
      return responseHandler.unauthorize(res, "Invalid credentials");
    }

    const token = generateToken(user.id);

    responseHandler.ok(res, {
      token,
      id: user.id,
      displayName: user.displayName,
      username: user.username
    });
  } catch (error) {
    console.error("Error signing in:", error);
    responseHandler.error(res, error);
  }
};

const updatePassword = async (req, res) => {
  try {
    const { password, newPassword } = req.body;

    const user = await userModel.findById(req.user.id).select("+password");

    if (!user || !user.validPassword(password)) {
      return responseHandler.unauthorize(res, "Invalid password");
    }

    user.setPassword(newPassword);

    await user.save();

    responseHandler.ok(res);
  } catch (error) {
    console.error("Error updating password:", error);
    responseHandler.error(res, error);
  }
};

const getInfo = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);

    if (!user) {
      return responseHandler.notfound(res, "User not found");
    }

    responseHandler.ok(res, user);
  } catch (error) {
    console.error("Error getting user info:", error);
    responseHandler.error(res, error);
  }
};

const generateToken = (userId) => {
  return jsonwebtoken.sign({ userId }, process.env.TOKEN_SECRET, { expiresIn: "24h" });
};

export default { signup, signin, getInfo, updatePassword };
