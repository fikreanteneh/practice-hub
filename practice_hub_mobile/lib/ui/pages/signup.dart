import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:practice_hub/bloc/auth/auth_bloc.dart';
import 'package:practice_hub/models/registration.dto.dart';
import 'package:practice_hub/ui/constants.dart';
import 'package:practice_hub/ui/widgets/custom_button.dart';
import 'package:practice_hub/ui/widgets/custom_textfield.dart';

class SignUpScreen extends StatefulWidget {
  const SignUpScreen({Key? key}) : super(key: key);

  @override
  State<SignUpScreen> createState() => _SignUpScreen();
}

class _SignUpScreen extends State<SignUpScreen> {
  final _signUpFormKey = GlobalKey<FormState>();
  final TextEditingController _userNameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _fullNameController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Sign up'),
        centerTitle: true,
      ),
      body: BlocConsumer<AuthBloc, AuthState>(
        listener: (context, state) {
          if (state is AuthLoggedin) {
            GoRouter.of(context).go("/home");
          } else if (state is AuthError) {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text(state.message),
              ),
            );
          }
        },
        builder: (context, state) {
          return SingleChildScrollView(
            child: Column(
              children: [
                SafeArea(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Container(
                        padding: const EdgeInsets.all(20),
                        child: Form(
                          key: _signUpFormKey,
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              kVerticalSizeBox,
                              const Center(
                                child: Text(
                                  "Welcome, Sign up for free",
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontWeight: FontWeight.w500,
                                    color: Color.fromARGB(255, 66, 66, 66),
                                  ),
                                ),
                              ),
                              kVerticalSizeBox,
                              kVerticalSizeBox,
                              CustomTextField(
                                controller: _fullNameController,
                                hintText: 'Full Name',
                              ),
                              kVerticalSmallSizeBox,
                              UsernameInput(controller: _userNameController),
                              kVerticalSmallSizeBox,
                              PasswordInput(controller: _passwordController),
                              kVerticalSizeBox,
                              kVerticalSizeBox,
                              Center(
                                child: GestureDetector(
                                  onTap: () {
                                    GoRouter.of(context).go('/');
                                  },
                                  child: const Text.rich(
                                    TextSpan(
                                      text: "Already have an account? ",
                                      style: TextStyle(fontSize: 15),
                                      children: [
                                        TextSpan(
                                          text: "Sign in",
                                          style: TextStyle(
                                            fontSize: 15,
                                            color: Colors.blue,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                              const SizedBox(height: 100),
                              BlocBuilder<AuthBloc, AuthState>(
                                builder: (context, state) {
                                  if (state is AuthSubmitting)
                                    return const Center(
                                        child: CircularProgressIndicator());
                                  return CustomButton(
                                    text: 'Sign up',
                                    onpressed: () {
                                      if (_signUpFormKey.currentState!
                                          .validate()) {
                                        BlocProvider.of<AuthBloc>(context).add(
                                          Signup(
                                              registration: Registration(
                                                  fullName:
                                                      _fullNameController.text,
                                                  username:
                                                      _userNameController.text,
                                                  password: _passwordController
                                                      .text)),
                                        );
                                      }
                                    },
                                  );
                                },
                              )
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
