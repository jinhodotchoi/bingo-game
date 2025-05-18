import { Button, Box, createOverlay, Portal } from "@chakra-ui/react";

type CorrectGroupModalProps = {
  title: string;
  description: string;
  onClose: () => void;
  onConfirm: () => void;
};

const CorrectGroupModal = createOverlay(function CorrectGroupModalImpl({ title, description, onClose, onConfirm }: CorrectGroupModalProps) {
  // FIXME: Dialog 컴포넌트로 구현시 화면에 계속 나오지않음.. 원인 미상
  return (
    <Portal>
      <Box position="fixed" top={0} left={0} right={0} bottom={0} bg="blackAlpha.600" zIndex={1000}>
        <Box position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)" bg="white" borderRadius="xl" boxShadow="xl" p={6} minW="sm" maxW="md">
          <Box mb={4}>
            <Box as="h2" fontSize="xl" fontWeight="bold">
              {title}
            </Box>
          </Box>
          <Box mb={6}>{description}</Box>
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="ghost" onClick={onClose}>
              취소
            </Button>
            <Button colorScheme="pink" onClick={onConfirm}>
              확인
            </Button>
          </Box>
        </Box>
      </Box>
    </Portal>
  );
});

export default function DebugPage() {
  const MODAL_ID = "CORRECT_GROUP_MODAL";

  return (
    <Box p={2}>
      <Button
        onClick={() =>
          CorrectGroupModal.open(MODAL_ID, {
            title: "hihi",
            description: "hello",
            onClose: () => {
              console.log(">>> close");
              // FIXME: close 함수 호출 시 화면에서 사라지지 않음.
              CorrectGroupModal.remove(MODAL_ID);
            },
            onConfirm: () => {
              console.log(">>> confirm");
              // FIXME: close 함수 호출 시 화면에서 사라지지 않음.
              CorrectGroupModal.remove(MODAL_ID);
            },
          })
        }
      >
        open
      </Button>
      <CorrectGroupModal.Viewport />
    </Box>
  );
}
