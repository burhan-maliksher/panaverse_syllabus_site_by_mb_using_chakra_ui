"use client"

import Nav from '@/app/components/nav';
import Sidebar from '../../components/sidebar';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

// custom colors for chakra
const colors={
  nav:"#1e3a8a"
}
const fonts={
  inder:"Inder"
} 
// customizing default theme
const theme= extendTheme({colors,fonts})


 const metadata = {
  title: 'Panaverse Syllabus Site by MB',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body>
        <ChakraProvider theme={theme}>
        <Nav/>        
          <Sidebar/>
        {children}
        </ChakraProvider>
      </body>
    </html>
  )
}

