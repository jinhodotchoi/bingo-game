import React, { FC, useState } from "react";
import { Box, GridItem, Text } from "@chakra-ui/react";
import { BingoContent } from "~/constants/bingo";
import { match } from "ts-pattern";

const Landing_Bingo_Block: FC<{
  content: BingoContent;
}> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GridItem
      aspectRatio={"1 / 1"}
      bgColor={"white"}
      borderRadius={"xl"}
      boxShadow={"md"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      cursor={"pointer"}
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
            <Text>{content.title}</Text>
          </Box>
        ))
        .exhaustive()}
    </GridItem>
  );
};

export default Landing_Bingo_Block;
