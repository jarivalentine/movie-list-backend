import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class UserMovieService {
  static async addMovie(name, movieId, score, user) {
    try {
      if (name !== user.name) {
        throw new Error("You can't add a movie to another user");
      }

      if (score < 1 || score > 10) {
        throw new Error("Score must be between 1 and 10");
      }

      await prisma.userMovie.create({
        data: {
          movieId,
          score,
          user: {
            connect: {
              name,
            },
          },
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getMovies(name) {
    try {
      const movies = await prisma.userMovie.findMany({
        where: {
          user: {
            name,
          },
        },
      });

      return movies;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getMovie(name, id) {
    try {
      const movie = await prisma.userMovie.findUnique({
        where: {
          movieId_userName: {
            movieId: id,
            userName: name,
          },
        },
      });

      return movie;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteMovie(name, id, user) {
    try {
      if (name !== user.name) {
        throw new Error("You can't delete a movie from another user");
      }

      await prisma.userMovie.delete({
        where: {
          movieId_userName: {
            movieId: id,
            userName: name,
          },
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
