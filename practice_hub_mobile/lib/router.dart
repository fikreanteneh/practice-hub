import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:practice_hub/bloc/auth/auth_bloc.dart';
import 'package:practice_hub/models/problem.dto.dart';
import 'package:practice_hub/ui/pages/home.dart';
import 'package:practice_hub/ui/pages/problem_detail.dart';
import 'package:practice_hub/ui/pages/signin.dart';
import 'package:practice_hub/ui/pages/signup.dart';
import 'package:practice_hub/ui/widgets/loading.dart';

GoRouter router = GoRouter(
  routes: [
    GoRoute(
      path: "/",
      builder: (context, state) => const Initial(),
    ),
    GoRoute(
      path: '/signup',
      builder: (context, state) => const SignUpScreen(),
    ),
    GoRoute(
        path: '/home',
        builder: (context, state) => const HomeScreen(),
        routes: [
          GoRoute(
            path: 'problem/:id',
            builder: (context, state) => ProblemDetailScreen(problem: state.extra as Problem),
          ),
          GoRoute(
            path: 'discussion',
            builder: (context, state) => const HomeScreen(),
          ),
          GoRoute(
            path: 'profile',
            builder: (context, state) => const HomeScreen(),
          ),
        ]),
  ],
);

class Initial extends StatefulWidget {
  const Initial({Key? key}) : super(key: key);

  @override
  State<Initial> createState() => _InitialState();
}

class _InitialState extends State<Initial> {
  @override
  Widget build(BuildContext context) {
    return BlocConsumer<AuthBloc, AuthState>(listener: ((context, state) {
      if (state is AuthLoggedin) {
        GoRouter.of(context).go("home");
      }
    }), builder: (context, state) {
      if (state is AuthLoading) {
        return const LoadingScreen();
      }
      return const SigninScreen();
    });
  }
}
