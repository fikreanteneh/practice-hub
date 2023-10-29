import { useState, useReducer, Dispatch } from "react";
import * as S from '../styles';



const kGradeTag: string[] = ["grade 9", "grade 10", "grade 11", "grade 12", "EUEE"];
const kSubjectTag: string[] = [
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

type StringArrayMap = {
    [key: string]: string[];
};
const kTopicTag: StringArrayMap = {
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


type intialTagProp = {
    topic: string[],
    subject: string[],
    grade: string[],
    selectedTopic: string[],
    selectedSubject: string[],
    selectedGrade: string[],
}

type actionType = {
    type: "grade" | "subject" | "topic",
    payload: string
    parentChangeSelected: (type: string, tags: string[]) => void
}

const initialTag: intialTagProp = {
    topic: [],
    subject: kSubjectTag,
    grade: kGradeTag,
    selectedTopic: [],
    selectedSubject: [],
    selectedGrade: [],
};

const reducer = (state: intialTagProp, action: actionType) => {
    switch (action.type) {
        case 'grade': {
            const newState = state.selectedGrade.includes(action.payload)
                ? { ...state, selectedGrade: state.selectedGrade.filter((g: string) => g !== action.payload) }
                : { ...state, selectedGrade: [...state.selectedGrade, action.payload] };
            action.parentChangeSelected('grade', newState.selectedGrade);
            return newState;
        }
        case 'subject': {
            const newState = state.selectedSubject.includes(action.payload)
                ? {
                    ...state,
                    topic: state.topic.filter((t: string) => kTopicTag[action.payload].includes(t)),
                    selectedSubject: state.selectedSubject.filter((s: string) => s !== action.payload),
                    selectedTopic: state.selectedTopic.filter((t: string) => kTopicTag[action.payload].includes(t)),
                }
                : {
                    ...state,
                    topic: [...state.topic, ...kTopicTag[action.payload]],
                    selectedSubject: [...state.selectedSubject, action.payload],
                };
            action.parentChangeSelected('subject', newState.selectedSubject);
            return newState;
        }
        case 'topic': {
            const newState = state.selectedTopic.includes(action.payload)
                ? { ...state, selectedTopic: state.selectedTopic.filter((t: string) => t !== action.payload) }
                : { ...state, selectedTopic: [...state.selectedTopic, action.payload] };
            action.parentChangeSelected('topic', newState.selectedTopic);
            return newState;
        }
        default:
            return state;
    }
};



type TagSelectorProp = {
    tagChanger: (type: string, tags: string[]) => void
}

const TagSelector = (props: TagSelectorProp) => {
    const { tagChanger } = props;
    const [choice, setChoice] = useState<"grade" | "subject" | "topic" | "">("");
    const [tagState, dispatch] = useReducer(reducer, initialTag);

    const handleSelect = (newChoice: "grade" | "subject" | "topic") => choice == newChoice ? setChoice("") : setChoice(newChoice);

    return (
        <>
            <S.ChipContainer>
                <S.Chip selected={choice == "grade"} onClick={() => handleSelect("grade")}>grade</S.Chip>
                <S.Chip selected={choice == "subject"} onClick={() => handleSelect("subject")}>subject</S.Chip>
                <S.Chip selected={choice == "topic"} onClick={() => handleSelect("topic")}>topic</S.Chip>
            </S.ChipContainer>

            <S.ChipContainer>
                {choice == "grade" &&
                    <MultiChoiceChips
                        type="grade"
                        parentChangeSelected={tagChanger}
                        tags={tagState.grade}
                        selectedTags={tagState.selectedGrade}
                        changeSelected={dispatch} />}
                {choice == "subject" &&
                    <MultiChoiceChips
                        type="subject"
                        parentChangeSelected={tagChanger}
                        tags={tagState.subject}
                        selectedTags={tagState.selectedSubject}
                        changeSelected={dispatch} />}
                {choice == "topic" &&
                    <MultiChoiceChips
                        type="topic"
                        parentChangeSelected={tagChanger}
                        tags={tagState.topic}
                        selectedTags={tagState.selectedTopic}
                        changeSelected={dispatch} />}
            </S.ChipContainer>

        </>
    )
}



type MultiChoiceSelectorProps = {
    tags: string[],
    selectedTags: string[],
    changeSelected: Dispatch<actionType>,
    parentChangeSelected: (type: string, tags: string[]) => void,
    type: "grade" | "subject" | "topic"
}
const MultiChoiceChips = (props: MultiChoiceSelectorProps) => {
    const { tags, changeSelected, type, selectedTags, parentChangeSelected } = props;
    return (
        <>
            {tags.map((tag: string) => {
                return <S.Chip
                    selected={selectedTags.includes(tag)}
                    onClick={() => changeSelected({ type: type, payload: tag, parentChangeSelected: parentChangeSelected })}>{tag}
                </S.Chip>
            })}
        </>
    )
}
export default TagSelector