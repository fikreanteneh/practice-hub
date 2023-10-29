part of 'problem_detail_bloc.dart';

abstract class ProblemDetailEvent extends Equatable {
  const ProblemDetailEvent();
  @override
  List<Object> get props => [];
}



class ProblemDetailLoad extends ProblemDetailEvent {
  final Problem problem;
  ProblemDetailLoad({required this.problem});
  @override
  List<Object> get props => [problem];
}

class ProblemDetailSubmission extends ProblemDetailEvent {
  final List<String> answers;
  ProblemDetailSubmission({required this.answers});
  @override
  List<Object> get props => [answers];
}