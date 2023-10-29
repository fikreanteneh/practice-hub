import CatchAsyncErrors from "../middlewares/catchAsyncErrors";
import { Request, Response } from "express";
import ProblemService from "../services/problem";

export const getProblemById = CatchAsyncErrors(async (req: Request, res:Response) => {
    const id = req.params.id
    const problem = await ProblemService.getProblemById(id);
    return res.status(200).json(problem)
});


export const getProblemDetailById = CatchAsyncErrors(async (req: Request, res:Response) => {
    const id = req.params.id
    const problem = await ProblemService.getProblemDetailById(id);
    return res.status(200).json(problem)
});

export const createProblem = CatchAsyncErrors(async (req: Request, res:Response) => {
    const problem = await ProblemService.createProblem(req.body);
    return res.status(200).json(problem)
});

export const createDiscussion = CatchAsyncErrors(async (req: Request, res:Response) => {
    const discussion = await ProblemService.createDiscussion(req.body);
    return res.status(200).json(discussion)
});

export const createComment = CatchAsyncErrors(async (req: Request, res:Response) => {
    const comment = await ProblemService.createComment(req.body);
    return res.status(200).json(comment)
});