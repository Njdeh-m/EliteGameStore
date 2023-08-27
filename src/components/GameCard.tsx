import React from "react";
import { Heading, Image, CardBody, Card, Text } from "@chakra-ui/react";
import { Game } from "../hooks/Games";
import PlatformiconList from "./PlatformiconList";
import getCroopedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card size={"md"}>
      <Image src={getCroopedImageUrl(game.background_image)}></Image>
      <CardBody>
        <PlatformiconList
          game={game}
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <Heading fontSize={"2xl"} height="45px">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
