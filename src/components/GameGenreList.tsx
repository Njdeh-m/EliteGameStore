import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  SimpleGrid,
  Spinner,
  Button,
  Link,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/GenresList";
import getCroopedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
  setSideBarMenu: (okay: boolean) => void;
}

const GameGenreList = ({
  selectedGenre,
  onSelectedGenre,
  setSideBarMenu,
}: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading && <Spinner></Spinner>}
        {data.map((e) => (
          <ListItem key={e.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroopedImageUrl(e.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={e.id == selectedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectedGenre(e);
                  setSideBarMenu(false);
                }}
                variant="link"
                fontSize="large"
              >
                {e.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameGenreList;
