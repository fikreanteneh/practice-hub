import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:practice_hub/models/problem.dto.dart';

class ProblemCard extends StatelessWidget {
  Problem problem;
  int index;
  ProblemCard({Key? key, required this.problem, required this.index})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    print("===============");
    return GestureDetector(
      onTap: () {
        GoRouter.of(context).go("/home/problem/${problem.id}",
            extra: problem);
      },
      child: Card(
        child: Column(children: [
          Row(
            children: [Text(problem.title)],
          ),
          Row(
            children: [
              // Text(problem.createdAt as String),
              Text("${problem.likes}, ${problem.dislikes}")
            ],
          )
        ]),
      ),
    );
  }
}
