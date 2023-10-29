import { serverTimestamp } from "firebase/firestore";
import { adminDb } from "config/firebase";
import Joi from "joi"

export const CreateProblemSchema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    tag: Joi.array().min(1).required(),
    question: Joi.array().min(1).required(),
    answer: Joi.array().min(2).max(10).required(),
    difficulty: Joi.string().valid('easy', 'medium', 'hard').required(),
    solution: Joi.array().min(1).default(null),
    premium : Joi.boolean().default(false),
    likeCount : Joi.number().default(0),
    favouriteCount : Joi.number().default(0),
    discussionCount : Joi.number().default(0),
});


export const CreateDiscussionSchema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    problemId: Joi.string().required(),
    userId: Joi.string().required(),
    userName: Joi.string().required(),
    userPhoto: Joi.string(),
    content: Joi.array().min(1).required(),
    likeCount: Joi.number().default(0),
    dislikeCount:Joi.number().default(0),
    commentCount: Joi.number().default(0),
})


export const CreateCommentSchema = Joi.object({
    problemId:Joi.string().required(),
    discussionId: Joi.string().required(),
    userId: Joi.string().required(),
    userName: Joi.string().required(),
    userPhoto: Joi.string(),
    content: Joi.string().min(1).required(),
    likeCount: Joi.number().default(0),
    dislikeCount:Joi.number().default(0),
})


export const CreateProblemLikeSchema = Joi.object({
    userId: Joi.string().required(),
    problemId: Joi.string().required(),
})