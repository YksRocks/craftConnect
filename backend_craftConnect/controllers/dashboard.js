import Project from "../models/Projects.js";
import Comment from "../models/Comments.js";
import Upvote from "../models/Upvote.js";

export const getDashboardData = async (req, res) => {
  try {
    const projects = await Project.find().populate("user");
    const comments = await Comment.find();
    const upvotes = await Upvote.find();

    const dashboardData = projects.map((project) => {
      const projectComments = comments.filter((comment) =>
        comment.project.equals(project._id)
      ).length;
      const projectUpvotes = upvotes.filter((upvote) =>
        upvote.project.equals(project._id)
      ).length;
      const profileVisits = 0; // Assuming you have some way to track profile visits

      return {
        project,
        comments: projectComments,
        upvotes: projectUpvotes,
        profileVisits,
      };
    });

    res.status(200).json(dashboardData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
