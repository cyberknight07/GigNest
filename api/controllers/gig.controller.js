import { createError } from "../utils/createError.js";
import Gig from "../modals/Gig.js";

export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    // This will give error if we run {url}gigs without any query i.e, ($regex need to be string or can't be empty).
    // So we use spread (...)operator to run it.
    ...(q.userId && { userId: q.userId }),
    ...(q.cateory && { category: q.category }),
    // This says - (true && true) then copy the {cat: q.cat} in the FILTER otherwise not.
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }), // if min then {}min condition,
        ...(q.max && { $lte: q.max }), // if max then {}max condition
      },
    }),
  };

  try {
    const gigs = await Gig.find(filters);
    if (!gigs) return next(createError(404, "Gigs are empty. Create new one."));
    res.status(200).json({ message: "Gigs Fetched Successfully", data: gigs });
  } catch (e) {
    next(e);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (!gig) return next(createError(404, "Gig not found"));

    res.status(200).json({ message: "Gig Fetched Successfully", data: gig });
  } catch (err) {
    next(err);
  }
};
export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only seller can create gigs."));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res
      .status(201)
      .json({ message: "Gig Created Successfully", data: savedGig });
  } catch (e) {
    next(e);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (gig.userId != req.userId) {
      return next(
        createError(
          403,
          "You are not authorized to delete this gig. DELETE GIG"
        )
      );
    }

    await Gig.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "Gig has been deleted" });
  } catch (e) {
    next(e);
  }
};
