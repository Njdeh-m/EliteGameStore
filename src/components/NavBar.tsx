import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorTheme from "./ColorTheme";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={Logo} boxSize={50} />
      <SearchInput onSearch={onSearch} />
      <ColorTheme />
    </HStack>
  );
};

export default NavBar;
