import MovieService from "../services/movieService.js";

export default class MovieController {
  static async getMoviesByTitle(req, res) {
    try {
      const { title } = req.query;

      const movies = await MovieService.getMoviesByTitle(title);

      res.status(200).json(movies);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getMovieById(req, res) {
    try {
      const { id } = req.params;

      const movie = await MovieService.getMovieById(id);

      res.status(200).json(movie);
    } catch {
      res.status(400).json({ error: error.message });
    }
  }
}
