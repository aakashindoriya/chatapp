import { Avatar, Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import StatusIndicator from './StatusIdicator'

export default function UserCard({username,status,_id,profile}) {
  return (
    <Stack mt={6} h="80px"  direction={'row'} spacing={4} align={'center'} boxShadow="dark-lg" p="2%" borderRadius={"2xl"}>
          <Box pos="relative">
            {status==="online"&&<StatusIndicator profile={profile} username={username} />}
            {status==="offline"&&<Avatar
            name={username}
            src={profile||'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'PPuser'}
          />}
          
          </Box>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600} fontSize="xl" textTransform={"capitalize"}>{username}</Text>
          </Stack>
        </Stack>
  )
}
