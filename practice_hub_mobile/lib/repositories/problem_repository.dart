import 'dart:convert';
import 'dart:html';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:practice_hub/models/problem.dto.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class ProblemRepository {
  final FirebaseAuth _auth;
  final FirebaseFirestore _firestore;

  ProblemRepository({required auth, required firestore})
      : _auth = auth,
        _firestore = firestore;

  Future<Problem> addProblem(Problem problem) async {
    var response =
        await _firestore.collection("problems").add(problem.toCreate());
    problem.id = response.id;
    // var response2 = await Supabase.instance.client
    //     .from("problems")
    //     .insert(problem.toCreate());
    // print("========supabase=${response2.data}");
    return problem;
  }

  Future<List<Problem>> getProblem() async {
    QuerySnapshot problems = await _firestore.collection("problems").get();
    List<Problem> problemList = [];

    problems.docs.forEach((element) {
      Map problem = element.data() as Map<String, dynamic>;
      problem["id"] = element.id;
      problemList.add(Problem.fromDocument(problem));
    });
    return problemList;
  }
}
