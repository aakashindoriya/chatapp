  import {Flex,Box,FormControl,FormLabel,Input,InputGroup,InputRightElement,Stack,Button,Heading,Text,useColorModeValue,Link, useToast,} from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { SIGNUP } from '../customfunc/apicall';
import Popmessage from '../popovers/message';
import { useDispatch } from 'react-redux';
import { authRegister } from '../redux/actions/auth.actions';
  let init={
    email:"",
    password:"",
    name:"",
  }
  let conditions={
    isEmail:false,
    isPassword:false
  }
  
  export default function Signup() {
    let dispatch=useDispatch()
    const [showPassword, setShowPassword] = useState(false);
    const [data,setdata]=useState(init)
    const [valid,setvalid]=useState(conditions)
    const [message,setmessage]=useState(false)
    const toast=useToast()
   async function  handleChange(e){
      await setdata({...data,[e.target.name]:e.target.value})
      let capitals= new RegExp('(?=.*[A-Z])');
      let numbers= new RegExp('(?=.*[0-9])');
      let spacial= new RegExp('(?=.*[@#\$%\&\*])');
      let email=new RegExp("[a-zA-Z0-9_\.]+[@]+[a-z]")
      if(e.target.name==="email"){
        if(email.test(e.target.value)){
          setvalid({...valid,isEmail:true})
        }else{
          setvalid({...valid,isEmail:false})
        }
      }
      if(e.target.name==="password"){
        if(numbers.test(e.target.value)&&capitals.test(e.target.value)&&spacial.test(e.target.value)&&data.password.length>=6){
          setvalid({...valid,isPassword:true})
        }else{
          setvalid({...valid,isPassword:false})
        }
      }
    }
    async function HandleSignup(){
      try {
        let temp={
          username:data.name,email:data.email,password:data.password
        }

         await dispatch(authRegister(temp))
         setmessage(true)
         setvalid(conditions)
         setdata(init)
      } catch (error) {
        console.log(error.response.data)
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
      }
      
    
    }

 
    return (
      <Flex
        minH={'100vh'}
        minW={'100%'}
        align={'center'}
        justify={'center'}
        position="relative" 
        bg={useColorModeValue('gray.50', 'rgb(23,25,35)')}>
        
     {message&&<Popmessage setmessage={setmessage} />}
        <Stack spacing={8} mx={'auto'} w={'xl'} py={12} px={6} >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              PP-chat Sign-up
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
             
              <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" name="name" value={data.name} onChange={(e)=>handleChange(e)} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                 _focusVisible={{
                  borderColor:valid.isEmail?"green":"red"
              }}
                type="email" name="email" value={data.email} onChange={(e)=>handleChange(e)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                
                <InputGroup>
                  <Input
                   _focusVisible={{
                   borderColor:valid.isPassword?"green":"red"
               }}
                  
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
                <Text>Password must contain at least 6 characters with at least one Numeric and Capital value </Text>
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
                  isDisabled={(valid.isEmail&&valid.isPassword)?false:true}                         
                  onClick={HandleSignup}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }