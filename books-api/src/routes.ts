import { Router } from "express";
import bookController from "./books/controllers/book.controller";

const routes = Router();

routes.post("/books", bookController.create);

routes.get("/books", bookController.findAll);

routes.get("/books/:id", bookController.findbyId);

routes.delete("/books/:id", bookController.delete);

export { routes };
