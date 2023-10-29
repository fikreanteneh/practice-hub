import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:practice_hub/bloc/auth/auth_bloc.dart';
import 'package:practice_hub/ui/constants.dart';
import 'package:practice_hub/ui/widgets/custom_button.dart';
import 'package:practice_hub/ui/widgets/custom_textfield.dart';

class SigninScreen extends StatelessWidget {
  const SigninScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Sign in'),
        centerTitle: true,
      ),
      body: const Padding(padding: EdgeInsets.all(20.0), child: LoginForm()),
    );
  }
}

class LoginForm extends StatefulWidget {
  const LoginForm({Key? key}) : super(key: key);

  @override
  State<LoginForm> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final _signInFormKey = GlobalKey<FormState>();
  final TextEditingController _userNameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return BlocConsumer<AuthBloc, AuthState>(
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
          child: Form(
            key: _signInFormKey,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                kVerticalSizeBox,
                const Text(
                  "Welcome again",
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
                ),
                kVerticalSizeBox,
                UsernameInput(controller: _userNameController),
                kVerticalSizeBox,
                PasswordInput(controller: _passwordController),
                kVerticalSizeBox,
                Center(
                  child: GestureDetector(
                    onTap: () {
                      GoRouter.of(context).go('/signup');
                    },
                    child: const Text.rich(
                      TextSpan(
                        text: "Don't have an account?  ",
                        style: TextStyle(fontSize: 15),
                        children: [
                          TextSpan(
                            text: "Create a new one",
                            style: TextStyle(
                              fontSize: 15,
                              color: Colors.blue,
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                kVerticalSizeBox,
                BlocBuilder<AuthBloc, AuthState>(
                  builder: (context, state) {
                    if (state is AuthSubmitting)
                      return const Center(child: CircularProgressIndicator());
                    return CustomButton(
                        text: "Sign in",
                        onpressed: () {
                          if (_signInFormKey.currentState!.validate()) {
                            final authBloc = BlocProvider.of<AuthBloc>(context);
                            authBloc.add(Signin(
                              username: _userNameController.text,
                              password: _passwordController.text,
                            ));
                          }
                        });
                  },
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
