import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:practice_hub/bloc/auth/auth_bloc.dart';
import 'package:practice_hub/bloc/problem/problem_bloc.dart';
import 'package:practice_hub/firebase_options.dart';
import 'package:practice_hub/firebase_services.dart';
import 'package:practice_hub/models/problem.dto.dart';
import 'package:practice_hub/repositories/problem_repository.dart';
import 'package:practice_hub/repositories/user_repostory.dart';
import 'package:practice_hub/router.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  // await Supabase.initialize(
  //   url: 'https://lujoordawupwbenyhffo.supabase.co',
  //   anonKey:
  //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1am9vcmRhd3Vwd2JlbnloZmZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwODczOTksImV4cCI6MjAwNTY2MzM5OX0.RrWKziQmuPnEXSsHhSFbhnlY5RgnA5C04J7sAi1CzGw',
  // );
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({super.key});
  final instances = FirebaseInstances();
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider(
            create: (context) => AuthBloc(UserRepository(
                auth: instances.auth, firestore: instances.firestore))),
        BlocProvider(
            create: (context) => ProblemBloc(ProblemRepository(
                auth: instances.auth, firestore: instances.firestore)))
      ],
      child: MaterialApp.router(
        routerDelegate: router.routerDelegate,
        routeInformationParser: router.routeInformationParser,
        routeInformationProvider: router.routeInformationProvider,
        debugShowCheckedModeBanner: false,
        title: 'Practice Hub',
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
        ),
      ),
    );
  }
}
