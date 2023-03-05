"use client"
import Image from 'next/image'
import { Inter,Inder } from 'next/font/google'
import Link from 'next/link'
import { Box, Flex, Heading, Spacer, Text } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box className='md:mt-20 p-0 bg-white'>

      <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} >

        <Box className='flex flex-col md:flex-row text-center md:text-left  md:justify-between mb-10 md:mb-0 '>
          <Heading fontFamily={"inder"} className={`{} text-5xl  font-inder md:mt-5 md:ml-2 pt-4 md:pt-0`}>Join 
            <Box className='flex justify-center md:justify-start ' >
              <Image src={'/images/panaverese logo.png'} alt={'panaverse logo'} width={100} height={50}  />
            </Box> 
            From Today
          </Heading>
          <Box className='flex justify-center md: mt-10 md:mt-6 md:mb-40 md:mr-5 '>
            <Box as='button' className='font-inder font-bold py-4 px-20  bg-blue-900 text-cyan-500 rounded-md hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
            <Link href={"https://www.piaic.org/"} prefetch={false} target={"_blank"}>Apply Now</Link> 
            </Box>
          </Box>
        </Box>

        <Box className='flex flex-col text-center font-black  md:text-left'>  
          <Heading className='text-3xl font-inder'><Box className='text-yellow-500 text-6xl drop-shadow-[5px_20px_2px_rgba(0,0,0,0.25)]'>$</Box>Earn while you learn !</Heading>
          <Heading className='text-sm md:text-left md:pl-8'>The Program in a Nutshell:</Heading>
        </Box>
        <Text className='font-medium'>
           &emsp;&emsp;In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and 
           will begin doing so within six months of the program&apos;s beginning.
           It resembles a cross between a corporate venture and an educational project.
        </Text>

      </Box>

      <Box className='flex mx-2 flex-col text-center pb-10 px-5 '>
        
        <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} borderTop={'4px'} borderBottom={'4px'} borderColor={'nav'} className='bg-nav_color border border-y-4 mt-4 border-x-0 pt-4 rounded-xl border-blue-900'>
          <Heading  className='text-bold text-4xl text-extrabold font-serif drop-shadow-[5px_10px_4px_rgba(0,0,0,0.5)] '>
            Core Courses (Common in All Specializations)
          </Heading>
          <Text className='p-3'>
            Every participant of the program will start by completing the following three core courses
          </Text>

          <Box className='flex flex-col lg:flex-row lg:justify-between lg:px-24 px-4'>

            <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
              <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                Quater 1
              </Text>
              <Text className='w-56'>
                CS-101: Object-Oriented Programming using TypeScript
              </Text>
              <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                <Link href={"./syllabus#q1-c"}>View Details</Link> 
              </Box>
            </Box>

            <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
              <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                Quater 2
              </Text>
              <Text className='w-56'> 
                TypeScripW2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 
                and Cloud Development Kit (CDK) for Terraform
              </Text>
              <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                <Link href={"./syllabus#q2-c"}>View Details</Link> 
              </Box>
            </Box>

            <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
              <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                Quater 3
              </Text>
              <Text className='w-56'>
                $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
              </Text>
              <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                <Link href={"./syllabus#q3-c"}>View Details</Link> 
              </Box>
            </Box>

          </Box>
        </Box>

        <Box className='pt-4'>
          <Heading textAlign={'center'} className='text-bold text-4xl text-extrabold font-serif drop-shadow-[5px_10px_4px_rgba(0,0,0,0.5)] '>
            Specialized Tracks
          </Heading>
          <Text textAlign={'center'} p={'3'} mb={'4'} >
            After completing the first three quarters the participants will select one or more specializations consisting of two courses each:
          </Text>

          <Box display={['block','flex']}  className='lg:flex lg:flex-row lg:justify-between lg:space-x-4'>
            
            <Box m={'4'}  borderRadius={'2xl'} borderTop={'4px'} fontFamily={'inder'} borderBottom={'4px'} borderColor={'nav'} className='border border-y-4  border-x-0  rounded-xl border-blue-900'>
              <Heading textAlign={'center'} fontWeight={'medium'} fontFamily={'serif'} className='text-bold text-4xl text-extrabold font-serif drop-shadow-[5px_10px_4px_rgba(0,0,0,0.5)] '>
                Offered Courses
              </Heading>
              <Box  mr={['none','auto']} fontWeight={'bold'} fontSize={['xs','xs','xl','2xl']} textAlign={'left'} pb={'10'} px={'0'} className=' mt-4 rounded-xl h-auto pb-10 px-0'>
                  <Box bg={'teal.300'} py={'4'} px={'2'} w={'fit-content'} borderRightRadius={'3xl'} className=' bg-piaic_color mt-2 border md:text-left md:rounded-l-none md:p-4 md:text-2xl cursor-pointer text-lg font-inder font-bold hover:-translate-y-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-yellow-500 hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] delay-0 duration-300 md:w-fit pl-1 text-center  rounded-3xl'>
                    <Link href={"#web3"} target="_parent" >Web 3.0 (Blockchain)and Metaverse</Link>
                  </Box>
                  <Box bg={'teal.300'} p={'4'} w={'fit-content'} borderRightRadius={'3xl'} mt={'2'} className=' bg-piaic_color mt-2 border md:text-left md:rounded-l-none md:p-4 md:text-2xl cursor-pointer text-lg font-inder font-bold hover:-translate-y-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-yellow-500 hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] delay-0 duration-300 md:w-fit pl-1 text-center  rounded-3xl'>
                    <Link href={"#bio"} target="_parent" >Genomics and Bioinformatics</Link>
                  </Box>
                  <Box bg={'teal.300'} p={'4'} w={'fit-content'} borderRightRadius={'3xl'} mt={'2'} className=' bg-piaic_color mt-2 border md:text-left md:rounded-l-none md:p-4 md:text-2xl cursor-pointer text-lg font-inder font-bold hover:-translate-y-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-yellow-500 hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] delay-0 duration-300 md:w-fit pl-1 text-center  rounded-3xl'>
                    <Link href={"#ai"} target="_parent">Artificial Intelligence (AI) and Deep Learning</Link>
                  </Box>
                  <Box bg={'teal.300'} p={'4'} w={'fit-content'} borderRightRadius={'3xl'} mt={'2'} className=' bg-piaic_color mt-2 border md:text-left md:rounded-l-none md:p-4 md:text-2xl cursor-pointer text-lg font-inder font-bold hover:-translate-y-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-yellow-500 hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] delay-0 duration-300 md:w-fit pl-1 text-center  rounded-3xl'>
                    <Link href={"#cnc"} target="_parent" >Cloud-Native Computing</Link>
                  </Box>
                  <Box bg={'teal.300'} p={'4'} w={'fit-content'} borderRightRadius={'3xl'} mt={'2'} className=' bg-piaic_color mt-2 border md:text-left md:rounded-l-none md:p-4 md:text-2xl cursor-pointer text-lg font-inder font-bold hover:-translate-y-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-yellow-500 hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] delay-0 duration-300 md:w-fit pl-1 text-center  rounded-3xl'>
                    <Link href={"#iot"} target="_parent" >Ambient Computing and IoT</Link>
                  </Box>
                  <Box bg={'teal.300'} p={'4'} w={'fit-content'} borderRightRadius={'3xl'} mt={'2'} className=' bg-piaic_color mt-2 border md:text-left md:rounded-l-none md:p-4 md:text-2xl cursor-pointer text-lg font-inder font-bold hover:-translate-y-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-yellow-500 hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] delay-0 duration-300 md:w-fit pl-1 text-center  rounded-3xl'>
                    <Link href={"#net"} target="_parent" >Network Programmability and Automation</Link>
                  </Box>
              </Box>
            </Box><Spacer/>
            <Flex justifyContent={'right'}  mr={'4'} >
            <Box display={['none','none','flex']}  >
              <Image src={'/images/books.png'} alt={'books'} width={440} height={500}  />
            </Box>
            </Flex>
          </Box>
        </Box>

        <Box id='web3' className='mt-10 flex flex-col pt-3 items-center  bg-nav_color w-full rounded-xl'>
          <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} justifyContent={'center'} textAlign={'center'} className=' md:flex-row md:justify-center '>
            
            <Text  className='pl-4 pr-4 text-fuchsia-700 font-inder text-normal  pb-4 lg:text-2xl font-semibold'>
              Web 3.0 (Blockchain) and Metaverse Specialization
            </Text>
            
            <Box className='lg:flex lg:flex-row-reverse lg:justify-center w-fit lg:w-full '>
              <Box className='flex lg:mr-4 xl:mr-0 lg:py-16 lg:mb-4 xl:pt-0 xl:mb-0 xl:mt-4'>
                <Image src={'/images/web3.jpg'} alt={'metaverse image'} height={400} width={800}></Image>
              </Box>

              <Box className='flex flex-col mb-2  md:justify-center md:space-x-10'>
                <Text className='font-sans text-fuchsia-700 p-3 font-bold md:px-40 lg:px-3  text-xs md:w-fit lg:w-80 xl:w-96 lg:text-center md:text-left'>
                  This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and 
                  Metaverse experiences for the next generation 
                  of the internet by specializing in building worlds that merge the best of cutting-edge 
                  decentralized distributed blockchains with 3D metaverse client experiences.
                </Text>
                <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
                  <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                    Quater 4
                  </Text>
                  <Text className='w-56'>
                    W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
                  </Text>
                  <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                    <Link href={"./syllabus#c-web-4"}>View Details</Link> 
                  </Box>
                </Box>

                <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
                  <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                    Quater 5
                  </Text>
                  <Text className='w-56'>
                    MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
                  </Text>
                  <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                    <Link href={"./syllabus#c-web-5"}>View Details</Link> 
                  </Box>
                </Box>
              </Box>

            </Box>

          </Box>
          
        </Box>

        <Box id="ai" className='mt-10 flex flex-col pt-3 items-center  bg-nav_color w-full rounded-xl'>
          <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} justifyContent={'center'} textAlign={'center'} className=' md:flex-row md:justify-center '>
            
            <Text  className='pl-4 pr-4 text-indigo-700 font-inder text-normal  pb-4 lg:text-2xl font-semibold'>
              Artificial Intelligence (AI) and Deep Learning Specialization
            </Text>
            
            <Box className='lg:flex lg:flex-row-reverse lg:justify-center w-fit lg:w-full '>
              <Box className='flex lg:mr-4 xl:mr-0 lg:py-16 lg:mb-4 xl:pt-0 xl:mb-0 xl:mt-4'>
                <Image src={'/images/ai.jpg'} alt={'metaverse image'} height={400} width={800}></Image>
              </Box>

              <Box className='flex flex-col mb-2  md:justify-center md:space-x-10'>
                <Text className='font-sans text-indigo-700 p-3 font-bold md:px-40 lg:px-3  text-xs md:w-fit lg:w-80 xl:w-96 lg:text-center md:text-left'>
                  The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building 
                  custom Deep Learning Tensorflow models.
                </Text>
                <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
                  <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                    Quater 4
                  </Text>
                  <Text className='w-56'>
                    AI-361: Deep Learning and MLOps
                  </Text>
                  <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                    <Link href={"./syllabus#c-ai-4"}>View Details</Link> 
                  </Box>
                </Box>

                <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
                  <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                    Quater 5
                  </Text>
                  <Text className='w-56'>
                    AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
                  </Text>
                  <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                    <Link href={"./syllabus#c-ai-5"}>View Details</Link> 
                  </Box>
                </Box>
              </Box>

            </Box>

          </Box>
          
        </Box>

        <Box id="cnc" className='mt-10 flex flex-col pt-3 items-center  bg-nav_color w-full rounded-xl'>
          <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} justifyContent={'center'} textAlign={'center'} className=' md:flex-row md:justify-center '>
            
            <Text className='pl-4 pr-4 text-lime-700 font-inder text-normal  pb-4 lg:text-2xl font-semibold'>
              Cloud-Native Computing Specialization
            </Text>
            
            <Box className='lg:flex lg:flex-row-reverse lg:justify-center w-fit lg:w-full '>
              <Box className='flex lg:mr-4 xl:mr-0 lg:py-16 lg:mb-4 xl:pt-0 xl:mb-0 xl:mt-4'>
                <Image src={'/images/cnc.jpg'} alt={'metaverse image'} height={400} width={800}></Image>
              </Box>

              <Box className='flex flex-col mb-2  md:justify-center md:space-x-10'>
                <Text className='font-sans text-lime-700 p-3 font-bold md:px-40 lg:px-3  text-xs md:w-fit lg:w-80 xl:w-96 lg:text-center md:text-left'>
                  The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
                </Text>
                <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
                  <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                    Quater 4
                  </Text>
                  <Text className='w-56'>
                    CN-351: Certified Kubernetes Application Developer (CKAD)
                  </Text>
                  <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                    <Link href={"./syllabus#c-cnc-4"}>View Details</Link> 
                  </Box>
                </Box>

                <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
                  <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                    Quater 5
                  </Text>
                  <Text className='w-56'>
                    MV-361: Developing Planet-Scale Open Virtual and Augmented MCN-361:
                    Developing Multi-Cloud APIs using CDK for Terraform
                    etaverse Experiences
                  </Text>
                  <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                    <Link href={"./syllabus#c-cnc-5"}>View Details</Link> 
                  </Box>
                </Box>
              </Box>

            </Box>

          </Box>
          
        </Box>

        <Box id="iot" className='mt-10 flex flex-col pt-3 items-center  bg-nav_color w-full rounded-xl'>
          <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} justifyContent={'center'} textAlign={'center'} className=' md:flex-row md:justify-center '>
            
            <Text className='pl-4 pr-4 text-indigo-900 font-inder text-normal  pb-4 lg:text-2xl font-semibold'>
              Ambient Computing and IoT Specialization
            </Text>
            
            <Box className='lg:flex lg:flex-row-reverse lg:justify-center w-fit lg:w-full '>
              <Box className='flex lg:mr-4 xl:mr-0 lg:py-16 lg:mb-4 xl:pt-0 xl:mb-0 xl:mt-4'>
                <Image src={'/images/iot.jpg'} alt={'metaverse image'} height={400} width={800}></Image>
              </Box>

              <Box className='flex flex-col mb-2  md:justify-center md:space-x-10'>
                <Text className='font-sans text-indigo-900 p-3 font-bold md:px-40 lg:px-3  text-xs md:w-fit lg:w-80 xl:w-96 lg:text-center md:text-left'>
                  The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories,
                   and Cities using Voice computing, Matter Protocol, and Embedded Devices.
                </Text>
                <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
                  <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                    Quater 4
                  </Text>
                  <Text className='w-56'>
                    AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices.
                  </Text>
                  <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                    <Link href={"./syllabus#c-iot-4"}>View Details</Link> 
                  </Box>
                </Box>

                <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
                  <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                    Quater 5
                  </Text>
                  <Text className='w-56'>
                    AC-361: Embedded Programming using C and Rust
                  </Text>
                  <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                    <Link href={"./syllabus#c-iot-5"}>View Details</Link> 
                  </Box>
                </Box>
              </Box>

            </Box>

          </Box>
          
        </Box>

        <Box id="bio" className='mt-10 flex flex-col pt-3 items-center  bg-nav_color w-full rounded-xl'>
          <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} justifyContent={'center'} textAlign={'center'} className=' md:flex-row md:justify-center '>
            
            <Text className='pl-4 pr-4 text-yellow-700 font-inder text-normal  pb-4 lg:text-2xl font-semibold'>
              Genomics and Bioinformatics Specialization
            </Text>
            
            <Box className='lg:flex lg:flex-row-reverse lg:justify-center w-fit lg:w-full '>
              <Box className='flex lg:mr-4 xl:mr-0 lg:py-16 lg:mb-4 xl:pt-0 xl:mb-0 xl:mt-4'>
                <Image src={'/images/genomics.jpg'} alt={'metaverse image'} height={400} width={800}></Image>
              </Box>

              <Box className='flex flex-col mb-2  md:justify-center md:space-x-10'>
                <Text className='font-sans text-yellow-700 p-3 font-bold md:px-40 lg:px-3  text-xs md:w-fit lg:w-80 xl:w-96 lg:text-center md:text-left'>
                  Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved;
                  bioinformatics encompasses a diverse range of 
                  analytical methods and tools applied to genomic data. This Specialization focuses on performing
                  complex bioinformatics analysis using the most essential Python libraries and applications.
                </Text>
                <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
                  <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                    Quater 4
                  </Text>
                  <Text className='w-56'>
                    Bio-351: Python for Biologists.
                  </Text>
                  <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                    <Link href={"./syllabus#c-bio-4"}>View Details</Link> 
                  </Box>
                </Box>

                <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
                  <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                    Quater 5
                  </Text>
                  <Text className='w-56'>
                    Bio-361: Bioinformatics with Python
                  </Text>
                  <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                    <Link href={"./syllabus#c-bio-5"}>View Details</Link> 
                  </Box>
                </Box>
              </Box>

            </Box>

          </Box>
          
        </Box>

        <Box id="net" className='mt-10 flex flex-col pt-3 items-center  bg-nav_color w-full rounded-xl'>
          <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} justifyContent={'center'} textAlign={'center'} className=' md:flex-row md:justify-center '>
            
            <Text className='pl-4 pr-4 text-rose-700 font-inder text-normal  pb-4 lg:text-2xl font-semibold'>
              Network Programmability and Automation Specialization
            </Text>
            
            <Box className='lg:flex lg:flex-row-reverse lg:justify-center w-fit lg:w-full '>
              <Box className='flex lg:mr-4 xl:mr-0 lg:py-16 lg:mb-4 xl:pt-0 xl:mb-0 xl:mt-4'>
                <Image src={'/images/network.jpg'} alt={'metaverse image'} height={400} width={800}></Image>
              </Box>

              <Box className='flex flex-col mb-2  md:justify-center md:space-x-10'>
                <Text className='font-sans text-rose-700 p-3 font-bold md:px-40 lg:px-3  text-xs md:w-fit lg:w-80 xl:w-96 lg:text-center md:text-left'>
                  More than ever, network engineers are finding it challenging to complete their duties entirely manually. 
                  Network automation is now crucial due to new protocols, technologies, delivery models, 
                  and the requirement for enterprises to become more adaptable and agile. 
                  This course teaches network engineers how to automate systems with code using a variety of technologies 
                  and tools, including Linux, Python, APIs, and Git.
                </Text>
                <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
                  <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                    Quater 4
                  </Text>
                  <Text className='w-56'>
                    NPA-351: CCNA 200-301 Certification.
                  </Text>
                  <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                    <Link href={"./syllabus#c-net-4"}>View Details</Link> 
                  </Box>
                </Box>

                <Box className='flex flex-col space-y-4 pb-2 px-1 items-center my-4'>
                  <Text className='font-inder font-bold text-blue-900 bg-quater_color drop-shadow-2xl w-fit p-2 rounded-xl'>
                    Quater 5
                  </Text>
                  <Text className='w-56'>
                    NPA-361: Network Programmability and Automation
                  </Text>
                  <Box as='button' className='font-inder font-bold py-2 px-10  bg-blue-900 text-cyan-500 rounded-xl hover:drop-shadow-[10px_20px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-500 hover:text-blue-900'>
                    <Link href={"./syllabus#c-net-5"}>View Details</Link> 
                  </Box>
                </Box>
              </Box>

            </Box>

          </Box>
          
        </Box>

      </Box>

    </Box>
  )
}
