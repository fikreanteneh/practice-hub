

import styled from "@emotion/styled";
import tw from "twin.macro";
import { ThemeProp } from "./types";


type LinkTextProp = {
    active?: boolean,
}
export const LinkText = styled.p<ThemeProp & LinkTextProp>`
  ${tw`py-3`}
  ${(prop) => (prop.active ? tw`border-b-[3px] font-semibold` : tw``)}
        ${(prop: { active?: boolean; theme?: { type?: string } }) => {
    if (prop.active && prop.theme?.type === "dark") {
      return tw`text-white border-red-500`;
    } else if (prop.active && prop.theme?.type === "light") {
      return tw`text-black border-red-500`;
    } else if (!prop.active && prop.theme?.type === "dark") {
      return tw`text-gray-500 hover:text-red-500`;
    } else {
      return tw`text-gray-500 hover:text-red-500`;
    }
  }}
`;

export const H1 = styled.h1`
    ${tw`font-bold text-6xl text-center my-[0.5em]`}
    ${(props: { theme?: { type?: string } }) => props.theme?.type === 'dark' ? tw`text-white` : tw`text-black`}
`

export const H2 = styled.h3`
    ${tw`font-bold text-4xl text-center my-[0.5em]`}
    ${(props: { theme?: { type?: string } }) => props.theme?.type === 'dark' ? tw`text-white` : tw`text-black`}
`

export const H3 = styled.h5`
    ${tw`font-bold text-2xl text-center my-[0.5em]`}
    ${(props: { theme?: { type?: string } }) => props.theme?.type === 'dark' ? tw`text-white` : tw`text-black`}
`