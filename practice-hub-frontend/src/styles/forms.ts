import styled from "@emotion/styled";
import tw from "twin.macro";
import { ThemeProp } from ".";

export const InputField = styled.input<ThemeProp>`
  ${tw`w-full px-2 py-2 rounded text-lg my-2`}
  ${(props) =>
    props.theme.type === "dark"
      ? tw`bg-gray-900 text-white`
      : tw`bg-gray-200 text-black`}
`;
