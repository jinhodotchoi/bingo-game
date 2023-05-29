import React, { FC } from "react";
import { Box, Container, Flex, Grid, Heading, List, ListItem } from "@chakra-ui/react";
import Landing_Bingo_Block from "~/components/Landing_Bingo_Block";
import { bingoContents } from "~/constants/bingo";
import { groups } from "~/constants/group";

const Landing_Page: FC = () => {
  return (
    <Box bgColor={"pink.50"} minH={"100vh"} display={"flex"}>
      <Container maxW={"750px"} m={"auto"}>
        <Flex direction={"column"} gap={5}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading as={"h1"}>영양소 빙고게임 ❤️</Heading>
            <Box bgColor={"white"} borderRadius={"xl"} p={2} boxShadow={"md"}>
              <List display={"flex"} gap={3}>
                {groups.map((group) => (
                  <ListItem display={"flex"} gap={2} alignItems={"center"}>
                    <Box width={"10px"} aspectRatio={"1 / 1"} bgColor={group.color} />
                    {group.id}조
                  </ListItem>
                ))}
              </List>
            </Box>
          </Flex>
          <Grid gap={"6"} gridTemplateColumns={"repeat(4, 1fr)"}>
            {bingoContents.map((content) => (
              <Landing_Bingo_Block content={content} key={content.id} />
            ))}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

export default Landing_Page;
