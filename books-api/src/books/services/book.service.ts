import bookModel from "../schemas/book.schema";
import { BookType } from "../types/book.type";

class BookService {
  async create(book: BookType) {
    const createdBook = await bookModel.create(book);
    return createdBook;
  }


async findAll(){

  const books = await bookModel.find();
  return books;

  }

async findbyId(id: string){
  const book = await bookModel.findById(id);

}

async delete(id: string) {
  const deletedBook = await bookModel.findByIdAndDelete(id);
  return deletedBook;

}

}

export default new BookService();
