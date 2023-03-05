"use client"
import Link from 'next/link';
import {GrClose } from 'react-icons/gr'
import { useState } from 'react';
import { Box,Stack,Text } from '@chakra-ui/react';

export default function Sidebar() {
    const [displayMenu,setDisplayMenu]=useState<"none"|"block">("none");
    
    function ShowMenu(){
            setDisplayMenu("block")
        }
    
    function CloseMenu(){
        setDisplayMenu("none")
    }    

  return (
    
    <>
    <Box as='button' display={['inline-block','none']} zIndex={'2'} mt={'2'} pos={'fixed'}  bg={'nav'} borderBottomRightRadius={'3xl'} borderTopRightRadius={'3xl'} color={'white'} fontFamily={'inder'} p={'2'} onClick={ShowMenu} _hover={{color:'cyan.500'}}>
                Menu
            </Box>

    <Box display={[`${displayMenu}`,'flex']} pl={['none','10']}   h={['100%']} w={['100%','52']} overflowY={'auto'} bg={'gray.600'} textAlign={'center'} pb={'20'} pt={'4'} zIndex={'1'} mt={'-2'} pos={'fixed'} top={'xl'} color={'white'} fontWeight={'700'} >
            
            <Box  display={['inline-block','none']} pos={'fixed'} right={'0'} mr={'6'} >
                <GrClose onClick={CloseMenu}  fontSize={'xl'}/>
            </Box>
            <Stack >
            <Text color={'gray.300'} >Course Details</Text>
            <Text color={'gray.300'} >Core Courses</Text>
            <Box as='button' _hover={{color:'black',fontWeight:'700',fontSize:'20'}} >
                <Link onClick={CloseMenu} href={"#q1-c"} target={'_parent'}>Quater 1</Link></Box>
            <Box as='button' _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#q2-c"} target={'_parent'}>Quater 2</Link></Box>
            <Box as='button' _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#q3-c"} target={'_parent'}>Quater 3</Link></Box>
            <Text color={'gray.300'}>Specialization</Text>
            <Text color={'gray.300'}>Web 3</Text>
            <Box as='button'  _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#c-web-4"} target={'_parent'}>Quater 4</Link></Box>
            <Box as='button'  _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#c-web-5"} target={'_parent'}>Quater 5</Link>
            </Box>
            <Text color={'gray.300'}>AI</Text>
            <Box as='button'  _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#c-ai-4"} target={'_parent'}>Quater 4</Link></Box>
            <Box as='button'  _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#c-ai-5"} target={'_parent'}>Quater 5</Link>
            </Box>
            <Text color={'gray.300'}>IOT</Text>
            <Box as='button'  _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#c-iot-4"} target={'_parent'}>Quater 4</Link></Box>
            <Box as='button'  _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#c-iot-5"} target={'_parent'}>Quater 5</Link>
            </Box>
            <Text color={'gray.300'}>CNC</Text>
            <Box as='button'  _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#c-cnc-4"} target={'_parent'}>Quater 4</Link></Box>
            <Box as='button'  _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#c-cnc-5"} target={'_parent'}>Quater 5</Link>
            </Box>
            <Text color={'gray.300'}>Networking</Text>
            <Box as='button'  _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#c-net-4"} target={'_parent'}>Quater 4</Link></Box>
            <Box as='button'  _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#c-net-5"} target={'_parent'}>Quater 5</Link>
            </Box>
            <Text color={'gray.300'}>BioInformatics</Text>
            <Box as='button'  _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#c-bio-4"} target={'_parent'}>Quater 4</Link></Box>
            <Box as='button'  _hover={{color:'black',fontWeight:'700',fontSize:'20'}}>
                <Link onClick={CloseMenu} href={"#c-bio-5"} target={'_parent'}>Quater 5</Link>
            </Box>
                <br></br>
                <br></br>
                <br></br>
                </Stack>            
        </Box>
        </>
  )
}

 
// function HandleClick() {
//     throw new Error('Function not implemented.');
// }

