import 'package:cloud_firestore/cloud_firestore.dart';

class Comment {
  String id;
  String author;
  String content; // Map if we wanna include pics with full text editing options
  int likes;
  int dislikes;
  Timestamp createdAt;
  Comment(
      {this.id = "",
      required this.author,
      required this.content,
      this.likes = 0,
      this.dislikes = 0,
      required this.createdAt});
}
