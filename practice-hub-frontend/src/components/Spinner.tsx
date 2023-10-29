import Loading from "../assets/images/Loading.png";
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.img`
  display: inline-block;
  max-width: 10rem;
  max-height: 10rem;
  margin: auto;
  animation: ${rotate} 1s linear infinite;
`;

const LoadingContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
})

const Spinner = () => {
  return <LoadingContainer> 
          <Rotate src={Loading} />;
         </LoadingContainer>
};

export default Spinner;