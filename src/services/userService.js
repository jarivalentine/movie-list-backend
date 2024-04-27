import { PrismaClient } from "@prisma/client";
import { hash, compare } from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const prisma = new PrismaClient();

export default class UserService {
  static async register(name, password) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          name,
        },
      });
      if (user) {
        throw new Error("User already exists");
      }

      password = await hash(password, 10);
      await prisma.user.create({
        data: {
          name,
          password,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async login(name, password) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          name,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }

      const isPasswordValid = await compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      const token = jsonwebtoken.sign({ name }, process.env.JWT_SECRET);

      return token;
    } catch (error) {
      throw new Error(error);
    }
  }
}
