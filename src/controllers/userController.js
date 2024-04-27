import UserService from "../services/userService.js";

export default class UserController {
  static async register(req, res) {
    try {
      const { name, password } = req.body;

      await UserService.register(name, password);

      res.status(201).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { name, password } = req.body;

      const token = await UserService.login(name, password);

      res.status(200).json(token);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
