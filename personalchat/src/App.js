
import './App.css';
import { Box } from '@chakra-ui/react';
import Nav from './component/hompage/Navbar';
import Allrouts from './component/Allroutes/Allrouts';
import { useEffect } from 'react';
import ChatBox from './component/hompage/MessageBox';
function App() {
  useEffect(()=>{

  },[])
  return (
    
      <Box>
        <Nav/>
        <ChatBox />
       <Allrouts />
      </Box>
  
  );
}

export default App;
