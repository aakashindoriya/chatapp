import {Flex,Box,FormControl,FormLabel,Input,InputGroup,InputRightElement,Stack,Button,Heading,Text,useColorModeValue,Link, useToast,} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { LOGIN } from '../customfunc/apicall';
import { useLocation,useNavigate } from 'react-router-dom';
let init={
  email:"",
  password:"",
}
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data,setdata]=useState(init)
  const toast=useToast()
  const history = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
 function  handleChange(e){
    setdata({...data,[e.target.name]:e.target.value})
  }
  async function HandleLogin(){
     try {
      setLoading(true)
        await LOGIN(data)
        setLoading(false)
        toast({
          title:"welcome to PP-Chat",
          status:"success",
          isClosable: true,
          position:"top",
          containerStyle: {
            width: '50%',
            fontSize:"3xl",
            fontFamily:"heading",
            fontStyle:"italic",
            lineHeight:"20px"
          }, 
        })
        history(from)
     } catch (error) {
      console.log(error)
        toast({
          title:error.response.data,
          status:"error",
          isClosable: true,
          position:"top",
          containerStyle: {
            width: '50%',
            fontSize:"3xl",
            fontFamily:"heading",
            fontStyle:"italic",
            lineHeight:"20px"
          },
          
        })
        setLoading(false)
     }
  }
  return (
    <Flex
      minH={'100vh'}
      minW={'100%'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'rgb(23,25,35)')}>
      <Stack spacing={8} mx={'auto'} w={'xl'} py={12} px={6} >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            PP-chat Log-In
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            A new way to communicate ♠
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
              type="email" name="email" value={data.email} onChange={(e)=>handleChange(e)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                type={showPassword ? 'text' : 'password'}  name="password" value={data.password} onChange={(e)=>handleChange(e)}/>
                <InputRightElement h={'full'}>
                  <Button
                   _hover={{
                    bg: 'transparent',
                  }}
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                isDisabled={loading?true:false}
                onClick={HandleLogin}
                >
                Log In
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Do'nt have an account? <Link color={'blue.400'}>Sign-Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}