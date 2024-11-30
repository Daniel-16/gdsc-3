import express from 'express';
import bookRouter from './routes/books.js';

const app = express();
const PORT = 3000;

app.use(express.json())

app.use("/books", bookRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});