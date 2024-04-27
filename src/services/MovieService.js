import fetch from "node-fetch";

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`;

export default class MovieSerice {
  static async getMoviesByTitle(title) {
    try {
      const fullUrl = `${API_URL}&s=${title}&type=movie`;
      const response = await fetch(fullUrl);
      const data = await response.json();
      if (!data.Search) return [];
      let result = data.Search.map((movie) => ({
        movieId: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
      }));
      result = result.filter((movie) => movie.poster !== "N/A");
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getMovieById(id) {
    try {
      const fullUrl = `${API_URL}&i=${id}`;
      const response = await fetch(fullUrl);
      const data = await response.json();
      const result = {
        title: data.Title,
        year: data.Year,
        runtime: data.Runtime,
        director: data.Director,
        actors: data.Actors,
        poster: data.Poster,
      };
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
