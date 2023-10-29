import 'dart:async';
import 'dart:html';

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:practice_hub/models/problem.dto.dart';
import 'package:practice_hub/repositories/problem_repository.dart';

part 'problem_event.dart';
part 'problem_state.dart';

class ProblemBloc extends Bloc<ProblemEvent, ProblemState> {
  final ProblemRepository _problemRepository;
  ProblemBloc(this._problemRepository) : super(ProblemInitial()) {
    on<ProblemLoad>(_onProblemLoad);
    on<ProblemLoadDisscussion>(_onProblemLoadDisscussion);
    on<ProblemLoadDisccussionComments>(_onProblemLoadDisccussionComments);
    on<ProblemAdd>(_onProblemAdd);
    on<ProblemUpdate>(_onProblemUpdate);
  }

  FutureOr<void> _onProblemLoad(
      ProblemLoad event, Emitter<ProblemState> emit) async {
    emit(ProblemLoading());
    try {
      List<Problem> problem = await _problemRepository.getProblem();
      emit(ProblemLoaded(problems: problem));
    } catch (error) {
      emit(ProblemError(message: error.toString()));
    }
  }

  FutureOr<void> _onProblemLoadDisscussion(
      ProblemLoadDisscussion event, Emitter<ProblemState> emit) {}

  FutureOr<void> _onProblemLoadDisccussionComments(
      ProblemLoadDisccussionComments event, Emitter<ProblemState> emit) {}

  Future<FutureOr<void>> _onProblemAdd(
      ProblemAdd event, Emitter<ProblemState> emit) async {
    List<Problem> prevState = [];
    if (state is ProblemLoaded) {
      prevState = (state as ProblemLoaded).problems;
    }
    try {
      emit(ProblemSubmitting());
      Problem problem = await _problemRepository.addProblem(event.problem);
      emit(ProblemLoaded(problems: []));
    } catch (error) {
      print("=====sup err ${error.toString()}");
      emit(ProblemError(message: error.toString()));
    }
  }

  FutureOr<void> _onProblemUpdate(
      ProblemUpdate event, Emitter<ProblemState> emit) {}
}
