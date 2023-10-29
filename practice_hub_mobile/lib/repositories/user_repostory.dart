import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:practice_hub/models/registration.dto.dart';
import 'package:practice_hub/models/user.dto.dart';

class UserRepository {
  final FirebaseAuth _auth;
  final FirebaseFirestore _firestore;

  UserRepository({required auth, required firestore})
      : _auth = auth,
        _firestore = firestore;

  FirebaseAuth get auth => _auth;

  Future<void> signinWithEmail(String email, String password) async {
    await _auth.signInWithEmailAndPassword(email: email, password: password);
  }

  Future<void> signupWithEmail(Registration registration) async {
    var authResult = await _auth.createUserWithEmailAndPassword(
        email: registration.username, password: registration.password);
    final user = authResult.user;
    await _firestore
        .collection("users")
        .doc(user?.uid)
        .set(registration.toMapForCol());
  }

  Future<void> signout() async {
    await _auth.signOut();
  }

  Stream<User?> get authStateChanges => _auth.authStateChanges();

  Future<UserDto> getUser(user) async {
    DocumentSnapshot userObj =
        await _firestore.collection("users").doc(user?.uid).get();

    Map doc = userObj.data() as Map<String, dynamic>;
    doc["uid"] = user?.uid;

    return UserDto.fromDocument(doc);
  }
}
