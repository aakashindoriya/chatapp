import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  Stack,
  Tag,
} from "@chakra-ui/react";

const ProjectCard = ({
  techStack,
  title,
  description,
  imageSrc,
  githubLink,
  liveLink,
}) => {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Image src={imageSrc} alt={title} />

      <Box p="6">
        <Stack direction="row" spacing={4} mb={2}>
          {techStack.map((tech) => (
            <Tag key={tech} size="sm" colorScheme="purple">
              {tech}
            </Tag>
          ))}
        </Stack>

        <Link href={liveLink} isExternal>
          <Text fontSize="xl" fontWeight="semibold" mb={2}>
            {title}
          </Text>
        </Link>

        <Text color="gray.600" fontSize="sm" mb={4}>
          {description}
        </Text>

        <Flex justify="space-between">
          <Link href={githubLink} isExternal>
            <Text fontSize="sm">GitHub</Text>
          </Link>

          <Link href={liveLink} isExternal>
            <Text fontSize="sm">Live</Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectCard;
