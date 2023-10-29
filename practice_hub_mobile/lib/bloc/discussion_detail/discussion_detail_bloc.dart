import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';

part 'discussion_detail_event.dart';
part 'discussion_detail_state.dart';

class DiscussionDetailBloc extends Bloc<DiscussionDetailEvent, DiscussionDetailState> {
  DiscussionDetailBloc() : super(DiscussionDetailInitial()) {
    on<DiscussionDetailEvent>((event, emit) {
      // TODO: implement event handler
    });
  }
}
