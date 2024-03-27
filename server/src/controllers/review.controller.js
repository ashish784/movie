import responseHandler from "../handlers/response.handler.js";
import reviewModel from "../models/review.model.js";

const create = async (req, res) => {
    try {
        const { movieId } = req.params;

        const review = new reviewModel({
            user: req.user.id,
            movieId,
            ...req.body
        });

        await review.save();

        responseHandler.created(res, {
            id: review._id,
            user: req.user,
            ...review._doc
        });
    } catch (error) {
        responseHandler.error(res, error);
    }
};

const remove = async (req, res) => {
    try {
        const { reviewId } = req.params;
       
        const review = await reviewModel.findOneAndDelete({
            _id: reviewId,
            user: req.user.id
        });

        if (!review) {
            return responseHandler.notfound(res);
        }

        responseHandler.ok(res);
    } catch (error) {
        responseHandler.error(res, error);
    }
};

const getReviewsOfUser = async (req, res) => {
    try {
        const reviews = await reviewModel.find({
            user: req.user.id,
        }).sort("-createdAt");

        responseHandler.ok(res, reviews);
    } catch (error) {
        responseHandler.error(res, error);
    }
};

export default { create, remove, getReviewsOfUser };
