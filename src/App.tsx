import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
  Box,
  Hide,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameGenreList from "./components/GameGenreList";
import { useState } from "react";
import { Genres } from "./hooks/GenresList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/Games";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import SideBar from "./components/SideBar";

export interface GameQuery {
  genre: Genres | null;
  platforms: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [sideBarMenu, setSideBarMenu] = useState(false);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <HStack paddingRight={4} justifyContent="space-between">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />

          <Hide above="lg">
            <SideBar
              gameQuery={gameQuery}
              setGameQuery={(e) => setGameQuery(e)}
              setSideBarMenu={(e) => setSideBarMenu(e)}
              sideBarMenu={sideBarMenu}
            />
          </Hide>
        </HStack>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GameGenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            setSideBarMenu={(e) => setSideBarMenu(e)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex gap={5} marginBottom={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platforms}
              onSelectPlatform={(platforms) =>
                setGameQuery({ ...gameQuery, platforms })
              }
            ></PlatformSelector>
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSort={gameQuery.sortOrder}
            ></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
