import { Box, Flex, Avatar, Text, Input, Button } from "@chakra-ui/react";
import MessageSendingBox from "./MessageSendingInput";

// Dummy data for demonstration
const messages = [
  {
    id: 1,
    sender: {
      name: "John Doe",
      avatar: "https://via.placeholder.com/50",
    },
    content: "Hello!",
  },
  {
    id: 2,
    sender: {
      name: "Jane Doe",
      avatar: "https://via.placeholder.com/50",
    },
    content: "Hi there!",
  },
];

export default function ChatBox() {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      {/* Chat history */}
      <Flex direction="column" p={4}>
        {messages.map((message) => (
          <Flex key={message.id} mb={4} justify={message.sender === "me" ? "flex-end" : "flex-start"}>
            {message.sender !== "me" && (
              <Avatar size="sm" src={message.sender.avatar} mr={2} />
            )}
            <Box
              bg={message.sender === "me" ? "blue.100" : "gray.100"}
              color={message.sender === "me" ? "blue.900" : "gray.900"}
              p={2}
              borderRadius="lg"
              maxW="md"
            >
              <Text>{message.content}</Text>
            </Box>
            {message.sender === "me" && (
              <Avatar size="sm" src={message.sender.avatar} ml={2} />
            )}
          </Flex>
        ))}
      </Flex>
      <MessageSendingBox />

      </Box>
  )}
