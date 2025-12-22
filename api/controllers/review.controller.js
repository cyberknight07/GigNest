import Gig from "../modals/Gig.js";
import Reviews from "../modals/review.js";
import { createError } from "../utils/createError.js";


export const createReview = async (req, res, next) => {
    
    if(req.isSeller) return next(createError(403, "Seller can not review."));

    const newReview = new Reviews({
        userId: req.userId,
        gigId: req.body.gigId,
        desc: req.body.desc,
        stars: req.body.stars
    })
    // If we need to create another reply over a review.
    try{
    
        const review = await Reviews.findOne({gigId: req.body.gigId, userId: req.userId});
        if(review) return next(createError(403, "We have already created a review."));
        
        const savedReview = await newReview.save();
        
        // Update Stars
        await Gig.findByIdAndUpdate(req.params.gigId, {
            $inc: {totalStars: req.body.stars, starNumber: 1}
        })
        
        res.status(201).send(savedReview);
        
    } catch (err) { next(err);}
}



export const getReviews = async (req, res, next) => {
    try{

        const reviews = await Reviews.find ({ gigId: req.params.gigId});
        if(!reviews) return next(createError(403, "No review found."));
        res.status(200).send(reviews);

    } catch (err) { next(err);}
}

export const deleteReview = async (req, res, next) => {
    try{

    } catch (err) { next(err);}
}