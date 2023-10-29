import 'dart:convert';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:practice_hub/models/discussion.dto.dart';

class Problem {
  String id;
  String author;
  String title;
  List tags;
  int? likes;
  int? dislikes;
  List question;
  List description;
  int choices;
  List solutions;
  List<Discussion>? discussions;
  DateTime? createdAt = DateTime.now();

  Problem(
      {this.id = "",
      required this.author,
      required this.title,
      required this.tags,
      this.likes = 0,
      this.dislikes = 0,
      required this.question,
      this.description = const [],
      required this.choices,
      required this.solutions,
      this.discussions = const [],
      this.createdAt});

  @override
  String toString() {
    return "Problem: $title, $tags, $question, $choices, $solutions, $author, ";
  }

  Map<String, dynamic> toCreate() {
    return {
      "author": author,
      "title": title,
      "tags": tags,
      "likes": likes,
      "dislikes": dislikes,
      "question": question,
      "description": description,
      "choices": choices,
      "solution": solutions,
      "createdAt": Timestamp.now(),
    };
  }

  factory Problem.fromDocument(doc) {
    return Problem(
        id: doc["id"],
        author: doc["author"],
        title: doc["title"],
        tags: doc["tags"],
        question: doc["question"],
        choices: doc["choices"],
        solutions: doc["solutions"] ?? [],
        likes: doc["likes"] ?? 0,
        dislikes: doc["dislikes"] ?? 0,
        discussions: [], //Todo Parsing to Discussion
        createdAt: doc["createdAt"]?.toDate());
  }
}
