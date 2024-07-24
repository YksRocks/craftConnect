import User from "../models/users.js";
import bcrypt from "bcrypt";
import Project from "../models/projects.js";
import Portfolio from "../models/portfolio.js";
import Upvote from "../models/Upvote.js";
// export const register = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const user = new User({ username, email, password });
//     await user.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const login = (req, res) => {
//   res.status(200).json({ message: "Logged in successfully", user: req.user });
// };

export const getProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    // Fetch user details

    // Fetch user details
    const user = await User.findById(userId).exec();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch portfolios associated with the user
    // const portfolios = await Portfolio.find({ user: userId }).exec();

    // Fetch projects for each portfolio
    // const projectPromises = portfolios.map((portfolio) =>
    const projects = await Project.find({ user: userId }).exec();
    // );
    // const projects = await Promise.all(projectPromises);

    // Flatten the projects array
    const userProjects = projects.flat();

    // Fetch upvotes for each project
    // const upvotePromises = userProjects.map((project) =>
    //   Upvote.countDocuments({ project: project._id }).exec()
    // );
    // const upvoteCounts = await Promise.all(upvotePromises);

    // // Calculate total upvotes
    // const totalUpvotes = upvoteCounts.reduce((sum, count) => sum + count, 0);

    // Send response with user details, projects, and total upvotes
    const totalVotes = userProjects.reduce(
      (accumulator, project) => accumulator + project.upvotes,
      0
    );
    res.json({
      user,
      // portfolios,
      projects: userProjects,
      totalUpvotes: totalVotes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
