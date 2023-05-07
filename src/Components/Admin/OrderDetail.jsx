import React from 'react'
import styled from 'styled-components'
import Adorder from './Adorder'
import Aditems from './Aditems'

const OrderDetail = () => {
  return (
        <Container>
        <Adorder />
        <Aditems />
        </Container>
  )
}

export default OrderDetail

const Container = styled.div`
  width: 95%;
`