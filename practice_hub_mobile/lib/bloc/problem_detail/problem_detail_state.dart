part of 'problem_detail_bloc.dart';

abstract class ProblemDetailState extends Equatable {
  const ProblemDetailState();
  
  @override
  List<Object> get props => [];
}

class ProblemDetailInitial extends ProblemDetailState {}

class ProblemDetailLoading extends ProblemDetailState {}

class ProblemDetailLoaded extends ProblemDetailState {
  final Problem problem;

  ProblemDetailLoaded({required this.problem});

  @override
  List<Object> get props => [problem];
}

class ProblemDetailError extends ProblemDetailState {
  final String message;

  ProblemDetailError({required this.message});

  @override
  List<Object> get props => [message];
}
