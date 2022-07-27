import  { useEffect, useState } from 'react';

import { useRouter } from 'next/router'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container } from "../../layout/LayoutStyles"
import Head from 'next/head'
import database from "../../constants/firebase";

const prj = () => {
    const [projects, setProject] = useState([]);

    const prjroutes = useRouter();
    const prjdata = prjroutes.query.prj;

    useEffect(() => {
            database.collection("projects").where("slug", "==", "prjdata").get().then((snapshot) => {
                console.log(snapshot.docs.map(doc => doc.data()))
            })
    }, [])

    console.log(projects);
    return (

        <>
            <Head>
                <title>{prjdata}</title>
            </Head>
            <Container>
                <Header />
                <Footer />
            </Container>
        </>
    )
}

export default prj