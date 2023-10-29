part of 'auth_bloc.dart';

@immutable
abstract class AuthEvent extends Equatable {}

class Signin extends AuthEvent {
  final String username;
  final String password;
  Signin({required this.username, required this.password});

  @override
  List<Object?> get props => [username, password];
}

class Signout extends AuthEvent {
  @override
  List<Object?> get props => [];
}

class Signup extends AuthEvent {
  final Registration registration;
  Signup({required this.registration});

  @override
  List<Object?> get props => [registration];
}

class SetUser extends AuthEvent {
  final User user;
  SetUser({required this.user});

  @override
  List<Object?> get props => [user];
}
