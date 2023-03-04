"use client"
/* eslint-disable react/no-unescaped-entities */
import { Box,Text } from "@chakra-ui/react";
import Link from "next/link";

export default function About(){
    return(
        <>
            <Box fontFamily={'inder'} bg={'cyancust'} p={'6'} borderRadius={'3xl'} m={'4'} textAlign={['left','center']} mt={'4'}  >  

                <Box className="flex flex-col">
                    <Text color={'green.800'} _hover={{color:'green.500',textDecoration:'underline'}} textAlign={'center'} fontSize={['sm','xl']} fontWeight={'bold'} >
                        <Link href={'https://www.piaic.org'} prefetch={false} target={"_blank"}>
                            Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
                        </Link>
                    </Text>
                    <Text textAlign={'center'} fontSize={['3xl','5xl']}>Certified Web 3.0 and Metaverse Developer</Text>
                    <Text textAlign={'center'} fontSize={["xl",'2xl']} fontWeight="bold" mt="4">A One and Quarter Years Panaverse DAO Earn as you Learn Program</Text>
                    <Text mt="4">Getting Ready for the Next Generation of the Internet</Text>
                    <Text className="mt-4">
                        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge,
                        Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                    </Text>     
                    <Text mt="4" color={'red.800'} _hover={{color:'red.500',textDecoration:'underline'}} textAlign={'center'} fontSize={['sm','xl']} fontWeight={'bold'} >
                        <Link href={"https://www.panaverse.co"} prefetch={false} target={"_blank"}>
                            The Panaverse Community and Syllabus
                        </Link>
                    </Text> 
                </Box>

                <Box fontFamily={'serif'} >
                    <Box fontSize={'2xl'} textAlign={'left'} >The</Box> internet is without a doubt the most important technological development in human history. Web3, 
                    3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing 
                    novel features and advancements. 
                    Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, 
                    cloud and edge computing, voice computing, ambient computing, and more.
                </Box>

                <Box fontFamily={'serif'} textAlign={'left'} mt={'4'}>
                <Link href={"https://icg.citi.com/icghome/what-we-think/citigps/insights/metaverse-and-money_20220330"} prefetch={false} target={"_blank"}>
                    <Box color={'green.800'}  _hover={{color:'green.500',textDecoration:'underline'}}  fontSize={['xl']} pl={['none','3']} fontWeight={'bold'}>
                        Citi
                    </Box>
                </Link > 
                    <Text pl={'4'}>
                    is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse,
                    terms used to depict a future internet vision centered on decentralized technologies and virtual worlds.
                    Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable 
                    market of up to $13 trillion and five billion people by 2030.
                    </Text>
                </Box>

                <Text textAlign={'center'} fontFamily={'serif'} fontWeight={'bold'} fontSize={'4xl'} my="8">Program of Studies </Text>

                <Box textAlign={'left'} pb={'8'}>
                    This curriculum is intended for beginners who want to learn software development from the ground up.
                    The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming 
                    and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that
                    includes both onsite and online classes and is divided into five quarters of 13 weeks each. 
                    The emphasis will be on hands-on learning by educating students to produce projects. 
                    To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays.
                    It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
                </Box>
        </Box>
        <Box borderBottom={'4px'} borderTop={'4px'} m='4' borderColor={'nav'} borderRadius={'xl'}>
                
                 <Box className='border border-y-4  border-x-0  rounded-xl border-blue-900'>
                    <Text textAlign={'center'} fontFamily={'serif'} fontWeight={'bold'} mt={'6'} fontSize={['3xl','5xl']} dropShadow={'[5px_10px_4px_rgba(0,0,0,0.5)]'} >
                        Outcome FOR Participants
                    </Text>
                    <Box p="8" textAlign={['left']}>
                        The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that 
                        are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering 
                        services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students 
                        a fantastic opportunity to better 
                        their financial situation while also giving the economy a much-needed boost by expanding software exports.
                    </Box>

                    <Box textAlign={['left','center']} p="8" className='flex flex-col text-base font-inder space-y-4 my-4 text-left md:text-center md:text-xl'>
                        <Link href={'https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms'} prefetch={false} target={"_blank"}>
                            <Box color={'cyan.700'}  _hover={{color:'cyan.500',textDecoration:'underline'}}  fontSize={['xl']}  fontWeight={'bold'}>
                                Top 5 "Metaverse" jobs that will rule the future of tech industry
                            </Box>   
                        </Link>

                        <Link href={'https://web3.career/web3-salaries/blockchain-developer'} prefetch={false} target={"_blank"}>
                            <Box mt={'4'} color={'cyan.700'}  _hover={{color:'cyan.500',textDecoration:'underline'}}  fontSize={['xl']}  fontWeight={'bold'}>
                                Blockchain Developer Salary - Jun 2022
                            </Box>   
                        </Link>

                        <Link href={'https://thedefiant.io/web3-soaring-salaries'} prefetch={false} target={"_blank"}>
                            <Box mt={'4'} color={'cyan.700'}  _hover={{color:'cyan.500',textDecoration:'underline'}}  fontSize={['xl']}  fontWeight={'bold'}>
                                Web3 Salaries Soar to $750,000 for Rank-and-File Devs
                            </Box>   
                        </Link>

                        <Link href={'https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022'} prefetch={false} target={"_blank"}>
                            <Box mt={'4'} color={'cyan.700'}  _hover={{color:'cyan.500',textDecoration:'underline'}}  fontSize={['xl']}  fontWeight={'bold'}>
                                The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters
                            </Box>   
                        </Link>

                        <Link href={'https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/'} prefetch={false} target={"_blank"}>
                            <Box mt={'4'} color={'cyan.700'}  _hover={{color:'cyan.500',textDecoration:'underline'}}  fontSize={['xl']}  fontWeight={'bold'}>
                                How To Become Metaverse Developer: Scope, Skills, and Salary
                            </Box>   
                        </Link>
                    </Box>
                </Box> 
        </Box>
    </>
    );
}