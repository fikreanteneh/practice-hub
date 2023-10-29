import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:meta/meta.dart';
import 'package:practice_hub/models/registration.dto.dart';
import 'package:practice_hub/models/user.dto.dart';
import 'package:practice_hub/repositories/user_repostory.dart';

part 'auth_event.dart';
part 'auth_state.dart';

class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final UserRepository _userRepository;
  AuthBloc(this._userRepository) : super(AuthLoading()) {
    on<Signin>(_onSignin);
    on<Signup>(_onSignup);
    on<Signout>(_onSignout);
    on<SetUser>(_onSetUser);

    // Stream<User?> get authStateChanges => _auth.authStateChanges();

    _userRepository.auth.authStateChanges().listen((user) {
      if (user == null && (state is AuthLoggedin || state is AuthLoading)) {
        add(Signout());
      } else if (user != null && state is! AuthLoggedin) {
        add(SetUser(user: user));
      }
    });
  }

  FutureOr<void> _onSignin(Signin event, Emitter<AuthState> emit) async {
    emit(AuthSubmitting());
    try {
      await _userRepository.signinWithEmail(event.username, event.password);
    } catch (e) {
      emit(AuthError(message: e.toString()));
    }
  }

  FutureOr<void> _onSignup(Signup event, Emitter<AuthState> emit) async {
    emit(AuthSubmitting());
    try {
      await _userRepository.signupWithEmail(event.registration);
    } catch (e) {
      emit(AuthError(message: e.toString()));
    }
  }

  FutureOr<void> _onSignout(Signout event, Emitter<AuthState> emit) async {
    await _userRepository.signout();
    emit(AuthInitial());
  }

  FutureOr<void> _onSetUser(SetUser event, Emitter<AuthState> emit) async {
    try {
      UserDto userDto = await _userRepository.getUser(event.user);
      emit(AuthLoggedin(user: event.user, userDto: userDto));
    } catch (e) {
      emit(AuthError(message: e.toString()));
    }
  }
}
