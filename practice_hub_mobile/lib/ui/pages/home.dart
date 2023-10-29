import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:practice_hub/bloc/auth/auth_bloc.dart';
import 'package:practice_hub/models/problem.dto.dart';
import 'package:practice_hub/ui/constants.dart';
import 'package:practice_hub/ui/pages/problems.dart';
import 'package:practice_hub/ui/pages/profile.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  int _page = 0;
  List<Widget> pages = [
    ProblemsScreen(),
    const Text("history"),
    const Text("discussion"),
    ProfileScreen(),
  ];
  @override
  Widget build(BuildContext context) {
    final authBloc = BlocProvider.of<AuthBloc>(context);

    return BlocConsumer<AuthBloc, AuthState>(listener: (context, state) {
      if (state is AuthInitial) {
        GoRouter.of(context).go("/");
      }
    }, builder: (context, state) {
      return Scaffold(
        body: SafeArea(child: pages[_page]),
        bottomNavigationBar: BottomNavigationBar(
          backgroundColor: Colors.white,
          
          currentIndex: _page,
          iconSize: 25,
          onTap: (value) {
            setState(() {
              _page = value;
            });
          },
          type: BottomNavigationBarType.fixed,
          items: [
            customNavigationItem(Icons.pages_rounded, "Problem"),
            customNavigationItem(Icons.history, "History"),
            customNavigationItem(Icons.chat_bubble_outline, "Discussion"),
            customNavigationItem(Icons.person_outline, "Profile"),
          ],
        ),
      );
    });
  }
}

BottomNavigationBarItem customNavigationItem(icon, label) {
  return BottomNavigationBarItem(icon: Icon(icon), label: label);
}
