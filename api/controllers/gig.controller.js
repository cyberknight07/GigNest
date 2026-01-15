import { createError } from "../utils/createError.js";
import Gig from "../modals/Gig.js";
import { STATUS_CODES, STATUS_MESSAGES } from "../utils/constant.js";

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
    const gigs = await Gig.find(filters).sort({ [q.sort]: -1 }); // Getting Problem of Multiple filter, so i need to use array rather than object.

    if (!gigs)
      return next(
        createError(STATUS_CODES.NOT_FOUND, STATUS_MESSAGES.NOT_FOUND)
      );
    res
      .status(STATUS_CODES.OK)
      .json({ message: STATUS_MESSAGES.OK, data: gigs });
  } catch (e) {
    next(e);
  }
};

export const getUserGigs = async (req, res, next) => {
  try {
    console.log(req.userId);
    const gigs = await Gig.find({ userId: req.userId });
    console.log(gigs);
    if (!gigs)
      return next(
        createError(STATUS_CODES.NOT_FOUND, STATUS_MESSAGES.NOT_FOUND)
      );
    return res
      .status(STATUS_CODES.OK)
      .json({ message: STATUS_MESSAGES.OK, data: gigs });
  } catch (e) {
    next(e);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (!gig)
      return next(
        createError(STATUS_CODES.NOT_FOUND, STATUS_MESSAGES.NOT_FOUND)
      );

    res
      .status(STATUS_CODES.OK)
      .json({ message: STATUS_MESSAGES.OK, data: gig });
  } catch (err) {
    next(err);
  }
};
export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(
      createError(STATUS_CODES.UNAUTHORIZED, STATUS_MESSAGES.UNAUTHORIZED)
    );

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res
      .status(STATUS_CODES.CREATED)
      .json({ message: STATUS_MESSAGES.CREATED, data: savedGig });
  } catch (e) {
    next(e);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (gig.userId != req.userId) {
      return next(
        createError(STATUS_CODES.UNAUTHORIZED, STATUS_MESSAGES.UNAUTHORIZED)
      );
    }

    await Gig.findByIdAndDelete(req.params.id);
    res.status(STATUS_CODES.CREATED).json({ message: STATUS_MESSAGES.CREATED });
  } catch (e) {
    next(e);
  }
};
