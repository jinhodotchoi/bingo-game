import React from "react";
import { Box, BoxProps, GridItem, Text } from "@chakra-ui/react";
import { GroupId } from "~/constants/group";
import { groupsAtom } from "~/atoms/groupAtom";
import { useAtom, useAtomValue } from "jotai";
import { cellAtomFamily, NO_WINNING_GROUP } from "~/atoms/bingoAtom";
import { value } from "~/utils/value";

type BingoCellProps = {
  content: {
    id: number;
    title: string;
  };
};

export function BingoCell({ content }: BingoCellProps) {
  const [cell, setCell] = useAtom(cellAtomFamily(content.id));

  const groups = useAtomValue(groupsAtom);

  const backgroundColor = cell.winningGroup === NO_WINNING_GROUP ? "white" : groups.find(({ id }) => id == cell.winningGroup)?.color;

  const hoverEffect: BoxProps = {
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
        bgColor={backgroundColor}
        borderRadius={"xl"}
        boxShadow={"md"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"all .2s linear"}
        cursor={"pointer"}
        {...(!cell.isOpen && hoverEffect)}
        onClick={() => {
          if (!cell.isOpen) {
            setCell({ isOpen: true });
            return;
          }

          const prompt = window.prompt("맞춘 팀을 입력하세요");

          const teamId = Number(prompt) as GroupId;

          setCell({
            winningGroup: teamId,
          });
        }}
      >
        {value(() => {
          if (!cell.isOpen) {
            return (
              <Box display={"flex"} alignItems={"flex-end"} gap={1}>
                <Text as={"strong"} fontSize={"20px"}>
                  {content.id}
                </Text>
                번
              </Box>
            );
          }

          return (
            <Box fontSize={"16px"}>
              <Text wordBreak={"keep-all"} textAlign={"center"}>
                {content.title}
              </Text>
            </Box>
          );
        })}
      </Box>
    </GridItem>
  );
}
