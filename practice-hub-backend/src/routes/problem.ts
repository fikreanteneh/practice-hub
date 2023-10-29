import express from "express";
import { createComment, createDiscussion, createProblem, getProblemById, getProblemDetailById } from "../controllers/problem";
const problemsRouter = express.Router();

problemsRouter.get("/:param")
problemsRouter.get("/description/:id", getProblemById)
problemsRouter.get("/detail/:id", getProblemDetailById)
problemsRouter.post("/addproblem", createProblem);

problemsRouter.post("/detail/:id/discussion/addiscussion", createDiscussion)
problemsRouter.post("/detail/:id/discussion/:id/addcomment", createComment)


problemsRouter.get("/detail/:id/discussion")
problemsRouter.get("/discussion/:id")
problemsRouter.get("/discussion/:id/comment")
problemsRouter.post("discussion/addcomment")

export default problemsRouter;