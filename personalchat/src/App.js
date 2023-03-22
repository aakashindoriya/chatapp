
import './App.css';
import { Box } from '@chakra-ui/react';
import Nav from './component/hompage/Navbar';
import Allrouts from './component/Allroutes/Allrouts';
import { useEffect } from 'react';
import Messaging from './component/message/Message';
function App() {
  useEffect(()=>{

  },[])
  return (
    
      <Box>
        <Nav/>
        
       <Allrouts />
      </Box>
  
  );
}

export default App;
