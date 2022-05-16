import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Col, Container, Row, Button, Form, Card } from 'react-bootstrap'

export default function Section() {
  const router = useRouter()
  const { fid, did, sid1, sid2, sid3, sid4 } = router.query

  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')
  const [cost, setCost] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const hanldeSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("fullname", fullname);
      formData.append("cost", cost);
      formData.append("message", message);
      formData.append("fid", fid);
      formData.append("did", did);
      formData.append("sid1", sid1);
      formData.append("sid2", sid2);
      formData.append("sid3", sid3);
      formData.append("sid4", sid4);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ROOT}/api/features/submit`,
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      setLoading(false)

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('response =>', data)
      for (let [key, value] of formData.entries()) { 
        console.log(key, "=>", value);
      }
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <Container fluid className="main-container">
      <Head>
        <title>{did} | Notus Pro</title>
        <meta name="description" content={`${did} | Notus Pro`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="main-content py-5">
        <Row className="justify-content-center">
          <Col lg={6} xs={12}>
            <h4 className="font-weight-bold my-5 text-info text-center text-uppercase">
              {fid}
            </h4>
            <Card className="bg-light p-4">
              <Card.Body>
                <h3>Want to push your Data to the Cloud?</h3>
                <Form onSubmit={hanldeSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>FULL NAME</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" required onChange={(e) => setFullname(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="john.doe@abcd.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>COST CENTER</Form.Label>
                    <Form.Control type="text" placeholder="Cost Center" required onChange={(e) => setCost(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>MESSAGE</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Type a message" required onChange={(e) => setMessage(e.target.value)} />
                  </Form.Group>
                  <div className="text-center pt-2">
                    <Button variant="secondary" type="submit" className="text-uppercase" disabled={loading}>
                      Push my Data to the Cloud
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
