import 'package:cloud_firestore/cloud_firestore.dart';

class Registration {
  Timestamp createdAt = Timestamp.now();
  final fullName;
  final username;
  final password;
  final profilePicture;
  Registration(
      {this.fullName, this.username, this.password, this.profilePicture = ""});

  Map<String, dynamic> toMapForCol() => {
        "fullName": this.fullName,
        "username": this.username,
        "profilePicture": this.profilePicture,
        "createdAt": this.createdAt
      };

  @override
  toString() =>
      'Registration { fullName: $fullName, username: $username, password: $password }';
}
