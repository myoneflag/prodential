import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import Header from '../../../../../components/Header'
import Footer from '../../../../../components/Footer'
import ChooseSection from '../../../../../components/ChooseSection'

export default function Section() {
  const router = useRouter()
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const { fid, did, sid1, sid2 } = router.query

  const getDataSources = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ROOT}/api/${did}/${sid1}/${sid2}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    setLoaded(true)

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const res = await response.json()
    setData(res.data)
  }

  useEffect(() => {
    getDataSources()
  }, [])

  return (
    <Container fluid className="main-container">
      <Head>
        <title>{did} | Notus Pro</title>
        <meta name="description" content={`${did} | Notus Pro`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title={fid} />
      <Container className="main-content py-5">
        <Row className="justify-content-center">
          {loaded ? (
            <Col lg={10} xs={12}>
              <Row className="justify-content-center mb-4">
                <Col className="text-center">
                  <h4 className="text-primary">{fid}</h4>
                  <h1 className="">
                    Data Source: {did}
                  </h1>
                </Col>
              </Row>
              <ChooseSection data={data} />
            </Col>
          ) : (
            <Spinner />
          )}
        </Row>
      </Container>
      <Footer />
    </Container>
  )
}
