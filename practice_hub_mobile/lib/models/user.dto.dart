class UserDto {
  final uid;
  final username;
  final fullName;
  final profilePicture;
  // Timestamp createdAt = Timestamp.now();

  UserDto(
      {required this.uid,
      required this.username,
      required this.profilePicture,
      required this.fullName});

  factory UserDto.fromDocument(doc) {
    return UserDto(
      uid: doc['uid'],
      username: doc['username'],
      profilePicture: doc['profilePicture'] ?? "",
      fullName: doc['fullName'] ?? "",
    );
  }

  @override
  String toString() {
    return "User: $uid, $fullName";
  }
}
