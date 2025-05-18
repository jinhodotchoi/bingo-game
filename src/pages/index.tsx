import { MouseEventHandler, useState } from "react";
import { Box, Button, For, Heading, Highlight, NativeSelect, Text, VStack } from "@chakra-ui/react";
import { GroupId, groups } from "~/constants/group";
import Link from "next/link";
import { useSetAtom } from "jotai";
import { groupNumberAtom } from "~/atoms/group-atom";
import { useRouter } from "next/router";
import Image from "next/image";
import { bingoAtom, getBingoAtomInitialValue } from "~/atoms/bingo-atom";
import { noop } from "~/utils/noop";

export default function LandingPage() {
  const [groupNumber, setGroupNumber] = useState<GroupId>(1);

  const setGroupNumberGlobally = useSetAtom(groupNumberAtom);
  const setBingo = useSetAtom(bingoAtom);

  const router = useRouter();

  const onLinkClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    setBingo(getBingoAtomInitialValue());
    setGroupNumberGlobally(groupNumber);
    router.push(e.currentTarget.href).catch(noop);
  };

  return (
    <Box bgColor={"pink.50"} h={"100vh"} display={"flex"}>
      <Box m={"auto"} flexShrink={0}>
        <VStack gap={20}>
          <Heading fontSize={"26px"}>즐거운 영양소 빙고게임 ❤️</Heading>
          <VStack gap={5}>
            <Text>조의 개수를 입력해주세요!</Text>
            <NativeSelect.Root bgColor={"white"}>
              <NativeSelect.Field onChange={(e) => setGroupNumber(+e.target.value as GroupId)} value={groupNumber}>
                <For each={groups}>
                  {(group) => (
                    <option value={group.id} key={group.id}>
                      {group.id}조
                    </option>
                  )}
                </For>
              </NativeSelect.Field>
            </NativeSelect.Root>
            <Link href={"/bingo"} onClick={onLinkClick}>
              <Button>시작하기</Button>
            </Link>
          </VStack>
          <Image src={"/choonsik-animation.gif"} alt={"귀여운 춘식이"} width={210} height={210} priority={false} unoptimized />
        </VStack>
      </Box>
    </Box>
  );
}
