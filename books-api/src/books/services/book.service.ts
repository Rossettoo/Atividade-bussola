import bookModel from "../schemas/book.schema";
import { BookType } from "../types/book.type";

class BookService {
  async create(book: BookType) {
    const createdBook = await bookModel.create(book);
    return createdBook;
  }


  async findAll() {

    const books = await bookModel.find();
    return books;

  }

  async findbyId(id: string) {
    const book = await bookModel.findById(id);
    return book;
  }

  async delete(id: string) {
    const deletedBook = await bookModel.findByIdAndDelete(id);
    return deletedBook;

  }

  async update(id: string, book: BookType) {
    const updatedBook = await bookModel.findByIdAndUpdate(id,
      {
        title: book.title, author: book.author,
        ISBN: book.ISBN,
        price: book.price
      }

      , { new: true });
    return updatedBook;
  }

}

export default new BookService();
