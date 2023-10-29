import 'package:flutter/material.dart';

const kVerticalSizeBox = SizedBox(height: 20.0);
const kHorizontalSizeBox = SizedBox(width: 20.0);
const kVerticalSmallSizeBox = SizedBox(height: 10.0);
const kHorizontalSmallSizeBox = SizedBox(width: 10.0);
const kSmallTextSize = TextStyle(fontSize: 12.0);


InputDecoration kTextfieldDecoration(String labelText, bool isFocused) {
  return InputDecoration(
    labelText: labelText,
    prefixStyle: const TextStyle(
      color: Colors.black,
      fontWeight: FontWeight.bold,
    ),
    border: OutlineInputBorder(
      borderSide: BorderSide(
        color:
            isFocused ? Colors.blue : const Color.fromARGB(255, 143, 143, 143),
      ),
    ),
    enabledBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color:
            isFocused ? Colors.blue : const Color.fromARGB(255, 143, 143, 143),
      ),
    ),
  );
}


const kLevelTag = ["grade 9", "grade 10", "grade 11", "grade 12", "EUEE"];
const kSubjectTag = [
  "math",
  "physics",
  "chemistry",
  "biology",
  "english",
  "amharic",
  "civics",
  "history",
  "geography",
  "ICT",
  "economics",
  "business",
  "accounting",
  "other"
];
Map kTopicTag = {
  "math": ["algebra", "trigonometric"],
  "physics": ["mechanics", "electricity"],
  "chemistry": ["organic", "inorganic"],
  "biology": ["human", "animal"],
  "english": ["grammar", "vocabulary"],
  "amharic": ["grammar", "vocabulary"],
  "civics": ["civic", "civic"],
  "history": ["history", "history"],
  "geography": ["geography", "geography"],
  "ICT": ["ICT", "ICT"],
  "economics": ["economics", "economics"],
  "business": ["business", "business"],
  "accounting": ["accounting", "accounting"],
  "other": ["other", "other"]
};
