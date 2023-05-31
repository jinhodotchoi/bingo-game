import { FC, useState } from "react";
import { bingoContents } from "~/constants/bingo";
import { Button, Container, Heading, HStack, List, ListItem, Text, Textarea, VStack } from "@chakra-ui/react";

const Bingo_Edit_Form: FC = () => {
  const [content, setContent] = useState(bingoContents);

  const editTitle = (id: number, title: string) => {
    const idx = content.findIndex((item) => item.id === id);
    setContent([
      ...content.slice(0, idx),
      {
        id,
        title,
      },
      ...content.slice(idx + 1),
    ]);
  };

  const onSubmit = async () => {
    try {
      await fetch("/api/bingo-edit", {
        method: "post",
        body: JSON.stringify(content),
      });
      alert("반영되었습니다.");
      window.location.reload();
    } catch (e) {
      alert("에러발생");
      console.log(e);
    }
  };

  return (
    <Container py={8}>
      <VStack alignItems={"stretch"} gap={"20px"}>
        <Heading>편집하기</Heading>
        <List display={"flex"} gap={"10px"} alignItems={"stretch"} flexDir={"column"}>
          {content.map((bingo) => (
            <ListItem key={bingo.id}>
              <HStack>
                <Text w={"10%"}>{bingo.id}번</Text>
                <Textarea value={bingo.title} onChange={(e) => editTitle(bingo.id, e.target.value)} whiteSpace={"pre-line"} />
              </HStack>
            </ListItem>
          ))}
        </List>
        <Button colorScheme={"blue"} onClick={onSubmit}>
          제출하기
        </Button>
      </VStack>
    </Container>
  );
};

export default Bingo_Edit_Form;
