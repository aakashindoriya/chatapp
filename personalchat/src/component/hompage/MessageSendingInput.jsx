import { useState } from "react";
import {
  Box,
  Flex,
  Input,
  IconButton,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRegPaperPlane } from "react-icons/fa";

function MessageSendingBox() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Message sent:", message);
    setMessage("");
  };

  const borderColor = useColorModeValue("gray.300", "gray.700");

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      borderTopWidth={1}
      borderColor={borderColor}
      py={4}
    >
      <Flex alignItems="center" justify="space-between">
        <Input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Type a message..."
          size="lg"
          focusBorderColor="blue.500"
          borderRadius={999}
          _hover={{ borderColor: "blue.300" }}
        />
        <IconButton
          type="submit"
          colorScheme="blue"
          aria-label="Send message"
          icon={<Icon as={FaRegPaperPlane} />}
          borderRadius={999}
          ml={2}
        />
      </Flex>
    </Box>
  );
}

export default MessageSendingBox;

