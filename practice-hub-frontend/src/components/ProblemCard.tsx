import styled from '@emotion/styled/macro'
import * as S from '../styles'
import tw from 'twin.macro'
import { FiCheck } from 'react-icons/fi'
import { AiFillLike } from 'react-icons/ai'
import { GoDiscussionClosed } from 'react-icons/go'



type orderProp = {
  order: number
}

const ProblemCardStyle = styled.div<S.ThemeProp & orderProp>`
${tw`flex justify-between items-center my-auto w-full`}
${(props) => props.order === 0 ?
  props.theme.type === 'dark' ?
    tw`bg-gray-900` :
    tw`bg-gray-100` :
  tw``}
`




const ProblemCard = () => {

  const dummy = [
    {
      id: 1,
      title: "integration with other apps",
      completed: true,
      dificulty: "medium",
      likeCount: 10,
      disccusionCount: 6,
      tags: ["react", "redux", "typescript"]
    },
    {
      id: 1,
      title: "integration with other apps",
      completed: false,
      dificulty: "easy",
      likeCount: 10,
      disccusionCount: 6,
      tags: ["react", "redux", "typescript"]
    },
    {
      id: 1,
      title: "integration with other apps",
      completed: false,
      dificulty: "easy",
      likeCount: 10,
      disccusionCount: 6,
      tags: ["react", "redux", "typescript"]
    }
  ]



  return (
    <>
      {
        dummy.map((item, index) => (

          <ProblemCardStyle order={index % 2} >
            <S.DoneContainer>
              {item.completed && <FiCheck />}
            </S.DoneContainer>
            <S.TitleContainer>
              {item.title}
            </S.TitleContainer>
            <p className='flex-item ratio-4'>
              {item.dificulty}
            </p>
            <S.CounterContainer>
              <AiFillLike />
              <span>{item.likeCount}</span>
            </S.CounterContainer>
            <S.CounterContainer>
              <GoDiscussionClosed />
              <span>{item.disccusionCount}</span>
            </S.CounterContainer>
          </ProblemCardStyle>
        ))
      }

    </>
  )
}

export default ProblemCard