import 'package:flutter/material.dart';
import 'package:practice_hub/ui/constants.dart';

// class CustomTextField extends StatelessWidget {
//   final String keyBoard;
//   final TextEditingController controller;
//   final String hintText;
//   final int maxLines;
//   final String validation;

//   const CustomTextField({
//     required this.controller,
//     required this.hintText,
//     this.validation = '',
//     this.maxLines = 1,
//     this.keyBoard = "text",
//     Key? key,
//   }) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return TextFormField(
//       keyboardType:
//           keyBoard == "text" ? TextInputType.number : TextInputType.text,
//       controller: controller,
//       maxLines: maxLines,
//       decoration: InputDecoration(
//         labelText: hintText,
//         alignLabelWithHint: maxLines > 1,

//         // hintText: hintText,
//         border: const OutlineInputBorder(
//           // borderRadius: BorderRadius.all(Radius.circular(5)),
//           borderSide: BorderSide(
//             color: Color.fromARGB(255, 143, 143, 143),
//           ),
//         ),
//         enabledBorder: const OutlineInputBorder(
//           // borderRadius: BorderRadius.all(Radius.circular(5)),
//           borderSide: BorderSide(
//             color: Color.fromARGB(255, 143, 143, 143),
//           ),
//         ),
//       ),
//       textAlignVertical: TextAlignVertical.top,
//       validator: (val) {
//         if (val == null || val.isEmpty) {
//           return 'Enter your $hintText';
//         }
//         return null;
//       },
//     );
//   }
// }

class CustomTextField extends StatefulWidget {
  final TextEditingController controller;
  final String hintText;
  const CustomTextField({super.key, required this.controller, required this.hintText});

  @override
  State<CustomTextField> createState() => _CustomeTextfieldState();
}

class _CustomeTextfieldState extends State<CustomTextField> {
  bool _isFocused = false;
  bool _isTouched = false;

  @override
  Widget build(BuildContext context) {
    return Focus(
      onFocusChange: (hasFocus) {
        setState(() {
          _isFocused = hasFocus;
        });
      },
      child: TextFormField(
        autovalidateMode: _isTouched
            ? AutovalidateMode.onUserInteraction
            : AutovalidateMode.disabled,
        validator: (val) {
          if (val == null || val.isEmpty) {
            return 'This Field is required';
          }
          return null;
        },
        controller: widget.controller,
        onChanged: (field) {
          if (widget.controller.text.isNotEmpty) {
            setState(() {
              _isTouched = true;
            });
          } else {
            setState(() {
              _isTouched = false;
            });
          }
        },
        decoration: kTextfieldDecoration(widget.hintText, _isFocused),
      ),
    
    );
  }
}

class UsernameInput extends StatefulWidget {
  final TextEditingController controller;
  const UsernameInput({super.key, required this.controller});

  @override
  State<UsernameInput> createState() => _UsernameInputState();
}

class _UsernameInputState extends State<UsernameInput> {
  bool _isFocused = false;
  bool _isTouched = false;

  @override
  Widget build(BuildContext context) {
    return Focus(
      onFocusChange: (hasFocus) {
        setState(() {
          _isFocused = hasFocus;
        });
      },
      child: TextFormField(
        autovalidateMode: _isTouched
            ? AutovalidateMode.onUserInteraction
            : AutovalidateMode.disabled,
        validator: (val) {
          if (val == null || val.isEmpty) {
            return 'Enter a your email or phone';
          }
          return null;
        },
        controller: widget.controller,
        onChanged: (username) {
          if (widget.controller.text.isNotEmpty) {
            setState(() {
              _isTouched = true;
            });
          } else {
            setState(() {
              _isTouched = false;
            });
          }
        },
        decoration: kTextfieldDecoration("Enter Your Email or Phone", _isFocused)
      ),
    );
  }
}

class PasswordInput extends StatefulWidget {
  final TextEditingController controller;
  const PasswordInput({super.key, required this.controller});

  @override
  State<PasswordInput> createState() => _PasswordInputState();
}

class _PasswordInputState extends State<PasswordInput> {
  bool _obscureText = true;
  bool _isFocused = false;
  bool _isTouched = false;
  @override
  Widget build(BuildContext context) {
    return Focus(
      onFocusChange: (hasFocus) {
        setState(() {
          _isFocused = hasFocus;
        });
      },
      child: TextFormField(
        autovalidateMode: _isTouched
            ? AutovalidateMode.onUserInteraction
            : AutovalidateMode.disabled,
        controller: widget.controller,
        onChanged: (password) {
          if (widget.controller.text.isNotEmpty) {
            setState(() {
              _isTouched = true;
            });
          } else {
            setState(() {
              _isTouched = false;
            });
          }
        },
        validator: (val) {
          if (val == null || val.isEmpty) {
            return 'Enter your password';
          } else if (widget.controller.text.length < 6) {
            return 'Password should be at least 6 characters';
          }
          return null;
        },
        decoration: InputDecoration(
          labelText: 'password',
          border: OutlineInputBorder(
            // borderRadius: BorderRadius.all(Radius.circular(5)),
            borderSide: BorderSide(
              color: _isFocused
                  ? Colors.blue
                  : const Color.fromARGB(255, 143, 143, 143),
            ),
          ),
          enabledBorder: OutlineInputBorder(
            // borderRadius: BorderRadius.all(Radius.circular(5)),
            borderSide: BorderSide(
              color: _isFocused
                  ? Colors.blue
                  : const Color.fromARGB(255, 143, 143, 143),
            ),
          ),
          suffixIcon: GestureDetector(
            onTap: () {
              setState(() {
                _obscureText = !_obscureText;
              });
            },
            child: Icon(
              _obscureText ? Icons.visibility : Icons.visibility_off,
            ),
          ),
        ),
        obscureText: _obscureText,
      ),
    );
  }
}
