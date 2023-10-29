import 'package:flutter/material.dart';
import 'package:flutter_quill/flutter_quill.dart' as quill;
import 'package:practice_hub/models/problem.dto.dart';

class ProblemDetailScreen extends StatelessWidget {
  Problem problem;

  ProblemDetailScreen({super.key, required this.problem});

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 3,
        child: Scaffold(
            // appBar: AppBar(
            //   bottom: const TabBar(
            //     tabs: [
            //       Tab(text: "Problem"),
            //       Tab(text: "Solution"),
            //       Tab(text: "Discussion"),
            //     ],
            //   ),
            // ),
            body: TabBarView(
          children: [
            Container(
                child: quill.QuillEditor.basic(
              controller: quill.QuillController.basic(),
              readOnly: true,
            )),
            Container(
                child: quill.QuillEditor.basic(
              controller: quill.QuillController.basic(),
              readOnly: true,
            )),
            Container(
              child: Text("discussion"),
            )
          ],
        )));
  }
}
