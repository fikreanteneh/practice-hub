part of 'problem_bloc.dart';

abstract class ProblemState extends Equatable {
  const ProblemState();
  
  @override
  List<Object> get props => [];
}

class ProblemInitial extends ProblemState {}

class ProblemLoading extends ProblemState {}

class ProblemSubmitting extends ProblemState {}

class ProblemLoaded extends ProblemState {
  final List<Problem> problems;
  ProblemLoaded({required this.problems});
  @override
  List<Object> get props => [problems];
}


class ProblemError extends ProblemState {
  final String message;
  ProblemError({required this.message});
  @override
  List<Object> get props => [message];
}

