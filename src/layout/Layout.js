import React from 'react'
import Head from 'next/head';;
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
