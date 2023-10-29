import styled from "@emotion/styled";
import tw from "twin.macro";
import { ThemeProp } from "./types";

export const Big = styled.div<ThemeProp>`
  ${tw`text-5xl`}
`;

export const Body = styled.div<ThemeProp>`
  ${tw`min-h-screen w-screen`}
  ${(props) => (props.theme.type === "dark" ? tw`` : tw`bg-gray-900`)} 
    background-color: ${(props) =>
    props.theme.type === "dark" ? "rgb(18,20,20)" : "white"};
  color: ${(props) => (props.theme.type === "dark" ? "white" : "black")};
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavBarDiv = styled.header<ThemeProp>`
  ${tw`shadow-lg sticky z-10 flex justify-between items-center px-5 py-1 mx-auto h-[2.8rem]`}
  background-color: ${(props) =>
    props.theme.type === "dark" ? "rgb(30,33,34)" : ""}
`;

export const NavItem = styled.nav`
  ${tw`flex space-x-6`}
`;

export const HalfImageContainer = styled.div`
  ${tw`md:w-[67%] lg:w-[50%]`}
`;

export const ImageContainer = styled.div`
  ${tw`w-full h-full`}
`;
export const CenterFlex = styled.div`
  ${tw`p-3 flex justify-center flex-wrap items-center max-w-6xl mx-auto`}
`;

export const BetweenFlex = styled.div`
  ${tw`flex justify-between items-center my-auto`}
`;

type ChipProps = {
  selected: boolean;
};
export const Chip = styled.div<ThemeProp & ChipProps>`
  ${tw`px-4 py-1 rounded-[25%] text-lg font-semibold cursor-pointer border-2 border-solid border-orange-500 border-s-8`}
  width: fit-content;
  color: orange;
  background-color: ${(props) => {
    console.log(props.selected);
    if (props.selected) {
      return props.theme.type === "dark" ? "white" : "rgb(18,20,20)";
    } else {
      return props.theme.type === "dark" ? "rgb(30,33,34)" : "white";
    }
  }};
`;

export const ChipContainer = styled.div`
  ${tw`flex space-x-2 justify-center items-center my-3`}
`;




export const DoneContainer = styled.div`
  ${tw`w-[15px]`}
`;

export const TitleContainer = styled.div`
  ${tw`w-[60px] overflow-hidden`}
`;

export const CompletedContainer = styled.div`
  ${tw`w-[25px] flex justify-center items-center`}
`;

export const CounterContainer = styled.div`
  ${tw`w-[25px] flex justify-center items-center`}
`;
