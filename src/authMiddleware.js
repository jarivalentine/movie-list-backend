import jsonwebtoken from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error("Authorization header not found");
    }

    const token = authHeader.replace("Bearer ", "");
    const data = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    if (!data) {
      throw new Error("Invalid token");
    }

    const user = await prisma.user.findUnique({
      where: {
        name: data.name,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}
