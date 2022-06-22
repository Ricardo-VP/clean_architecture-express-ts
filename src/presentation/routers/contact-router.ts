import express from "express";
import { Request, Response } from "express";
import { CreateContactUseCase } from "../../domain/interfaces/use-cases/contact/create-contact";
import { GetAllContactsUseCase } from "../../domain/interfaces/use-cases/contact/get-all-contacts";

export default function ContactsRouter(
  getAllContactsUseCase: GetAllContactsUseCase,
  createContactUseCase: CreateContactUseCase
) {
  const router = express.Router();

  router.get("/", async (request: Request, response: Response) => {
    try {
      const contacts = await getAllContactsUseCase.execute();
      response.send(contacts);
    } catch (err) {
      response.status(500).send({
        message: "Error fetching data",
      });
    }
  });

  router.post("/", async (request: Request, response: Response) => {
    try {
      await createContactUseCase.execute(request.body);
      response.statusCode = 201;
      response.json({
        message: "Created",
      });
    } catch (err) {
      response.status(500).send({
        message: "Error saving data",
      });
    }
  });

  return router;
}
