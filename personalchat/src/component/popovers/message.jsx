import { Box, Button, Text } from "@chakra-ui/react";

export default function Popmessage({setmessage}){
    return(<>
    <Box w="100%" 
    h="100vh" 
    pos={"absolute"}
    zIndex="2"
    display={"grid"}
    justifyContent="center"
    alignItems={"center"}  
    bg="gray.100"
    >
        <Box w="100%"
        bg="whatsapp.100"
        h="40vh"
        opacity={"100%"}
        display="grid"
        alignItems="center"
        p="10%"
        borderRadius={"md"}
        boxShadow="dark-lg"
        position={"relative"}
        >
        <Text fontSize={"2xl"} >We have sent an email to your registered email Please verify to Continue</Text>
        <Button 
        pos="absolute"
        top="1%"
        right="1%"
        bg="transparent"
        w="10%" m="auto" onClick={()=>setmessage(false)}>X</Button>
        </Box>

    </Box>
    </>)
}