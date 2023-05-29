import React, { FC, useState } from "react";
import { Box, GridItem, Select, Text } from "@chakra-ui/react";
import { BingoContent } from "~/constants/bingo";
import { match } from "ts-pattern";
import { GroupId, groups } from "~/constants/group";

const Bingo_Block: FC<{
  content: BingoContent;
}> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentGroup, setCurrentGroup] = useState<GroupId | undefined>();

  const backgrounColor = match(currentGroup)
    .with(undefined, () => "white")
    .otherwise((groupId) => groups.find(({ id }) => id == groupId)?.color);

  const hoverEffect = {
    cursor: "pointer",
    _hover: {
      transform: "scale(1.05)",
      color: "pink.400",
      bgColor: "pink.100",
    },
  };

  return (
    <GridItem>
      <Box
        aspectRatio={"1 / 1"}
        bgColor={backgrounColor}
        borderRadius={"xl"}
        boxShadow={"md"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"relative"}
        transition={"all .2s linear"}
        {...(!isOpen && hoverEffect)}
        onClick={() => setIsOpen(true)}
      >
        {match(isOpen)
          .with(false, () => (
            <Box display={"flex"} alignItems={"flex-end"} gap={1}>
              <Text as={"strong"} fontSize={"24px"}>
                {content.id}
              </Text>
              번
            </Box>
          ))
          .with(true, () => (
            <Box fontSize={"18px"}>
              <Select position={"absolute"} top={"5px"} right={"5px"} w={"50%"} onChange={(e) => setCurrentGroup(Number(e.target.value) as GroupId)} value={currentGroup}>
                <option disabled selected value={undefined}>
                  --
                </option>
                {groups.map((group) => (
                  <option value={group.id}>{group.id}조</option>
                ))}
              </Select>
              <Text>{content.title}</Text>
            </Box>
          ))
          .exhaustive()}
      </Box>
    </GridItem>
  );
};

export default Bingo_Block;
