import Link from "next/link";
import {FaFacebookSquare,FaTwitter,FaDiscord,FaGithub,} from 'react-icons/fa';
import {ImYoutube2} from 'react-icons/im';
import { Box,Flex,HStack,Stack,Text,Icon, Spacer } from "@chakra-ui/react";

export default function Footer(){
    return(
        <>
        <Box w={'100%'} bg={'gray.600'} mb={'0'} >
            <Stack direction={['column','row','row']} >
            <Box pt={['6']}  pl={['10','10']}  color={'white'} className="flex flex-col space-x-4 bg-slate-600 text-left pl-5 py-10 text-white text-base">
               <Flex justify={['center','left']}  >
                   <Stack direction={'column'}>

                        <Text fontSize={['14','18']} fontWeight={700} >Relevant Information Links:</Text>
                        <HStack  pl={'4'}>
                            <Text fontSize={['10','14']}>Admission Website :</Text> 
                            <Link href={'https://www.piaic.org/'} prefetch={false} target={"_blank"} >
                                <Text fontSize={['10','14']} pl={'0'} fontWeight={'700'} _hover={{color:'cyan.400',textDecoration:'underline'}} color={'blue.300'} >
                                    PIAIC
                                </Text>
                            </Link>
                        </HStack>
                        <HStack pl={'4'}>
                            <Text fontSize={['10','14']}>Syllabus and Community Website : </Text>
                            <Link href={'https://www.panaverse.co/'} prefetch={false} target={"_blank"} >
                                <Text fontSize={['10','14']} fontWeight={'700'} _hover={{color:'cyan.400',textDecoration:'underline'}} color={'blue.300'}>
                                    Panaverse DAO
                                </Text>
                            </Link>
                        </HStack>
                        <Flex flexWrap={'wrap'} w={['60','96']}  p={'1'} pl={'4'}>
                            <Icon h={'16'} w="16" color={'nav'}  _hover={{color:'blue.600'}}>
                                <Link href={'https://www.facebook.com/groups/panaverse '} prefetch={false} target={"_blank"} >  
                                    <FaFacebookSquare />
                                </Link>
                            </Icon>
                            <Icon  h={'20'} w="20" color={'red.600'}  _hover={{color:'white'}}>
                                <Link href={'https://www.youtube.com/@panaverse/streams '} prefetch={false} target={"_blank"} >
                                    <ImYoutube2 />
                                </Link>
                            </Icon>
                            <Icon  h={'16'} w="16" color={'black'}  _hover={{color:'purple.700'}}>
                                <Link href={'https://github.com/panaverse'} prefetch={false} target={"_blank"} >
                                    <FaGithub />
                                </Link>
                            </Icon>
                            <Icon  h={'16'} w="16" color={'blue.600'}  _hover={{color:'white'}}>
                                <Link href={'https://twitter.com/Panaverse_edu'} prefetch={false} target={"_blank"} >
                                    <FaTwitter />
                                </Link>
                            </Icon>
                            <Icon  h={'16'} w="16" color={'purple.700'}  _hover={{color:'black'}}>
                                <Link href={'https://discord.gg/Pc96uGMC'} prefetch={false} target={"_blank"} >
                                    <FaDiscord />
                                </Link>
                            </Icon>
                        </Flex>    
                    </Stack>    
                </Flex>
            </Box>
            <Spacer/>
            <Flex  paddingRight={['none','20','20']} justify={['center','right','right']} fontWeight={'700'}  color={'cyan.500'} >
                <Stack mx={['none','none','none']} bg={'cyancust'} p={'10'} w={'60'} mr={'none'}>
                <Text >This Site is  </Text>
                <Text>Design  </Text>
                <Text>&</Text>
                <Text>Developed</Text>
                <Text>By M.B</Text>
                </Stack>
            </Flex>
            </Stack>
        </Box>
        </>
    );
}