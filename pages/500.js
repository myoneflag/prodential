import Link from 'next/link'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Head from 'next/head'
import FeatherIcon from 'feather-icons-react'

export default function Error500() {
  return (
    <div className="d-flex align-items-center min-vh-100 bg-auth border-top border-top-2 border-primary">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta charSet="utf-8" />
        <title>500 | Notus Pro</title>
      </Head>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5} xl={4} className="my-5">
            <div className="text-center">
              <FeatherIcon icon="alert-circle" size="3rem" />
              <h2 className="my-4 text-capitalize">500 - Server-side error occurred</h2>
              <Link href="/">
                <Button size="lg" className="lift" variant="outline-primary">
                  Return to Home
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
