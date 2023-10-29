import React, { ChangeEvent } from 'react'
import * as S from '../styles/forms'
import



type Props = {
    answer: string[],
    setAnswer: ChangeEvent<HTMLInputElement>,
}
const AnswerCheckbox = (props: Props) => {
    const { answer, setAnswer } = props
    return (
        <div>
            <Checkbox 
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}/>

            <S.InputField type="checkbox" id="A" checked={answer.includes('A')} placeholder='A' />
            <S.InputField type="checkbox" id="B" checked={answer.includes('B')} placeholder='A' />
            <S.InputField type="checkbox" id="C" checked={answer.includes('C')} placeholder='A' />
            <S.InputField type="checkbox" id="D" checked={answer.includes('D')} placeholder='A' />
            <S.InputField type="checkbox" id="E" checked={answer.includes('E')} placeholder='A' />
            <S.InputField type="checkbox" id="F" checked={answer.includes('F')} placeholder='A' />
        </div>
    )
}

export default AnswerCheckbox