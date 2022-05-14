import React from 'react'
import { useRouter } from 'next/router'
import { Card } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'
import PropTypes from 'prop-types'

import style from '../styles/card.module.scss'

const SelectCard = (props) => {
  const router = useRouter();
  const { asPath, locale } = router;

  const handleChooseCard = () => {
    router.push(`${asPath.slice(1)}/${props.name}`, null, { locale, scroll: false })
  }

  return (
    <Card className={`${style['choose-card']} main-card shadow-sm rounded`} onClick={handleChooseCard}>
      <Card.Body className="text-center p-3">
        {props.icon ? <span className={style['choose-card-icon']}>
          <FeatherIcon icon={props.icon} fill="white" size="1em" />
        </span> : <h1>{props.id}</h1>}
        <h4 className="my-4">{props.name}</h4>
        <p className="mb-2 text-muted">{props.description}</p>
      </Card.Body>
    </Card>
  )
}

SelectCard.defaultProps = {
  id: '1',
  icon: '',
  name: '',
  description: '',
}

SelectCard.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
}

export default SelectCard
