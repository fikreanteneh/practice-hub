import { ChangeEvent, useRef, useState } from 'react';
import QuillWriter from '../components/QuillWriter'
import TagSelector from '../components/TagSelector'
import ReactQuill from 'react-quill';
import * as S from '../styles/forms'
import AnswerCheckbox from '../components/AnswerCheckbox';

const AddProblem = () => {

    const questionRef = useRef<ReactQuill>(null);
    const solutionRef = useRef<ReactQuill>(null);
    const allTag = useRef({ topic: [], grade: [], subject: [] });
    const tagChanger = (type: string, tags: string[]) => {
        if (type === 'topic') allTag.topic = tags
        else if (type === 'subject') allTag.subject = tags
        else allTag.grade = tags
    };
    const [formData, setFormData] = useState({
        title: '',
        difficulty: '',
    });

    const [togle, setTogle] = useState(false);
    const [answer, setAnswer] = useState<string[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData((oldData) => ({ ...oldData, [id]: value }))
    }

    const handleAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        const { id } = e.target
        answer.includes(id) ? setAnswer(answer.filter((item) => item !== id)) : setAnswer([...answer, id])
    }

    return (
        <>
            <QuillWriter quillRef={questionRef} />
            <TagSelector tagChanger={tagChanger} />
            <S.InputField
                type='title'
                placeholder='Title'
                id='title'
                value={formData.title}
                onChange={handleChange}>
            </S.InputField>

            <select id="difficulty" value={formData.difficulty} onChange={handleChange}>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>
            {/* <S.PButton level={1} onClick={() => { setTogle(!togle) }}> Answers </S.PButton> */}
            {
                true &&
                <AnswerCheckbox answer={answer} setAnswer={ handleAnswer } />
            }

            <QuillWriter quillRef={solutionRef} />


            <button onClick={() => {
                const quillContents = quillRef?.current?.getEditor().getContents();
                const jsonContent = JSON.stringify(quillContents);
                console.log(jsonContent);
                console.log(quillRef)
            }}>Yess</button>

        </>
    )
}

export default AddProblem