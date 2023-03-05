"use client"
import Image from 'next/image'
import { Inter,Inder } from 'next/font/google'
import Link from 'next/link'
import { Box, Flex, Heading, Spacer, Text } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box >

      <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} >

        <Box  display={['block','flex']} textAlign={['center','left']} fontFamily={'inder'} >
          <Heading w={['auto','80%']} fontFamily={"inder"} >Join 
            <Box display={'flex'} justifyContent={['center','left']} justifyItems={'start'}   >
              <Image src={'/images/panaverese logo.png'} alt={'panaverse logo'} width={100} height={50}  />
            </Box> 
            From Today
          </Heading>
          <Box >
            <Box as='button' w={'40'} bg={'nav'} p={'2'} px={'8'} mr={['','none']} borderRadius={'xl'}  color={'cyan.300'} >
            <Link href={"https://www.piaic.org/"} prefetch={false} target={"_blank"}>Apply Now</Link> 
            </Box>
          </Box>
        </Box>

        <Box >  
          <Heading display={'flex'} mt={'4'} >
            <Text color={'yellow.500'}  >
              $
            </Text>
            <Text>
              Earn while you learn !
            </Text>
          </Heading>
          <Text ml={'6'} fontWeight={'bold'} >The Program in a Nutshell:</Text>
        </Box>
        <Text ml={'6'} >
           &emsp;&emsp;In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and 
           will begin doing so within six months of the program&apos;s beginning.
           It resembles a cross between a corporate venture and an educational project.
        </Text>

      </Box>

      <Box textAlign={'center'} fontFamily={'inder'} >
        
        <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} borderTop={'4px'} borderBottom={'4px'} borderColor={'nav'} className='bg-nav_color border border-y-4 mt-4 border-x-0 pt-4 rounded-xl border-blue-900'>
          <Heading fontFamily={'serif'} >
            Core Courses (Common in All Specializations)
          </Heading>
          <Text p={'2'} >
            Every participant of the program will start by completing the following three core courses
          </Text>

          <Box display={['block','flex']}  justifyContent={'space-around'} >

            <Box  display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'} >
              <Text  justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20" >
                Quater 1
              </Text>
              <Text  py={'2'} w={'40'}>
                CS-101: Object-Oriented Programming using TypeScript
              </Text>
              <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40" >
                <Link href={"./syllabus#q1-c"}>View Details</Link> 
              </Box>
            </Box>

            <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'}>
              <Text  justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                Quater 2
              </Text>
              <Text py={'2'} w={'40'}> 
                TypeScripW2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 
                and Cloud Development Kit (CDK) for Terraform
              </Text>
              <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
                <Link href={"./syllabus#q2-c"}>View Details</Link> 
              </Box>
            </Box>

            <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'}>
              <Text justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                Quater 3
              </Text>
              <Text py={'2'} w={'40'}>
                $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
              </Text>
              <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
                <Link href={"./syllabus#q3-c"}>View Details</Link> 
              </Box>
            </Box>

          </Box>
        </Box>

        <Box className='pt-4'>
          <Heading textAlign={'center'}>
            Specialized Tracks
          </Heading>
          <Text textAlign={'center'} p={'3'} mb={'4'} >
            After completing the first three quarters the participants will select one or more specializations consisting of two courses each:
          </Text>

          <Box display={['block','flex']}  >
            
            <Box m={'4'}  borderRadius={'2xl'} borderTop={'4px'} fontFamily={'inder'} borderBottom={'4px'} borderColor={'nav'} >
              <Heading textAlign={'center'} fontWeight={'medium'} fontFamily={'serif'} >
                Offered Courses
              </Heading>
              <Box  mr={['none','auto']} fontWeight={'bold'} fontSize={['xs','xs','xl','2xl']} textAlign={'left'} pb={'10'} px={'0'} >
                  <Box  _hover={{bg:"nav",color:"teal.300"}} bg={'teal.300'} py={'4'} px={'2'} w={'fit-content'} borderRightRadius={'3xl'} >
                    <Link href={"#web3"} target="_parent" >Web 3.0 (Blockchain)and Metaverse</Link>
                  </Box>
                  <Box _hover={{bg:"nav",color:"teal.300"}} bg={'teal.300'} p={'4'} w={'fit-content'} borderRightRadius={'3xl'} mt={'2'} >
                    <Link href={"#bio"} target="_parent" >Genomics and Bioinformatics</Link>
                  </Box>
                  <Box _hover={{bg:"nav",color:"teal.300"}} bg={'teal.300'} p={'4'} w={'fit-content'} borderRightRadius={'3xl'} mt={'2'} >
                    <Link href={"#ai"} target="_parent">Artificial Intelligence (AI) and Deep Learning</Link>
                  </Box>
                  <Box _hover={{bg:"nav",color:"teal.300"}} bg={'teal.300'} p={'4'} w={'fit-content'} borderRightRadius={'3xl'} mt={'2'} >
                    <Link href={"#cnc"} target="_parent" >Cloud-Native Computing</Link>
                  </Box>
                  <Box _hover={{bg:"nav",color:"teal.300"}} bg={'teal.300'} p={'4'} w={'fit-content'} borderRightRadius={'3xl'} mt={'2'} >
                    <Link href={"#iot"} target="_parent" >Ambient Computing and IoT</Link>
                  </Box>
                  <Box _hover={{bg:"nav",color:"teal.300"}} bg={'teal.300'} p={'4'} w={'fit-content'} borderRightRadius={'3xl'} mt={'2'} >
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

        <Box id='web3' >
          <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} justifyContent={'center'} textAlign={'center'} >
            
            <Text fontFamily={'sans-serif'} fontWeight={'700'} color={'pink.700'} fontSize={['xs','xl','4xl']} m={['2','4']} >
              Web 3.0 (Blockchain) and Metaverse Specialization
            </Text>
            
            <Box  >
              <Box display={'flex'}  justifyContent={'center'} >
                <Image src={'/images/web3.jpg'} alt={'metaverse image'} height={400} width={800}></Image>
              </Box>

              <Box >
                <Text w={['50','2xl']}  m="auto" fontWeight={'bold'}>
                  This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and 
                  Metaverse experiences for the next generation 
                  of the internet by specializing in building worlds that merge the best of cutting-edge 
                  decentralized distributed blockchains with 3D metaverse client experiences.
                </Text>
                <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'} >
                  <Text justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                    Quater 4
                  </Text>
                  <Text py={'2'} w={'40'}>
                    W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
                  </Text>
                  <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
                    <Link href={"./syllabus#c-web-4"}>View Details</Link> 
                  </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'} >
                  <Text justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                    Quater 5
                  </Text>
                  <Text py={'2'} w={'40'}>
                    MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
                  </Text>
                  <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
                    <Link href={"./syllabus#c-web-5"}>View Details</Link> 
                  </Box>
                </Box>
              </Box>

            </Box>

          </Box>
          
        </Box>

        <Box id="ai" >
          <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} justifyContent={'center'} textAlign={'center'} >
            
            <Text  fontFamily={'sans-serif'} fontWeight={'700'} color={'facebook.700'} fontSize={['xs','xl','4xl']} m={['2','4']}>
              Artificial Intelligence (AI) and Deep Learning Specialization
            </Text>
            
            <Box >
              <Box display={'flex'}  justifyContent={'center'} >
                <Image src={'/images/ai.jpg'} alt={'metaverse image'} height={400} width={800}></Image>
              </Box>

              <Box >
                <Text w={['50','2xl']}  m="auto" fontWeight={'bold'} >
                  The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building 
                  custom Deep Learning Tensorflow models.
                </Text>
                <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'} >
                  <Text justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                    Quater 4
                  </Text>
                  <Text py={'2'} w={'40'}>
                    AI-361: Deep Learning and MLOps
                  </Text>
                  <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
                    <Link href={"./syllabus#c-ai-4"}>View Details</Link> 
                  </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'} >
                  <Text justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                    Quater 5
                  </Text>
                  <Text py={'2'} w={'40'}>
                    AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
                  </Text>
                  <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
                    <Link href={"./syllabus#c-ai-5"}>View Details</Link> 
                  </Box>
                </Box>
              </Box>

            </Box>

          </Box>
          
        </Box>

        <Box id="cnc" >
          <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} justifyContent={'center'} textAlign={'center'} >
            
            <Text fontFamily={'sans-serif'} fontWeight={'700'} color={'green.700'} fontSize={['xs','xl','4xl']} m={['2','4']}>
              Cloud-Native Computing Specialization
            </Text>
            
            <Box >
              <Box display={'flex'}  justifyContent={'center'} >
                <Image src={'/images/cnc.jpg'} alt={'metaverse image'} height={400} width={800}></Image>
              </Box>

              <Box >
                <Text w={['50','2xl']}  m="auto" fontWeight={'bold'} >
                  The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
                </Text>
                <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'} >
                  <Text justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                    Quater 4
                  </Text>
                  <Text py={'2'} w={'40'}>
                    CN-351: Certified Kubernetes Application Developer (CKAD)
                  </Text>
                  <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
                    <Link href={"./syllabus#c-cnc-4"}>View Details</Link> 
                  </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'} >
                  <Text justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                    Quater 5
                  </Text>
                  <Text py={'2'} w={'40'}>
                    MV-361: Developing Planet-Scale Open Virtual and Augmented MCN-361:
                    Developing Multi-Cloud APIs using CDK for Terraform
                    etaverse Experiences
                  </Text>
                  <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
                    <Link href={"./syllabus#c-cnc-5"}>View Details</Link> 
                  </Box>
                </Box>
              </Box>

            </Box>

          </Box>
          
        </Box>

        <Box id="iot" >
          <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} justifyContent={'center'} textAlign={'center'} >
            
            <Text fontFamily={'sans-serif'} fontWeight={'700'} color={'yellow.700'} fontSize={['xs','xl','4xl']} m={['2','4']}>
              Ambient Computing and IoT Specialization
            </Text>
            
            <Box >
              <Box display={'flex'}  justifyContent={'center'} >
                <Image src={'/images/iot.jpg'} alt={'metaverse image'} height={400} width={800}></Image>
              </Box>

              <Box >
                <Text w={['50','2xl']}  m="auto" fontWeight={'bold'} >
                  The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories,
                   and Cities using Voice computing, Matter Protocol, and Embedded Devices.
                </Text>
                <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'} >
                  <Text justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                    Quater 4
                  </Text>
                  <Text py={'2'} w={'40'}>
                    AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices.
                  </Text>
                  <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
                    <Link href={"./syllabus#c-iot-4"}>View Details</Link> 
                  </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'} >
                  <Text justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                    Quater 5
                  </Text>
                  <Text py={'2'} w={'40'}>
                    AC-361: Embedded Programming using C and Rust
                  </Text>
                  <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
                    <Link href={"./syllabus#c-iot-5"}>View Details</Link> 
                  </Box>
                </Box>
              </Box>

            </Box>

          </Box>
          
        </Box>

        <Box id="bio" >
          <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} justifyContent={'center'} textAlign={'center'} >
            
            <Text fontFamily={'sans-serif'} fontWeight={'700'} color={'orange.700'} fontSize={['xs','xl','4xl']} m={['2','4']}>
              Genomics and Bioinformatics Specialization
            </Text>
            
            <Box >
              <Box display={'flex'}  justifyContent={'center'} >
                <Image src={'/images/genomics.jpg'} alt={'metaverse image'} height={400} width={800}></Image>
              </Box>

              <Box >
                <Text w={['50','2xl']}  m="auto" fontWeight={'bold'} >
                  Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved;
                  bioinformatics encompasses a diverse range of 
                  analytical methods and tools applied to genomic data. This Specialization focuses on performing
                  complex bioinformatics analysis using the most essential Python libraries and applications.
                </Text>
                <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'} >
                  <Text justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                    Quater 4
                  </Text>
                  <Text py={'2'} w={'40'}>
                    Bio-351: Python for Biologists.
                  </Text>
                  <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
                    <Link href={"./syllabus#c-bio-4"}>View Details</Link> 
                  </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'} >
                  <Text justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                    Quater 5
                  </Text>
                  <Text py={'2'} w={'40'}>
                    Bio-361: Bioinformatics with Python
                  </Text>
                  <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
                    <Link href={"./syllabus#c-bio-5"}>View Details</Link> 
                  </Box>
                </Box>
              </Box>

            </Box>

          </Box>
          
        </Box>

        <Box id="net" >
          <Box bg={'cyancust'} m={'4'} borderRadius={'2xl'} p={'8'} justifyContent={'center'} textAlign={'center'} >
            
            <Text fontFamily={'sans-serif'} fontWeight={'700'} color={'red.700'} fontSize={['xs','xl','4xl']} m={['2','4']}>
              Network Programmability and Automation Specialization
            </Text>
            
            <Box >
              <Box display={'flex'}  justifyContent={'center'} >
                <Image src={'/images/network.jpg'} alt={'metaverse image'} height={400} width={800}></Image>
              </Box>

              <Box >
                <Text w={['50','2xl']}  m="auto" fontWeight={'bold'} >
                  More than ever, network engineers are finding it challenging to complete their duties entirely manually. 
                  Network automation is now crucial due to new protocols, technologies, delivery models, 
                  and the requirement for enterprises to become more adaptable and agile. 
                  This course teaches network engineers how to automate systems with code using a variety of technologies 
                  and tools, including Linux, Python, APIs, and Git.
                </Text>
                <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'} >
                  <Text justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                    Quater 4
                  </Text>
                  <Text py={'2'} w={'40'}>
                    NPA-351: CCNA 200-301 Certification.
                  </Text>
                  <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
                    <Link href={"./syllabus#c-net-4"}>View Details</Link> 
                  </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'}    alignItems={'center'} mb={'4'} >
                  <Text justifyItems={'center'} fontWeight={'700'} color={'nav'} bg={'cyancust'} borderRadius={'xl'} m={'4'} w="20">
                    Quater 5
                  </Text>
                  <Text py={'2'} w={'40'}>
                    NPA-361: Network Programmability and Automation
                  </Text>
                  <Box as='button' fontWeight={'700'} color={'blue.900'} bg={'cyancust'} _hover={{bg:"nav",color:"cyan.500"}} borderRadius={'xl'} p={'2'} w="40">
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
