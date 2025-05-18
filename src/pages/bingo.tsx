import React from "react";
import { Box, Container, Flex, Grid, Heading, List, ListItem } from "@chakra-ui/react";
import { BingoCell } from "~/components/bingo-cell";
import { bingoContents } from "~/constants/bingo";
import Image from "next/image";
import { motion } from "framer-motion";
import { groupsAtom } from "~/atoms/groupAtom";
import { useAtomValue } from "jotai";

export default function BingoPage() {
  const groups = useAtomValue(groupsAtom);

  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Box bgColor={"pink.50"} h={"100vh"} display={"flex"}>
        <Container maxW={"900px"} w={"900px"} flexShrink={0} m={"auto"}>
          <Flex direction={"column"} gap={5}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading as={"h1"} fontSize={"3xl"}>
                영양소 빙고게임 ❤️
              </Heading>
              <Box bgColor={"white"} borderRadius={"xl"} p={2} boxShadow={"md"}>
                <List display={"flex"} gap={3}>
                  {groups.map((group) => (
                    <ListItem key={group.id} display={"flex"} gap={2} alignItems={"center"}>
                      <Box width={"10px"} aspectRatio={"1 / 1"} bgColor={group.color} />
                      {group.id}조
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Flex>
            <Grid gap={"4"} gridTemplateColumns={"repeat(6, 1fr)"}>
              {bingoContents.map((content) => (
                <BingoCell content={content} key={content.id} />
              ))}
            </Grid>
          </Flex>
        </Container>
        <Box pos={"absolute"} bottom={"10px"} right={"10px"}>
          <Image src={"/choonsik-joa.png"} alt={"춘식이는 좋아"} width={100} height={100} />
        </Box>
      </Box>
    </motion.div>
  );
}
