import 'dart:async';
import 'dart:math';

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:practice_hub/models/problem.dto.dart';

part 'problem_detail_event.dart';
part 'problem_detail_state.dart';

class ProblemDetailBloc extends Bloc<ProblemDetailEvent, ProblemDetailState> {
  ProblemDetailBloc() : super(ProblemDetailInitial()) {
    on<ProblemDetailLoad>(_onProblemDetailLoad);
    on<ProblemDetailSubmission>(_onProblemDetailSubmission);
  }

  FutureOr<void> _onProblemDetailLoad(ProblemDetailLoad event, Emitter<ProblemDetailState> emit) {
    emit(ProblemDetailLoading());
    try{
      emit(ProblemDetailLoaded(problem: event.problem));
    }catch(e){
      emit(ProblemDetailError(message: e.toString()));
    }
  }

  FutureOr<void> _onProblemDetailSubmission(ProblemDetailSubmission event, Emitter<ProblemDetailState> emit) {
  }
}
