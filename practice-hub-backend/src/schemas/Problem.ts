import { DocumentReference, CollectionReference, DocumentData } from "firebase-admin/firestore";
import {  adminDb } from "../config/firebase";

export default class ProblemShema {

    static problemRef: CollectionReference = adminDb.collection('problems');
    static problemDoc: (id: string) => DocumentReference = (id: string) => this.problemRef.doc(id);

    static problemDetailRef: CollectionReference = adminDb.collection('problemDetails');
    static problemDetailDoc: (id: string) => DocumentReference = (id) => this.problemDetailRef.doc(id);

    static discussionRef: (problemId: string) => CollectionReference = (problemId) => this.problemDoc(problemId).collection('discussions');
    static discussionDoc: (problemId: string, discussionId: string) => DocumentReference = (problemId, discussionId) => this.discussionRef(problemId).doc(discussionId);

    static discussionDetailRef: (problemId: string) => CollectionReference = (problemId: string) => adminDb.collection('problems').doc(problemId).collection('discussionDetails');
    static discussionDetailDoc: (problemId: string, discussionId: string) => DocumentReference = (problemId, discussionId) => this.discussionDetailRef(problemId).doc(discussionId);

    static commentRef: (problemId: string, discussionId: string) => CollectionReference = (problemId, discussionId) => this.discussionDoc(problemId, discussionId).collection('comments');
    static commentDoc: (problemId:string, discussionId: string, commentId:string) => DocumentReference = (problemId, discussionId, commentId) => this.commentRef(problemId, discussionId).doc(commentId);

    // static problemRef: CollectionReference = collection(db, 'problems');

    // static problemDetailRef: CollectionReference = collection(db, 'problemDetails');

    // static problemDoc: (id: string) => DocumentReference<DocumentData> = (id: string) => doc(this.problemRef, id);

    // static problemDetailDoc: (id: string) => DocumentReference<DocumentData> = (id: string) => doc(this.problemDetailRef, id);

    // static discussionRef: (id: string) => CollectionReference = (id: string) => collection(this.problemDoc(id), 'discussions');

    // static discussionDetailRef: (id: string) => CollectionReference = (id: string) => collection(this.problemDoc(id), 'discussionDetails');

    // static discussionDoc: (problemId: string, id: string) => DocumentReference = (problemId: string, id: string) => doc(this.discussionRef(problemId), id);

    // static discussionDetailDoc: (problemId: string, id: string) => DocumentReference = (problemId: string, id: string) => doc(this.discussionDetailRef(problemId), id);

    // static commentRef: (problemId: string, discussionId: string) => CollectionReference = (problemId: string, discussionId: string) => collection(this.discussionRef(problemId), discussionId);

    // static commentDoc: (problemId: string, discussionId: string, id: string) => DocumentReference = (problemId: string, discussionId: string, id: string) => doc(this.commentRef(problemId, discussionId), id);
}