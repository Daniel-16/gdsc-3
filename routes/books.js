import express from "express";
import { createBook, deleteBook, getBookById, getBooks, updateBook } from "../controller/booksController.js";
const bookRouter = express.Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBookById);
bookRouter.post("/", createBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;