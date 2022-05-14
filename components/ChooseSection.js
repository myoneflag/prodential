import React from 'react'
import { useRouter } from 'next/router'
import { Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import ChooseCard from './ChooseCard'

const ChooseSection = (props) => {
  const router = useRouter()
  const { sid1, sid2, sid3, sid4 } = router.query

  const isActive = (index, name) => {
    switch (index) {
      case 0:
        return name === sid1
      case 1:
        return name === sid2
      case 2:
        return name === sid3
      case 3:
        return name === sid4
    
      default:
        return false;
    }
  }

  const isDisabled = (index) => {
    return index < props.data.length - 1
  }

  return props.data.map((e, index) => (
    <Row className="justify-content-center mt-5" key={index}>
      <Col xs={12}>
        <h4 className="text-muted mb-4">
          Choose your {e?.title.toLowerCase()}:
        </h4>
      </Col>
      <Col xs={12}>
        <Row className="justify-content-center">
          {e?.items.map((item, j) => (
            <Col key={j}>
              <ChooseCard active={isActive(index, item.name)} disabled={isDisabled(index)} {...item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  ))
}

ChooseSection.defaultProps = {
  data: [],
}

ChooseSection.propTypes = {
  data: PropTypes.array,
}

export default ChooseSection
