import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:practice_hub/bloc/problem/problem_bloc.dart';
import 'package:practice_hub/ui/constants.dart';
import 'package:practice_hub/ui/widgets/chip_menu.dart';
import 'package:practice_hub/ui/widgets/custom_button.dart';
import 'package:practice_hub/ui/widgets/loading.dart';
import 'package:practice_hub/ui/widgets/problem_card.dart';
import 'package:practice_hub/ui/widgets/search_bar.dart';

class ProblemsScreen extends StatelessWidget {
  const ProblemsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final problemBloc = BlocProvider.of<ProblemBloc>(context);
    problemBloc.add(ProblemLoad());
    return SingleChildScrollView(
      child: Column(
        children: [
          CustomSearchBar(
            onChanged: (value) {},
            onSubmitted: (value) {},
          ),
          kVerticalSizeBox,
          // Row(
          //   children: [
          //     CustomButton(
          //         onpressed: () => changeSelectedChip(0), text: "level"),
          //     CustomButton(
          //         onpressed: () => changeSelectedChip(1), text: "subject"),
          //     CustomButton(
          //         onpressed: () => changeSelectedChip(2), text: "topic"),
          //   ],
          // ),
          //   selectedChip == 0
          //         ? ChipMenu(
          //             chips: kLevelTag,
          //             selectedChip: selectedLevel,
          //           )
          //         : selectedChip == 1
          //             ? ChipMenu(
          //                 chips: kSubjectTag,
          //                 selectedChip: selectedSubject,
          //                 onSelectionChanged: changingFunction,
          //               )
          //             : selectedChip == 2
          //                 ? ChipMenu(
          //                     chips: kTopics.toList(),
          //                     selectedChip: selectedTopic,
          //                   )
          //                 : Container(),
          BlocBuilder<ProblemBloc, ProblemState>(
            builder: (context, state) {
              if (state is ProblemLoading) {
                return const LoadingScreen();
              } else if (state is ProblemLoaded) {
                return ListView.builder(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    itemCount: state.problems.length,
                    itemBuilder: (context, index) {
                      print("=================index");
                      return ProblemCard(problem: state.problems[index], index: index,);
                    });
              } else if (state is ProblemError) {
                return Text(state.message);
              }
              return Container();
            },
          ),
        ],
      ),
    );
  }
}
