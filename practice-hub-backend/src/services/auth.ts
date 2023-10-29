import {
  SignInEmailSchema,
  SignInPhoneSchema,
  SignUpEmailSchema,
  SignUpPhoneSchema,
} from "../validator/auth";
import { adminDb, adminAuth, auth } from "../config/firebase";
import admin from "../config/firebase";
import AuthResponse from "../models/AuthResposnse";
import UserSchema from "../schemas/User";
import { signInWithEmailAndPassword } from "firebase/auth";

export default class AuthService {
  static batch = adminDb.batch();

  static async signin(data: JSON): Promise<AuthResponse> {
    let { error, value } = SignInEmailSchema.validate(data);
    if (error) {
      throw error;
    }
    const user = await signInWithEmailAndPassword(
      auth,
      value.email,
      value.password
    );
    const token = await user.user.getIdToken();
    return { token, verified: user.user.emailVerified, id: user.user.uid };
  }

  static async signup(data: JSON): Promise<any> {
    let { error, value } = SignUpEmailSchema.validate(data);
    if (error) {
      throw error;
    }

    const {
      email,
      phone,
      password,
      photo,
      fullName,
      favouriteCount,
      favouriteList,
      problemSolvedCount,
      problemLikedCount,
      problemSolvedList,
      problemLikedList,
      discussionCount,
      discussionList,
      discussionLikedList,
      discussionDislikedList,
      discussionCommentList,
      discussionCommentLikeList,
      discussionCommentDislikeList,
    } = value;
    const user = await adminAuth.createUser({
      email: email,
      password: password,
    });
    await adminAuth.setCustomUserClaims(user.uid, { role: "user" });

    this.batch.set(UserSchema.userDoc(user.uid), {
      email,
      fullName,
      phone,
      photo,
      favouriteCount,
      problemSolvedCount,
      problemLikedCount,
      discussionCount,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    this.batch.set(UserSchema.userDetailDoc(user.uid), {
      favouriteList,
      problemSolvedList,
      problemLikedList,
      discussionList,
    });

    this.batch.set(UserSchema.UserExtraDetailDoc(user.uid), {
      discussionLikedList,
      discussionDislikedList,
      discussionCommentList,
      discussionCommentLikeList,
      discussionCommentDislikeList,
    });

    await this.batch.commit();
    return { verified: user.emailVerified, id: user.uid };
    // return await this.signin(JSON.parse(JSON.stringify({email:email, password:password})));
  }
}
