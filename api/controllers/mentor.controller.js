import Mentor from '../models/mentor.model.js';
import { errorHandler } from '../utils/error.js';

export const applyAsMentor = async (req, res, next) => {
  if (!req.body.fullName || !req.body.role || !req.body.email || !req.body.linkedin || !req.body.bio || !req.body.imageUrl) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  const newMentor = new Mentor({
    ...req.body,
    userId: req.user.id,
    approvalStatus: 'pending',
  });
  try {
    const savedMentor = await newMentor.save();
    res.status(201).json(savedMentor);
  } catch (error) {
    next(error);
  }
};

export const approveMentor = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to approve mentor applications'));
  }
  try {
    const updatedMentor = await Mentor.findByIdAndUpdate(
      req.params.mentorId,
      { $set: { approvalStatus: 'approved' } },
      { new: true }
    );
    res.status(200).json(updatedMentor);
  } catch (error) {
    next(error);
  }
};

export const rejectMentor = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to reject mentor applications'));
  }
  try {
    const updatedMentor = await Mentor.findByIdAndUpdate(
      req.params.mentorId,
      { $set: { approvalStatus: 'rejected' } },
      { new: true }
    );
    res.status(200).json(updatedMentor);
  } catch (error) {
    next(error);
  }
};

export const getMentors = async (req, res, next) => {
  try {
    const mentors = await Mentor.find({
      ...(req.query.assigned && { isAssigned: req.query.assigned === 'true' }),
      ...(req.query.approvalStatus && { approvalStatus: req.query.approvalStatus }),
    });
    res.status(200).json(mentors);
  } catch (error) {
    next(error);
  }
};

// ... (keep other existing functions like deleteMentor, updateMentor, assignMentor)

export const deleteMentor = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to delete this mentor profile'));
  }
  try {
    await Mentor.findByIdAndDelete(req.params.mentorId);
    res.status(200).json('The mentor profile has been deleted');
  } catch (error) {
    next(error);
  }
};

export const updateMentor = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to update this mentor profile'));
  }
  try {
    const updatedMentor = await Mentor.findByIdAndUpdate(
      req.params.mentorId,
      {
        $set: {
          fullName: req.body.fullName,
          role: req.body.role,
          bio: req.body.bio,
          email: req.body.email,
          linkedin: req.body.linkedin,
          imageUrl: req.body.imageUrl,
          isAssigned: req.body.isAssigned,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedMentor);
  } catch (error) {
    next(error);
  }
};

export const assignMentor = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to assign mentors'));
  }
  try {
    const updatedMentor = await Mentor.findByIdAndUpdate(
      req.params.mentorId,
      { $set: { isAssigned: true } },
      { new: true }
    );
    res.status(200).json(updatedMentor);
  } catch (error) {
    next(error);
  }
};

