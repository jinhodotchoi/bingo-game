import { useId } from "react";
import { Box, BoxProps, GridItem, Text } from "@chakra-ui/react";
import { groupsAtom } from "~/atoms/group-atom";
import { useAtom, useAtomValue } from "jotai";
import { cellAtomFamily, NO_CORRECT_GROUP } from "~/atoms/bingo-atom";
import { value } from "~/utils/value";
import { CorrectGroupModal } from "./correct-group-modal";

type BingoCellProps = {
  content: {
    id: number;
    title: string;
  };
};

export function BingoCell({ content }: BingoCellProps) {
  const [cell, setCell] = useAtom(cellAtomFamily(content.id));

  const groups = useAtomValue(groupsAtom);

  const overlayId = useId();

  const backgroundColor = cell.correctGroup === NO_CORRECT_GROUP ? "white" : groups.find(({ id }) => id == cell.correctGroup)?.color;

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
        px={1}
        {...(!cell.isOpen && hoverEffect)}
        onClick={() => {
          if (!cell.isOpen) {
            setCell({ isOpen: true });
            return;
          }

          CorrectGroupModal.open(overlayId, {
            onClose: () => {
              CorrectGroupModal.remove(overlayId);
            },
            onConfirm: (value) => {
              setCell({ correctGroup: value });
              CorrectGroupModal.remove(overlayId);
            },
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
            <Box fontSize={"18px"}>
              <Text wordBreak={"keep-all"} textAlign={"center"} whiteSpace={"pre-wrap"}>
                {content.title}
              </Text>
            </Box>
          );
        })}
      </Box>
    </GridItem>
  );
}
