import React from "react";
import { Box, Container, Flex, Grid, Heading, List, For, Text } from "@chakra-ui/react";
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
        <Container flexShrink={0} m={"auto"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Flex gap={4}>
            <Grid gap={4} gridTemplateColumns={"repeat(6, 1fr)"} w={"950px"}>
              <For each={bingoContents}>{(content) => <BingoCell content={content} key={content.id} />}</For>
            </Grid>
            <Flex alignItems={"flex-end"}>
              <Box bgColor={"white"} borderRadius={"xl"} p={2} boxShadow={"md"} display={"flex"} gap={3}>
                <List.Root>
                  <For each={groups}>
                    {(group) => (
                      <List.Item key={group.id} display={"flex"} gap={2} alignItems={"center"}>
                        <Box width={"10px"} aspectRatio={"1 / 1"} bgColor={group.color} />
                        <Text>{group.id}조</Text>
                      </List.Item>
                    )}
                  </For>
                </List.Root>
              </Box>
            </Flex>
          </Flex>
        </Container>
        <Box pos={"absolute"} bottom={"10px"} right={"10px"}>
          <Image src={"/choonsik-joa.png"} alt={"춘식이는 좋아"} width={100} height={100} priority={false} />
        </Box>
      </Box>
    </motion.div>
  );
}
