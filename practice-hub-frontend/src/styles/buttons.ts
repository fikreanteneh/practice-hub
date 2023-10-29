import styled from "@emotion/styled";
import tw from "twin.macro";

const buttonColor = {
  1: tw`bg-blue-600 hover:bg-blue-700`,
  2: tw`bg-red-600 hover:bg-red-700`,
};

type PButtonProb = {
  level: 1 | 2;
  disabled?: boolean;
};

export const PButton = styled.button<PButtonProb>`
    ${tw`rounded-[10px] w-full text-white py-3 px-3 my-2 flex justify-center items-center transition duration-300 ease-in-out`}
    ${(prop) =>
      prop.disabled
        ? tw`bg-gray-500 cursor-not-allowed`
        : buttonColor[prop.level]}}
`;
