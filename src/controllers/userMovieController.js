import UserMovieService from "../services/userMovieService.js";
import MovieService from "../services/movieService.js";

export default class UserMovieController {
  static async addMovie(req, res) {
    try {
      const { name } = req.params;
      const { movieId, score } = req.body;
      const user = req.user;

      await UserMovieService.addMovie(name, movieId, score, user);

      res.status(201).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getMovies(req, res) {
    try {
      const { name } = req.params;

      const movies = await UserMovieService.getMovies(name);
      let combinedMovies = [];

      for (const movie of movies) {
        const movieDetails = await MovieService.getMovieById(movie.movieId);
        const combinedMovie = {
          ...movie,
          poster: movieDetails.poster,
          title: movieDetails.title,
        };
        combinedMovies.push(combinedMovie);
      }

      res.status(200).json(combinedMovies);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getMovie(req, res) {
    try {
      const { name, id } = req.params;

      const movie = await UserMovieService.getMovie(name, id);

      res.status(200).json(movie);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteMovie(req, res) {
    try {
      const { name, id } = req.params;
      const user = req.user;

      await UserMovieService.deleteMovie(name, id, user);

      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
