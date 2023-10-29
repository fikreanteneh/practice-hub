import 'package:practice_hub/models/comments.dto..dart';

class Discussion {
  String id;
  Map content;
  String title;
  List<String> tags;
  int likes;
  int dislikes;
  int views;
  String author;
  DateTime createdAt;
  List<Comment> comments;
  Discussion(
      {this.id = "",
      required this.content,
      required this.title,
      required this.tags,
      this.likes = 0,
      this.dislikes = 0,
      this.views = 0,
      required this.author,
      required this.createdAt,
      this.comments = const []
      });
}
