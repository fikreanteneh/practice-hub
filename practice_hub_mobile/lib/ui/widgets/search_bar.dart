import 'package:flutter/material.dart';

class CustomSearchBar extends StatelessWidget {
  Function? onChanged;
  Function? onSubmitted;
  CustomSearchBar({this.onChanged, this.onSubmitted});

  @override
  Widget build(BuildContext context) {
    return SearchBar();
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 5),
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          boxShadow: const [
            BoxShadow(
              color: Colors.black12,
              offset: Offset(0, 5),
              blurRadius: 10,
            )
          ]),
      child: TextField(
        onChanged: onChanged as void Function(String)?,
        onSubmitted: onSubmitted as void Function(String)?,
        decoration: const InputDecoration(
          hintText: "Search",
          border: InputBorder.none,
          icon: Icon(Icons.search),
        ),
      ),
    );
  }
}
