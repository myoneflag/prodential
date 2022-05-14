import React from 'react'
import { useRouter } from 'next/router'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

import style from '../styles/card.module.scss'

const ChooseCard = (props) => {
  const router = useRouter()
  const { asPath } = router

  const handleChooseCard = () => {
    if (props.disabled) return
    router.push(`${asPath}/${props.name}`, undefined, { scroll: false, shallow: true })
  }

  return (
    <Card
      className={`${!props.disabled && style['choose-card']} main-card shadow-sm rounded ${props.active && 'border-primary'}`}
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
  disabled: false,
}

ChooseCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default ChooseCard
