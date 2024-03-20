import express from "express";
import booksController from "../controllers/booksController.js";

import validateBody from "../decorators/validateBody.js";
import { addSchema } from "../schemas/booksSchema.js";

const booksRouter = express.Router();

booksRouter.get("/", booksController.getAll);

booksRouter.get("/:id", booksController.getById);

booksRouter.post("/", validateBody(addSchema), booksController.add);

booksRouter.put("/:id", validateBody(addSchema), booksController.updateById);

booksRouter.delete("/:id", booksController.removeById);

export default booksRouter;