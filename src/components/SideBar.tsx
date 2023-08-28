import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import GameGenreList from "./GameGenreList";
import { Box } from "@chakra-ui/react";
import "../App.css";
interface Props {
  gameQuery: any;
  setGameQuery: (e: any) => void;
  sideBarMenu: boolean;
  setSideBarMenu: (okay: boolean) => void;
}

export default function SideBar({
  gameQuery,
  setGameQuery,
  sideBarMenu,
  setSideBarMenu,
}: Props) {
  return (
    <>
      {sideBarMenu === false ? (
        <HamburgerIcon boxSize={6} onClick={() => setSideBarMenu(true)} />
      ) : (
        <Box padding={5} className="sidebar">
          <HamburgerIcon
            boxSize={6}
            marginBottom={5}
            onClick={() => setSideBarMenu(false)}
          />
          <GameGenreList
            selectedGenre={gameQuery.genre}
            setSideBarMenu={setSideBarMenu}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </Box>
      )}
    </>
  );
}
