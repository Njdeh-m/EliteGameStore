import { HStack, Icon, Text, Badge } from "@chakra-ui/react";
import { Game, Platform } from "../hooks/Games";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
  game: Game;
}

const PlatformiconList = ({ platforms, game }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  let color =
    game.metacritic > 85 ? "green" : game.metacritic > 80 ? "yellow" : "red";

  return (
    <HStack justifyContent={"space-between"} marginY={2}>
      <HStack>
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={IconMap[platform.slug]}
            color={"gray.500"}
          />
        ))}
      </HStack>
      <Badge
        colorScheme={color}
        fontSize={"14px"}
        paddingX={2}
        borderRadius={"4px"}
      >
        {game.metacritic}
      </Badge>
    </HStack>
  );
};

export default PlatformiconList;
