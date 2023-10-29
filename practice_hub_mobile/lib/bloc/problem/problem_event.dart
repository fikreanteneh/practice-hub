part of 'problem_bloc.dart';

abstract class ProblemEvent extends Equatable {
  const ProblemEvent();
  @override
  List<Object> get props => [];
}


class ProblemLoad extends ProblemEvent {
  final List<String> tags;
  ProblemLoad({this.tags = const []});
  @override
  List<Object> get props => [tags];
}


class ProblemLoadDisscussion extends ProblemEvent {
  final String id;
  ProblemLoadDisscussion({required this.id});
  @override
  List<Object> get props => [id];
}


class ProblemLoadDisccussionComments extends ProblemEvent {
  final String problemId;
  final String id;
  ProblemLoadDisccussionComments({required this.id, required this.problemId});
  @override
  List<Object> get props => [id];
}


class ProblemAdd extends ProblemEvent {
  final Problem problem;
  ProblemAdd({required this.problem});
  @override
  List<Object> get props => [problem];
}


class ProblemUpdate extends ProblemEvent {
  final Problem problem;
  ProblemUpdate({required this.problem});
  @override
  List<Object> get props => [problem];
}