import 'package:flutter/material.dart';

class ChipMenu extends StatefulWidget {
  List<String> chips;
  Set<String> selectedChip;
  Function? onSelectionChanged;
  ChipMenu(
      {Key? key,
      this.onSelectionChanged,
      this.selectedChip = const {},
      this.chips = const []})
      : super(key: key);

  @override
  _ChipMenuState createState() => _ChipMenuState();
}

class _ChipMenuState extends State<ChipMenu> {
  @override
  Widget build(BuildContext context) {
    return Wrap(
      children: List<Widget>.generate(
        widget.chips.length,
        (int index) {
          return ChoiceChip(
            label: Text(widget.chips[index]),
            selected: widget.selectedChip.contains(widget.chips[index]),
            onSelected: (bool selected) {
              setState(() {
                selected
                    ? widget.selectedChip.add(widget.chips[index])
                    : widget.selectedChip.remove(widget.chips[index]);
                if (widget.onSelectionChanged != null) {
                  widget.onSelectionChanged!(
                    index,
                    widget.selectedChip.contains(widget.chips[index]),
                  );
                }
              });
            },
          );
        },
      ).toList(),
    );
  }
}
