import { CreateCommentSchema, CreateDiscussionSchema, CreateProblemSchema } from "../validator/problem";
import { db, adminDb } from "../config/firebase";
import { collection, writeBatch, doc, getDoc, serverTimestamp, CollectionReference, DocumentData, DocumentReference } from "firebase/firestore"; 
import admin from "../config/firebase";
import ProblemShema from "../schemas/Problem";
import UserSchema from "../schemas/User";
import { any } from "joi";
import { createProblem } from './../controllers/problem';


export default class ProblemService{

    static batch = adminDb.batch();

    static async getProblemById(id: string){
        const problem = await ProblemShema.problemDoc(id).get();
        return problem.data()
    }

    static async getProblemDetailById(id: string){
        const problem = await getDoc(ProblemShema.problemDetailDoc(id) as any)
        return problem.data()
    }

    static async createProblem(data: JSON){
        const {error , value} = CreateProblemSchema.validate(data);
        if (error){
            throw error;
        }
        const {title, tag, question, solution, answer, premium, difficulty, likeCount, favouriteCount, discussionCount} = value;
        
        const id = ProblemShema.problemRef.doc().id;
      
        this.batch.set(ProblemShema.problemDoc(id), { 
            title, 
            tag, 
            likeCount, 
            favouriteCount, 
            discussionCount, 
            premium, 
            createdAt: admin.firestore.FieldValue.serverTimestamp(), 
            difficulty})

        this.batch.set(ProblemShema.problemDetailDoc(id), { 
            question, 
            solution, 
            answer})
        
        await this.batch.commit();
        return {id};
    }
    
    static async createDiscussion(data: JSON){
        const {error , value} = CreateDiscussionSchema.validate(data);
        const { title, problemId, userId,userName, userPhoto, content, likeCount, dislikeCount, commentCount} = value;
        const id = ProblemShema.discussionRef(problemId).doc().id;

        await adminDb.runTransaction(async (transaction) => {
            transaction.set(ProblemShema.discussionDoc(problemId, id), {
                title, 
                likeCount : 0, 
                dislikeCount : 0, 
                commentCount : 0,
                userPhoto, 
                userName, 
                userId, 
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
            })

            transaction.set(ProblemShema.discussionDetailDoc(problemId, id), {
                content
            })

            transaction.update(ProblemShema.problemDoc(problemId), {
                discussionCount: admin.firestore.FieldValue.increment(1)
            })

            transaction.update(UserSchema.userDoc(userId), {
                discussionCount: admin.firestore.FieldValue.increment(1)
            })

            transaction.update(UserSchema.userDetailDoc(userId), {
                [`discussionList.${problemId}`]:  admin.firestore.FieldValue.arrayUnion(id),
            })
        })

        return {id};
    }
            
    static async createComment(data: JSON){
        const {error , value} = CreateCommentSchema.validate(data);
        if (error){
            throw error;
        }
        const id = ProblemShema.commentRef(value.problemId, value.discussionId).doc().id;
        const { problemId,discussionId, userId, userName, userPhoto, content, likeCount, dislikeCount} = value;


        await adminDb.runTransaction(async (transaction) => {
            transaction.set(ProblemShema.commentDoc(problemId, discussionId, id), {
                content,
                likeCount : 0,
                dislikeCount : 0,
                userPhoto,
                userName,
                userId, 
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
            })
            transaction.update(ProblemShema.discussionDoc(problemId, discussionId), {
                commentCount: admin.firestore.FieldValue.increment(1)
            })
            transaction.update(UserSchema.UserExtraDetailDoc(userId), {
                [`discussionCommentList.${problemId}.${discussionId}`]:  admin.firestore.FieldValue.arrayUnion(id),
            })
        })

        return {id};
    }

    // static async createProblemLike(data: JSON){
    //     const {error , value} = CreateProblemSchema.validate(data);
    //     if (error){
    //         throw error;
    //     }
    //     const { problemId, userId} = value;
    //     const problemDoc = ProblemShema.problemDoc(problemId);
    //     const userDetailDoc = UserSchema.userDetailDoc(userId);
    //     if (problemId in userDetailDoc.data()?.problemLikeList){

    //     await adminDb.runTransaction(async (transaction) => {
    //         transaction.get(userDetailDoc)
    //     })
    // }
    // }
}