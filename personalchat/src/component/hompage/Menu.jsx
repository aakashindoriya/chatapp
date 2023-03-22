import { Avatar, Box, Button, Center, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { GETPROFILE } from '../customfunc/apicall'

function UserMenu() {
    let [profile,setprofile]=useState({})
    useEffect(()=>{
        profilesetter()
    },[])
    async function profilesetter(){
       try {
        let res=await GETPROFILE()
           setprofile({...res.data})
       } catch (error) {
            console.log(error)
       }
    }

  return (
    <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={profile.pic||'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <Box as={motion.div}
                initial={{opacity:0}}
                animate={{opacity:[0.1,0.2,0.3,0.4,0.5,1]}}
                transition={{delay:3}}
                >
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Box position="relative">
                    <Avatar
                      size={'2xl'}
                      src={profile.pic||'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                    <Input
                        type="file"
                        id="fileInput"
                        top="0%"
                        left="10%"
                        h="100%"
                        variant={"unstyled"}
                        opacity="0%"
                        position={"absolute"}
                        // display="none"
                        // onChange={}
                    />
                    </Box>
                  </Center>
                  <br />
                  <Center>
                    <p>{profile.email||"Username"}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
                </Box>
              </Menu>
  )
}

export default UserMenu