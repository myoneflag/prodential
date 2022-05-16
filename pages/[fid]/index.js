import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SelectCard from '../../components/SelectCard'

export default function DataSource() {
  const router = useRouter();
  const [dataSources, setDataSources] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { fid } = router.query;

  const getDataSources = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/features/data-sources`, {
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
    setDataSources(res.data)
  }

  useEffect(() => {
    getDataSources();
    // eslint-disable-next-line
  }, []);

  return (
    <Container fluid className="main-container">
      <Head>
        <title>{fid} | Notus Pro</title>
        <meta name="description" content={`${fid} | Notus Pro`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title={fid} />
      <Container className="main-content py-5">
        <Row className="justify-content-center">
          {loaded ? <Col lg={10} xs={12}>
            <Row className="justify-content-center mb-5">
              <Col className="text-center">
                <h4 className="text-primary">{fid}</h4>
                <h1 className="">Let's push your data to the cloud without any hassle</h1>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12}>
                <h4 className="text-muted text-center mb-4">Choose your Data Source:</h4>
              </Col>
              {dataSources?.map((feature, index) => <Col xs={12} lg={4} key={index}>
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
