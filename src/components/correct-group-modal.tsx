import { GroupId } from "~/constants/group";
import { useState } from "react";
import { Box, createOverlay, Portal, Button, For, NativeSelect } from "@chakra-ui/react";
import { groupsAtom } from "~/atoms/group-atom";
import { useAtomValue } from "jotai";

type CorrectGroupModalProps = {
  onClose: () => void;
  onConfirm: (value: GroupId) => void;
};

export const CorrectGroupModal = createOverlay(function CorrectGroupModalImpl({ onClose, onConfirm }: CorrectGroupModalProps) {
  const groups = useAtomValue(groupsAtom);

  const [groupId, setGroupId] = useState(groups[0].id);

  // FIXME: Dialog 컴포넌트로 구현시 화면에 계속 나오지않음.. 원인 미상
  return (
    <Portal>
      <Box position="fixed" top={0} left={0} right={0} bottom={0} bg="blackAlpha.600" zIndex={1000}>
        <Box position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)" bg="white" borderRadius="xl" boxShadow="xl" p={6} minW="sm" maxW="md">
          <Box mb={4}>
            <Box as="h2" fontSize="xl" fontWeight="bold">
              맞춘 조의 번호를 입력하세요
            </Box>
          </Box>
          <Box mb={6}>
            <NativeSelect.Root>
              <NativeSelect.Field onChange={(e) => setGroupId(+e.target.value as GroupId)} value={groupId}>
                <For each={groups}>
                  {(group) => (
                    <option value={group.id} key={group.id}>
                      {group.id}조
                    </option>
                  )}
                </For>
              </NativeSelect.Field>
            </NativeSelect.Root>
          </Box>
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="ghost" onClick={onClose}>
              취소
            </Button>
            <Button onClick={() => onConfirm(groupId)}>확인</Button>
          </Box>
        </Box>
      </Box>
    </Portal>
  );
});
