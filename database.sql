CREATE TABLE Students (
  Id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL primary key,
  CreatedAt timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  UserName varchar UNIQUE NOT NULL,
  FullName varchar,
  City varchar,
  School varchar,
  Grade int
);

CREATE TABLE Payments (
  Id uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
  StudentId uuid REFERENCES Students(Id) ON DELETE CASCADE NOT NULL,
  CreatedAt timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  Amount float NOT NULL
);

CREATE TABLE Tags (
    Tag varchar PRIMARY KEY NOT NULL,
    ProblemCount int DEFAULT 0
);

CREATE TABLE Hashtags (
    Hashtag varchar PRIMARY KEY NOT NULL,
    DiscussionCount int DEFAULT 0
);

CREATE TABLE Problems (
  Id uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  CreatedAt timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  Title varchar NOT NULL,
  Tags varchar[] NOT NULL,
  Difficulty varchar NOT NULL, -- Assuming difficulty is a string
  Question jsonb NOT NULL,
  Solution jsonb,
  Choices varchar[] NOT NULL,
  Answers varchar[] NOT NULL
);

CREATE TABLE ProblemTags (
  ProblemId uuid REFERENCES Problems(Id) ON DELETE CASCADE NOT NULL,
  Tag varchar REFERENCES Tags(Tag) ON DELETE CASCADE NOT NULL,
  PRIMARY KEY (ProblemId, Tag)
);

CREATE TABLE ProblemHashtags (
  ProblemId uuid REFERENCES Problems(Id) ON DELETE CASCADE NOT NULL,
  Hashtag varchar REFERENCES Hashtags(Hashtag) ON DELETE CASCADE NOT NULL,
  Count int DEFAULT 0,
  PRIMARY KEY (ProblemId, Hashtag)
);

CREATE TABLE ProblemStats (
  Id uuid REFERENCES Problems(Id) ON DELETE CASCADE NOT NULL PRIMARY KEY,
  SolvedCount int DEFAULT 0,
  FavouriteCount int DEFAULT 0,
  LikedCount int DEFAULT 0,
  DislikedCount int DEFAULT 0,
  SolutionCount int DEFAULT 0
);

CREATE TABLE StudentProblems (
  ProblemId uuid REFERENCES Problems(Id) ON DELETE CASCADE NOT NULL,
  StudentId uuid REFERENCES Students(Id) ON DELETE CASCADE NOT NULL,
  Liked like DEFAULT 'null',
  Favourite boolean DEFAULT false,
  Solved boolean DEFAULT false,
  SolvedDate timestamp with time zone,
  PRIMARY KEY (ProblemId, StudentId)
);

CREATE TABLE Solutions (
    Id uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
    ProblemId uuid REFERENCES Problems(Id) ON DELETE CASCADE NOT NULL,
    StudentId uuid REFERENCES Students(Id) ON DELETE CASCADE NOT NULL,
    Hashtags varchar[], 
    Title varchar NOT NULL,
    Content jsonb NOT NULL,
    CreatedAt timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE SolutionHashtags (
  SolutionId uuid REFERENCES Solutions(Id) ON DELETE CASCADE NOT NULL,
  Hashtag varchar REFERENCES Hashtags(Hashtag) ON DELETE CASCADE NOT NULL,
  PRIMARY KEY (SolutionId, Hashtag)
);

CREATE TABLE SolutionStats (
  Id uuid REFERENCES Solutions(Id) ON DELETE CASCADE NOT NULL PRIMARY KEY,
  ViewCount int DEFAULT 0,
  LikedCount int DEFAULT 0,
  DislikedCount int DEFAULT 0,
  CommentCount int DEFAULT 0
);

CREATE TABLE StudentSolutions (
  SolutionId uuid REFERENCES Solutions(Id) ON DELETE CASCADE NOT NULL,
  StudentId uuid REFERENCES Students(Id) ON DELETE CASCADE NOT NULL,
  Liked like DEFAULT 'null',
  Saved boolean DEFAULT false,
  View boolean DEFAULT false,
  PRIMARY KEY (SolutionId, StudentId)
);

CREATE TABLE Discussion (
    Id uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
    StudentId uuid REFERENCES Students(Id) ON DELETE CASCADE NOT NULL,
    Title varchar NOT NULL,
    Content jsonb NOT NULL,
    Hashtags varchar[] DEFAULT ARRAY[]::varchar[], 
    CreatedAt timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE DiscussionHashtags (
  DiscussionId uuid REFERENCES Discussion(Id) ON DELETE CASCADE NOT NULL,
  Hashtag varchar REFERENCES Hashtags(Hashtag) ON DELETE CASCADE NOT NULL,
  PRIMARY KEY (DiscussionId, Hashtag)
);

CREATE TABLE DiscussionStats (
  Id uuid REFERENCES Discussion(Id) ON DELETE CASCADE NOT NULL PRIMARY KEY,
  ViewCount int DEFAULT 0,
  LikedCount int DEFAULT 0,
  DislikedCount int DEFAULT 0,
  CommentCount int DEFAULT 0
);

CREATE TABLE DiscussionComments (
  Id uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  DiscussionId uuid REFERENCES Discussion(Id) ON DELETE CASCADE NOT NULL,
  StudentId uuid REFERENCES Students(Id) ON DELETE CASCADE NOT NULL,
  Content varchar NOT NULL,
  CreatedAt timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE StudentDiscussions (
  DiscussionId uuid REFERENCES Discussion(Id) ON DELETE CASCADE NOT NULL,
  StudentId uuid REFERENCES Students(Id) ON DELETE CASCADE NOT NULL,
  Liked like DEFAULT 'null',
  Saved boolean DEFAULT false,
  View boolean DEFAULT false,
  PRIMARY KEY (DiscussionId, StudentId)
);


CREATE TABLE StudentStats (
  Id uuid PRIMARY KEY REFERENCES Students(Id) ON DELETE CASCADE NOT NULL,
  SolvedCount int DEFAULT 0,
  FavouriteCount int DEFAULT 0,
  LikedCount int DEFAULT 0,
  DislikedCount int DEFAULT 0,
  SolutionCount int DEFAULT 0,
  LikedSolutionCount int DEFAULT 0,
  DislikedSolutionCount int DEFAULT 0,
  SavedSolutionCount int DEFAULT 0,
  DiscussionCount int DEFAULT 0,
  LikedDiscussionCount int DEFAULT 0,
  DislikedDiscussionCount int DEFAULT 0,
  SavedDiscussionCount int DEFAULT 0
);

CREATE TABLE StudentPopularity (
  Id uuid PRIMARY KEY REFERENCES Students(Id) ON DELETE CASCADE NOT NULL,
  LikedSolutionCount int DEFAULT 0,
  DislikedSolutionCount int DEFAULT 0,
  CommentSolutionCount int DEFAULT 0,
  SavedSolutionCount int DEFAULT 0,
  ViewSolutionCount int DEFAULT 0,
  LikedDiscussionCount int DEFAULT 0,
  DislikedDiscussionCount int DEFAULT 0,
  CommentDiscussionCount int DEFAULT 0,
  SavedDiscussionCount int DEFAULT 0,
  ViewDiscussionCount int DEFAULT 0
);
