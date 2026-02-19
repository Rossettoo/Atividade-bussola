import { Request, Response } from "express";
import bookService from "../services/book.service";

class BookController {
  async create(req: Request, res: Response) {
    const createdBook = await bookService.create(req.body);
    res.status(201);
    return res.json(createdBook);
  }

async findAll(req: Request, res: Response){

  const books = await bookService.findAll();
  res.status(200);                    ///CONTROLER VAI CHAMAR A SERVICE, PARA BUSCAR TODOS OS BOOKS, E DEPOIS RETORNAR PARA O USUÁRIO
  return res.json(books);
  }



async findbyId(req: Request, res: Response){
  const { id } = req.params;    //<-///desestruturação de objeto no JavaScript.
  const book = await bookService.findbyId(id)
  res.status(200);
  return res.json(book);

}

async delete(req: Request, res: Response){
  const { id } = req.params;
  await bookService.delete(id);
  return res.status(204).send();
 
}

}
export default new BookController();
