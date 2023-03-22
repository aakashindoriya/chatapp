import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useColorMode,
  Menu
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from "../../pp.jpg"
import { motion } from 'framer-motion';
import UserMenu from './Menu';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box pos={"sticky"} top="0px">
      <Box as={motion.div}
      initial={{
        y:-250
      }}
      animate={{
      y:0
      }}
      transition={{
        delay:0.3,
        type:"spring",
        
      }}
      bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box  >
            <Image h="70px" src={logo}/>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
                gasa
              <UserMenu />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}