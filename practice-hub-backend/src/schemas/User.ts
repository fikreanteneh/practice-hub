import { DocumentReference, CollectionReference } from "firebase-admin/firestore";
import {  adminDb } from "../config/firebase";



export default class UserSchema {

    static userRef: CollectionReference = adminDb.collection('users');
    static userDoc: (id: string) => DocumentReference = (id: string) => this.userRef.doc(id);

    static userDetailRef: CollectionReference = adminDb.collection('userDetails');
    static userDetailDoc: (id: string) => DocumentReference = (id: string) => this.userDetailRef.doc(id);

    static UserExtraDetailRef = adminDb.collection('userExtraDetails');
    static UserExtraDetailDoc: (id: string) => DocumentReference = (id: string) => this.UserExtraDetailRef.doc(id);
}