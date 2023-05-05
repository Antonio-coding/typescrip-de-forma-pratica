import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "thiago", email: " antoniot@gmail.com.uk" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: { name: "Antonio Thiago", email: "antonioThiago@rocketseat.com.br" },
      message: { subject: "bem viando ao estudos", body: "seja bem vindo" },
    });
    return res.send();
  },
};
