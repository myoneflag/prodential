import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'
import PropTypes from 'prop-types'

import style from '../styles/card.module.scss'

const ChooseCard = (props) => {
  const router = useRouter()
  const { asPath, locale } = router

  const handleChooseCard = () => {
    router.push(`${asPath}/${props.name}`, null, { locale, scroll: false })
  }

  return (
    <Card
      className={`${style['choose-card']} main-card shadow-sm rounded ${props.active && 'border-primary'}`}
      onClick={handleChooseCard}
    >
      <Card.Body className="text-center p-3">
        <h4 className="my-4">{props.name}</h4>
      </Card.Body>
    </Card>
  )
}

ChooseCard.defaultProps = {
  id: 1,
  name: '',
  active: false,
}

ChooseCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  active: PropTypes.bool,
}

export default ChooseCard
