import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'

import '../styles/footer.module.scss'

const Footer = (props) => {
  return (
    <Row>
      <Container fluid className="pt-4 border-top">
        <Container>
          <Row>
            <Col xs={12} md={8} xl={8}>
              <h2 className="my-4 text-capitalize">Prudential CDO</h2>
              <p>Contact us for any issues, we respond 1-2 business days.</p>
              <Button variant="white" className="btn-rounded-circle shadow-sm">
                <FeatherIcon icon="mail" size="1em" />
              </Button>
            </Col>
            <Col xs={12} md={4} xl={4}>
              <Row>
                <Col xs={12} md={6} xl={6}>
                  <p className="font-weight-light">USEFUL LINKS</p>
                  <p className="text-secondary">Data Onboarding</p>
                  <p className="text-secondary">Access Provisioning</p>
                  <p className="text-secondary">Docs</p>
                  <p className="text-secondary">Future Releases</p>
                </Col>
                <Col xs={12} md={6} xl={6}>
                  <p className="font-weight-light">OTHER RESOURCES</p>
                  <p className="text-secondary">Terms &amp; Conditions</p>
                  <p className="text-secondary">Privacy Policy</p>
                  <p className="text-secondary">Contact Us</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Row className="border-top mt-4">
          <Col>
            <p className="text-center mt-4">Copyright © 2022 Prudential CDO EDP</p>
          </Col>
        </Row>
      </Container>
    </Row>
  )
}

export default Footer
