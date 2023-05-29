import React, { FC } from "react";
import { Box, Container, Flex, Grid, Heading } from "@chakra-ui/react";
import Landing_Bingo_Block from "~/components/Landing_Bingo_Block";
import { bingoContents } from "~/constants/bingo";

const Landing_Page: FC = () => {
  return (
    <Box bgColor={"pink.50"} minH={"100vh"} display={"flex"}>
      <Container maxW={"700px"} m={"auto"}>
        <Flex direction={"column"} gap={5}>
          <Heading as={"h1"}>영양소 빙고게임</Heading>
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
