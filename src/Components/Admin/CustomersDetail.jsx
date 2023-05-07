import React from 'react'
import styled from 'styled-components'
import Adcustomer from "./Adcustomer"
import Adorderhistory from "./Adorderhistory"

const CustomersDetail = () => {
  return (
    <div>
        <Container>
        <Adcustomer />
        <Adorderhistory />
        </Container>
    </div>
  )
}

export default CustomersDetail

const Container = styled.div``