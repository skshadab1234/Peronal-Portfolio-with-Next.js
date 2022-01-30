import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Container } from "../layout/LayoutStyles"
import Head from 'next/head'

const whoisshadab = () => {
    return (
        <>
        <Head>
            <title>Who is Shadab ?</title>
        </Head>
      <Container>
        <Header/>
          
        <Footer/>
      </Container>

        </>
    )
}

export default whoisshadab;