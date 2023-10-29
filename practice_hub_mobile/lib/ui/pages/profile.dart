import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_quill/flutter_quill.dart' as quill;
import 'package:practice_hub/bloc/auth/auth_bloc.dart';
import 'package:practice_hub/bloc/problem/problem_bloc.dart';
import 'package:practice_hub/models/problem.dto.dart';
import 'package:practice_hub/ui/constants.dart';
import 'package:practice_hub/ui/widgets/chip_menu.dart';
import 'package:practice_hub/ui/widgets/custom_button.dart';
import 'package:practice_hub/ui/widgets/custom_textfield.dart';

class ProfileScreen extends StatefulWidget {
  ProfileScreen({Key? key}) : super(key: key);

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  final quill.QuillController _questionController =
      quill.QuillController.basic();
  final quill.QuillController _descriptionController =
      quill.QuillController.basic();
  final TextEditingController _choiceController = TextEditingController();
  final TextEditingController _answerController = TextEditingController();
  final TextEditingController _titleController = TextEditingController();
  int selectedChip = -1;

  Set<String> selectedLevel = {};
  Set<String> selectedSubject = {};
  Set<String> selectedTopic = {};

  Set<String> kTopics = {};

  void changeSelectedChip(int index) {
    setState(() {
      selectedChip = selectedChip != index ? index : -1;
    });
  }

  void changingFunction(index, status) {
    // setState(() {
    if (status) {
      kTopics.addAll(kTopicTag[kSubjectTag[index]]);
    } else {
      kTopics.removeAll(kTopicTag[kSubjectTag[index]]);
      selectedTopic.removeAll(kTopicTag[kSubjectTag[index]]);
    }
    // });
  }

  @override
  Widget build(BuildContext context) {
    final authBloc = BlocProvider.of<AuthBloc>(context);
    return BlocBuilder<AuthBloc, AuthState>(builder: (context, state) {
      if (state is AuthLoggedin) {
        final user = state.userDto;
        print("===== ==    $user");
        return SingleChildScrollView(
          child: Column(
            children: [
              quill.QuillToolbar.basic(controller: _questionController),
              quill.QuillEditor.basic(
                controller: _questionController,
                readOnly: false,
              ),
              quill.QuillToolbar.basic(controller: _descriptionController),
              quill.QuillEditor.basic(
                controller: _descriptionController,
                readOnly: false,
              ),
              CustomTextField(
                  controller: _choiceController,
                  hintText: "Enter The Number of choices"),
              CustomTextField(
                  controller: _answerController,
                  hintText: "Enter The Answer separated by space"),
              CustomTextField(
                  controller: _titleController, hintText: "Enter The Title"),
              Row(
                children: [
                  CustomButton(
                      onpressed: () => changeSelectedChip(0), text: "level"),
                  CustomButton(
                      onpressed: () => changeSelectedChip(1), text: "subject"),
                  CustomButton(
                      onpressed: () => changeSelectedChip(2), text: "topic"),
                ],
              ),
              selectedChip == 0
                  ? ChipMenu(
                      chips: kLevelTag,
                      selectedChip: selectedLevel,
                    )
                  : selectedChip == 1
                      ? ChipMenu(
                          chips: kSubjectTag,
                          selectedChip: selectedSubject,
                          onSelectionChanged: changingFunction,
                        )
                      : selectedChip == 2
                          ? ChipMenu(
                              chips: kTopics.toList(),
                              selectedChip: selectedTopic,
                            )
                          : Container(),
              BlocBuilder<ProblemBloc, ProblemState>(
                builder: (context, state) {
                  if (state is! ProblemSubmitting) {
                    return CustomButton(
                      text: "Add Question",
                      onpressed: () {
                        Problem problem = Problem(
                          author: user.uid,
                          title: _titleController.text,
                          question:
                              _questionController.document.toDelta().toJson(),
                          description: _descriptionController.document
                              .toDelta()
                              .toJson(),
                          choices: int.parse(_choiceController.text),
                          solutions: _answerController.text.split(" "),
                          tags: selectedLevel.toList() +
                              selectedSubject.toList() +
                              selectedTopic.toList(),
                        );
                        BlocProvider.of<ProblemBloc>(context)
                            .add(ProblemAdd(problem: problem));
                      },
                    );
                  }
                  return const CircularProgressIndicator();
                },
              ),
              CustomButton(
                  onpressed: () {
                    authBloc.add(Signout());
                  },
                  text: "Sign Out"),
            ],
          ),
        );
      }
      return Container();
    });
  }
}


// coopilot build me a quill editor page wher user can interact like google docs insert image at different positions and i want to store the text and images in firebase and retrive it show it users
// import 'dart:convert';

// import 'dart:io';
// import 'dart:math';
// import 'package:flutter/material.dart';
// import 'package:flutter_quill/flutter_quill.dart' as quill;
// import 'package:flutter_quill_extensions/flutter_quill_extensions.dart'
//     as quillExt;
// import 'package:image_picker/image_picker.dart';

// class QuillEditorPage extends StatefulWidget {
//   @override
//   _QuillEditorPageState createState() => _QuillEditorPageState();
// }

// class _QuillEditorPageState extends State<QuillEditorPage> {
//   final quill.QuillController _questionController = quill.QuillController.basic();

//   Future<void> _pickImage() async {
//     final pickedFile =
//         await ImagePicker().pickImage(source: ImageSource.gallery);
//     if (pickedFile != null) {
//       final file = File(pickedFile.path);
//       print("=================${file}");
//       quillExt.QuillFile(
//           name: "zzzzzzz",
//           path: pickedFile.path,
//           bytes: file.readAsBytesSync());
//       // _questionController.copiedImageUrl = pickedFile.path as quill.ImageUrl?;
//       // final imageUrl = await _uploadImage(file);
//       // _questionController.insertEmbed(QuillEmbed.image(file),);
//     }
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('Quill Editor'),
//       ),
//       body: Column(
//         children: [
//           ElevatedButton(
//               onPressed: () {
//                 print("=======${_questionController.document.toDelta().toJson()}");
//               },
//               child: Text("Print Out")),
//           quill.QuillToolbar.basic(
//             controller: _questionController,
//             onImagePickCallback: _pickImage,
            
//             // embedButtons: quillExt.FlutterQuillEmbeds.buttons(),
//             // customButtons: [
//               // quill.QuillCustomButton(icon: Icons.ac_unit, onTap: _pickImage)
//             // ],
//           ),
//           quill.QuillEditor.basic(
//             readOnly: false,
//             controller: _questionController,
//             embedBuilders: quillExt.FlutterQuillEmbeds.builders(),
//           ),
//           // Expanded(
//           //   child: quill.QuillEditor(
//           //     padding: EdgeInsets.zero,
//           //     expands: true,
//           //     readOnly: false,
//           //     controller: _questionController,
//           //     scrollController: ScrollController(),
//           //     scrollable: true,
//           //     focusNode: FocusNode(),
//           //     autoFocus: false,
//           //   ),
//           // ),
//           // ElevatedButton(
//           //   onPressed: _pickImage,
//           //   child: Text('Insert Image'),
//           // ),
//         ],
//       ),
//     );
//   }
// }
