import { Box, createOverlay, Portal, Button, For, NativeSelect, Text, VStack, HStack } from "@chakra-ui/react";
import { groupsAtom } from "~/atoms/group-atom";
import { useAtomValue } from "jotai";
import { bingoAtom } from "~/atoms/bingo-atom";
import Confetti from "react-confetti";

type GameCompleteModalProps = {
  onClose: () => void;
};

export const GameCompleteModal = createOverlay(function GameCompleteModalImpl({ onClose }: GameCompleteModalProps) {
  const groups = useAtomValue(groupsAtom);
  const bingo = useAtomValue(bingoAtom);

  const sortedGroups = groups
    .map((group) => ({
      ...group,
      score: Object.values(bingo).filter((cell) => cell.correctGroup === group.id).length,
    }))
    .sort((a, b) => b.score - a.score);

  const getMedal = (index: number) => {
    switch (index) {
      case 0:
        return "🥇"; // 금메달
      case 1:
        return "🥈"; // 은메달
      case 2:
        return "🥉"; // 동메달
      default:
        return null;
    }
  };

  const getMedalColor = (index: number, opacity: number) => {
    switch (index) {
      case 0:
        return `yellow.${opacity}`; // 금메달 색상
      case 1:
        return `orange.${opacity}`; // 은메달 색상
      case 2:
        return `red.${opacity}`; // 동메달 색상
      default:
        return `gray.${opacity}`;
    }
  };

  // FIXME: Dialog 컴포넌트로 구현시 화면에 계속 나오지않음.. 원인 미상
  return (
    <Portal>
      <Box position="fixed" top={0} left={0} right={0} bottom={0} bg="blackAlpha.600" zIndex={1000}>
        <Box position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)" bg="white" borderRadius="xl" boxShadow="xl" p={6} minW="sm" maxW="md">
          <Box mb={4}>
            <Box as="h2" fontSize="xl" fontWeight="bold">
              게임이 종료되었습니다.
            </Box>
          </Box>
          <Box mb={6}>
            <VStack gap={4} align="stretch">
              <For each={sortedGroups}>
                {(group, index) => (
                  <HStack key={group.id} justify="space-between" p={2} bg={getMedalColor(index, 100)} borderRadius="md">
                    <HStack>
                      <Text fontWeight="bold" color={getMedalColor(index, 400)}>
                        {index + 1}위
                      </Text>
                      <Text>
                        {group.id}조 {getMedal(index)}
                      </Text>
                    </HStack>
                    <Text fontWeight="bold" color={getMedalColor(index, 400)}>
                      {group.score}개
                    </Text>
                  </HStack>
                )}
              </For>
            </VStack>
          </Box>
          <Box display="flex" justifyContent="center" gap={2}>
            <Button onClick={onClose}>확인</Button>
          </Box>
        </Box>
      </Box>
      <Confetti width={window.innerWidth} height={window.innerHeight} initialVelocityY={20} />
    </Portal>
  );
});
