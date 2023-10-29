part of 'auth_bloc.dart';

@immutable
abstract class AuthState extends Equatable {}

class AuthInitial extends AuthState {
  @override
  List<Object?> get props => [];
}

class AuthLoading extends AuthState {
  @override
  List<Object?> get props => throw UnimplementedError();
}

class AuthSubmitting extends AuthState {
  @override
  List<Object?> get props => throw UnimplementedError();
}

class AuthLoggedin extends AuthState {
  final UserDto userDto;
  final User user;
  AuthLoggedin({required this.user, required this.userDto});
  @override
  List<Object?> get props => [user, userDto];
}

class AuthError extends AuthState {
  final String message;
  AuthError({required this.message});

  @override
  List<Object?> get props => [message];
}
