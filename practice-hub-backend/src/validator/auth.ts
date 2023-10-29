import Joi from "joi"

const general = {
    favouriteCount: Joi.number().default(0),
    favouriteList: Joi.array().default([]),

    problemSolvedCount: Joi.number().default(0),
    problemLikedCount: Joi.number().default(0),
    problemSolvedList: Joi.array().default([]),
    problemLikedList: Joi.array().default([]),
    
    discussionCount: Joi.number().default(0),
    discussionList: Joi.object().default({}),
    discussionLikedList: Joi.object().default({}),
    discussionDislikedList: Joi.object().default({}),
    
    discussionCommentList: Joi.object().default({}),
    discussionCommentLikeList: Joi.object().default({}),
    discussionCommentDislikeList: Joi.object().default({}),
}

export const SignUpEmailSchema = Joi.object({
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^\+[1-9]\d{1,14}$/).default(""),
    password: Joi.string().min(6).required(),
    fullName: Joi.string().min(3).required(),
    photo: Joi.string().default(""),
    confirmPassword: Joi.string().default(""),
    ...general
})


export const SignUpPhoneSchema = Joi.object({
    phone: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    fullName: Joi.string().min(3).required(),
    photo: Joi.string().default(""),
    // ...general
})


export const SignInEmailSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})

export const SignInPhoneSchema = Joi.object({
    phone: Joi.string().pattern(/^\+[1-9]\d{1,14}$/).required(),
    password: Joi.string().min(6).required(),
})


