import Link from "next/link";
import { Box,Text,Stack, Flex } from "@chakra-ui/react";

export default function Nav(){
    return(
      <Box as='section' zIndex={'4'}  bg='nav' borderBottomRightRadius={['xl','full','full']} borderBottomLeftRadius={['xl','none','none']} color={'white'} top={0} pos={['sticky','sticky','sticky']}  fontFamily={'inder'}  p='2' >
        <Flex    pl={[0,0,4]} px={[0,0,5]}>
          <Stack w='100%' fontSize={'16'}  spacing={[6]} direction={['column','row','row']} >
            <Box as="button" _hover={{color:'cyan.400'}} >
              <Link href={"/"} >
                  <Text  className="ml-1  inline-block">
                    Home
                  </Text>
              </Link>
            </Box>
            <Box as="button" _hover={{color:'cyan.400'}} >
              <Link href={"/syllabus"}>Syllabus</Link>
            </Box>
            <Box as="button" _hover={{color:'cyan.400'}} >
              <Link href={"/about"}>About</Link>
            </Box>
          </Stack>
        </Flex>
      </Box>
    );
}