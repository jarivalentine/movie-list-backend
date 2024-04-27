import express from "express";
import authMiddleware from "./authMiddleware.js";
import UserController from "./controllers/userController.js";
import MovieController from "./controllers/movieController.js";
import UserMovieController from "./controllers/userMovieController.js";

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.get("/movie", MovieController.getMoviesByTitle);
router.get("/movie/:id", MovieController.getMovieById);

router.post("/user/:name/movie", authMiddleware, UserMovieController.addMovie);
router.get("/user/:name/movie", UserMovieController.getMovies);
router.get("/user/:name/movie/:id", UserMovieController.getMovie);
router.delete(
  "/user/:name/movie/:id",
  authMiddleware,
  UserMovieController.deleteMovie
);

export default router;
