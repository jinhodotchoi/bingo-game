import React, { ChangeEventHandler, FC } from "react";
import { Box, GridItem, Select, Text } from "@chakra-ui/react";
import { BingoContent } from "~/constants/bingo";
import { match } from "ts-pattern";
import { GroupId } from "~/constants/group";
import { groupsAtom } from "~/atoms/groupAtom";
import { useAtom } from "jotai";
import { useStateWithStorage } from "~/hooks";

const Bingo_Block: FC<{
  content: BingoContent;
}> = ({ content }) => {
  const [isOpen, setIsOpen] = useStateWithStorage(`__open-${content.id}`, false);
  const [currentGroup, setCurrentGroup] = useStateWithStorage<GroupId | undefined>(`__currentGroup-${content.id}`, undefined);
  const [isSelectChanged, setIsSelectChanged] = useStateWithStorage(`__isSelectedChange-${content.id}`, false);

  const [groups] = useAtom(groupsAtom);

  const backgroundColor = match(currentGroup)
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

  const onGroupSelectChanged: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCurrentGroup(Number(e.target.value) as GroupId);
    if (!isSelectChanged) {
      setIsSelectChanged(true);
    }
  };

  return (
    <GridItem>
      <Box
        aspectRatio={"1 / 1"}
        bgColor={backgroundColor}
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
              <Select position={"absolute"} top={"5px"} right={"5px"} w={"50%"} onChange={onGroupSelectChanged} value={currentGroup}>
                <option value={undefined} disabled={isSelectChanged}>
                  --
                </option>
                {groups.map((group) => (
                  <option value={group.id} key={group.id}>
                    {group.id}조
                  </option>
                ))}
              </Select>
              <Text whiteSpace={"pre-line"} textAlign={"center"}>
                {content.title}
              </Text>
            </Box>
          ))
          .exhaustive()}
      </Box>
    </GridItem>
  );
};

export default Bingo_Block;
