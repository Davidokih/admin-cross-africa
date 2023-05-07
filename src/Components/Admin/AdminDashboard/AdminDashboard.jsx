import React from 'react'
import styled from 'styled-components'
import AllOrders from './AllOrders'
import NewSellers from './NewSellers'
import PendingUploads from './PendingUploads'

const AdminDashboard = () => {
  return (
    <Container>
        <Wrapper>
            <Card>
                <Head><span>
                Total Sales
                    </span>
                    <span>:</span>
                    </Head>
                <Content>
                    <Amount>5000</Amount>
                    <Percent>50%</Percent>
                </Content>
            </Card>
            <Card>
                <Head><span>
                Total No. of Marchants
                    </span>
                    <span>:</span>
                    </Head>
                <Content>
                    <Amount>5000</Amount>
                    <Percent>50%</Percent>
                </Content>
            </Card>
            <Card>
                <Head><span>
                Completed Orders
                    </span>
                    <span>:</span>
                    </Head>
                <Content>
                    <Amount>5000</Amount>
                    <Percent>50%</Percent>
                </Content>
            </Card>
            <Card>
                <Head><span>
                Total No. of Returns
                    </span>
                    <span>:</span>
                    </Head>
                <Content>
                    <Amount>5000</Amount>
                    <Percent>50%</Percent>
                </Content>
            </Card>
            <Card>
                <Head><span>
                Total Sales
                    </span>
                    <span>:</span>
                    </Head>
                <Content>
                    <Amount>5000</Amount>
                    <Percent>50%</Percent>
                </Content>
            </Card>
            <Card>
                <Head><span>
                Total No. of Cancled
                    </span>
                    <span>:</span>
                    </Head>
                <Content>
                    <Amount>5000</Amount>
                    <Percent>50%</Percent>
                </Content>
            </Card>
        </Wrapper>
        <AllOrders />
        <NewSellers />
        <PendingUploads />
    </Container>
  )
}

export default AdminDashboard

const Percent = styled.div`
    font-weight: 500;
    font-size: 14px;
`
const Amount = styled.div`
    font-weight: 700;
    font-size: 20px;
`
const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Head = styled.div`
    background-color: gold;
    width: 230px;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    justify-content: space-between;

    span{
        font-weight: 600;
    }
`
const Card = styled.div`
    width: 250px;
    height: 200px;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin: 10px;
`
const Wrapper = styled.div`
    width: 95%;
    margin-top: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const Container = styled.div`
    width: 100%;
    /* height: 100vh; */
    /* background-color: gold; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`