import { FC } from "react";
import { Box, Button, Heading, Highlight, Select, Text, VStack } from "@chakra-ui/react";
import { groups } from "~/constants/group";
import Link from "next/link";

const Landing_Page: FC = () => {
  return (
    <Box bgColor={"pink.50"} h={"100vh"} display={"flex"}>
      <Box m={"auto"}>
        <VStack gap={20}>
          <Heading>
            <Highlight query={"영양소 빙고게임"}>즐거운 영양소 빙고게임 ❤️</Highlight>
          </Heading>
          <VStack gap={5}>
            <Text>조의 갯수를 입력해주세요!</Text>
            <Select bgColor={"white"}>
              {groups.map((group) => (
                <option value={group.id} key={group.id}>
                  {group.id}조
                </option>
              ))}
            </Select>
            <Link href={"/bingo"}>
              <Button colorScheme={"pink"}>시작하기</Button>
            </Link>
          </VStack>
          <img src={"/choonsik-animation.gif"} alt={"귀여운 춘식이"} width={210} height={210} />
        </VStack>
      </Box>
    </Box>
  );
};

export default Landing_Page;
