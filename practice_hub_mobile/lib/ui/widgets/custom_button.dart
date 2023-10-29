import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  final VoidCallback onpressed;
  final String text;

  const CustomButton({
    super.key,
    required this.onpressed,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    // final size = MediaQuery.of(context).size.width;
    return ElevatedButton(
      onPressed: onpressed,
      child: Text(
        text,
      ),
    );
  }
}
