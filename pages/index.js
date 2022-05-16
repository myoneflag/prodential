import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SelectCard from '../components/SelectCard'

export default function Home() {
  const router = useRouter();
  const [features, setFeatures] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getFeatures = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/features`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    setLoaded(true)

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const res = await response.json();
    setFeatures(res.data)
  }

  useEffect(() => {
    getFeatures();
    // eslint-disable-next-line
  }, []);

  return (
    <Container fluid className="main-container">
      <Head>
        <title>Notus Pro</title>
        <meta name="description" content="Home | Notus Pro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Let's Start by Onboarding your Data" description="This is a simple example of Data Onboarding in the Platform. The upcoming releases will include Access Provisioning, Search, Approval Workflow and many other exciting features." />
      <Container className="main-content py-5">
        <Row className="justify-content-center">
          {loaded ? <Col lg={10} xs={12}>
            <Row className="justify-content-center mb-5">
              <Col className="text-center">
                <h4 className="text-warning">FEATURES</h4>
                <h1 className="">What can you do on our platform?</h1>
              </Col>
            </Row>
            <Row className="justify-content-center">
              {features?.map((feature, index) => <Col xs={12} lg={3} key={index}>
                <SelectCard {...feature}/>
              </Col>)}
            </Row>
          </Col> : <Spinner />}
        </Row>
      </Container>
      <Footer />
    </Container>
  )
}
