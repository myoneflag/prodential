import React from 'react'
import Link from 'next/link'
import { Col, Container, Row, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import style from '../styles/header.module.scss'

const Header = (props) => {
  return (
    <Row>
      <Container fluid className={style.header}>
        <Container>
          <Row className="align-items-center py-5">
            <Col>
              <Link href="/">
                <img src="/logo.png" width="auto" height="auto" alt="logo" className={style.logo} />
              </Link>
            </Col>
            <Col xs="auto">
              <Link href="/login">
                <Button variant="primary">Login</Button>
              </Link>
            </Col>
          </Row>
          <Row className="p-5 mt-5 justify-content-center">
            <Col xs={12} lg={6}>
              <h2 className="text-white text-center font-weight-bold mb-3">{props.title}</h2>
              <p className="text-white text-center font-weight-light mb-5">{props.description}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Row>
  )
}

Header.defaultProps = {
  title: '',
  description: '',
}

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Header
