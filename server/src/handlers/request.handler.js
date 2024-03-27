import { validationResult } from "express-validator";

const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessage = errors.array()[0].msg;
        return res.status(400).json({ error: errorMessage });
    }

    next(); // Call next middleware if validation passes
};

export default { validate };
