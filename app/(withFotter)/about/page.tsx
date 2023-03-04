"use client"
/* eslint-disable react/no-unescaped-entities */
import { Box,Text } from "@chakra-ui/react";
import Link from "next/link";

export default function About(){
    return(
        <>
            <Box className='flex flex-col space-y-10 md:mt-20 mt-4 font-serif md:text-xl text-center bg-nav_color mx-5 rounded-xl mb-4 h-auto  p-5'>  

                <Box className="flex flex-col">
                    <Text className="text-green-700 hover:text-green-500 font-bold"><Link href={'https://www.piaic.org'} prefetch={false} target={"_blank"}>
                        Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
                    </Link></Text>
                    <Text className="md:text-5xl text-xl">Certified Web 3.0 and Metaverse Developer</Text>
                    <Text className="text-3xl mb-4">A One and Quarter Years Panaverse DAO Earn as you Learn Program</Text>
                    <Text>Getting Ready for the Next Generation of the Internet</Text>
                    <Text className="mt-4">
                        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge,
                        Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                    </Text>     
                    <Text className="mt-4 text-rose-700 hover:text-rose-900"><Link href={"https://www.panaverse.co"} prefetch={false} target={"_blank"}>The Panaverse Community and Syllabus</Link> </Text> 
                </Box>

                <Box className='text-base font-inder text-left md:text-center md:text-xl'>
                    <Box className='text-2xl md:text-4xl'>The</Box> internet is without a doubt the most important technological development in human history. Web3, 
                    3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing 
                    novel features and advancements. 
                    Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, 
                    cloud and edge computing, voice computing, ambient computing, and more.
                </Box>

                <Box className='text-base font-inder text-left md:text-center md:text-xl'>
                <Link href={"https://icg.citi.com/icghome/what-we-think/citigps/insights/metaverse-and-money_20220330"} prefetch={false} target={"_blank"}><Box className='font-bold text-blue-800 underline hover:underline-offset-4 hover:text-cyan-500'>Citi</Box></Link> is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse,
                    terms used to depict a future internet vision centered on decentralized technologies and virtual worlds.
                    Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable 
                    market of up to $13 trillion and five billion people by 2030.
                </Box>

                <Text className='text-2xl  md:text-4xl font-bold font-serif text-center'>Program of Studies </Text>

                <Box className='text-base font-inder text-left md:text-center md:text-xl'>
                    This curriculum is intended for beginners who want to learn software development from the ground up.
                    The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming 
                    and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that
                    includes both onsite and online classes and is divided into five quarters of 13 weeks each. 
                    The emphasis will be on hands-on learning by educating students to produce projects. 
                    To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays.
                    It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
                </Box>
        </Box>
        <Box className="flex flex-col space-y-10 mt-6  mx-5 rounded-xl mb-4 h-auto p-5">
                
                 <Box className='border border-y-4  border-x-0  rounded-xl border-blue-900'>
                    <Text  className='text-bold text-4xl mt-6 text-extrabold font-serif drop-shadow-[5px_10px_4px_rgba(0,0,0,0.5)] text-center'>
                        Outcome FOR Participants
                    </Text>
                    <Box className='text-base font-inder text-left  md:text-xl'>
                        The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that 
                        are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering 
                        services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students 
                        a fantastic opportunity to better 
                        their financial situation while also giving the economy a much-needed boost by expanding software exports.
                    </Box>

                    <Box className='flex flex-col text-base font-inder space-y-4 my-4 text-left md:text-center md:text-xl'>
                        <Link href={'https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms'} prefetch={false} target={"_blank"}>
                            <Box className='font-bold text-blue-800 underline hover:underline-offset-4 hover:text-cyan-500'>
                                Top 5 "Metaverse" jobs that will rule the future of tech industry
                            </Box>   
                        </Link>

                        <Link href={'https://web3.career/web3-salaries/blockchain-developer'} prefetch={false} target={"_blank"}>
                            <Box className='font-bold text-blue-800 underline hover:underline-offset-4 hover:text-cyan-500'>
                                Blockchain Developer Salary - Jun 2022
                            </Box>   
                        </Link>

                        <Link href={'https://thedefiant.io/web3-soaring-salaries'} prefetch={false} target={"_blank"}>
                            <Box className='font-bold text-blue-800 underline hover:underline-offset-4 hover:text-cyan-500'>
                                Web3 Salaries Soar to $750,000 for Rank-and-File Devs
                            </Box>   
                        </Link>

                        <Link href={'https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022'} prefetch={false} target={"_blank"}>
                            <Box className='font-bold text-blue-800 underline hover:underline-offset-4 hover:text-cyan-500'>
                                The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters
                            </Box>   
                        </Link>

                        <Link href={'https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/'} prefetch={false} target={"_blank"}>
                            <Box className='font-bold text-blue-800 underline hover:underline-offset-4 hover:text-cyan-500'>
                                How To Become Metaverse Developer: Scope, Skills, and Salary
                            </Box>   
                        </Link>
                    </Box>
                </Box> 
        </Box>
    </>
    );
}