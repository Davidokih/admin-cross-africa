import React,{useState} from 'react'
import styled  from 'styled-components'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllProduct } from '../../Api/ProductApi'
import moment from 'moment'
import "../../../App.css"
import OrderPage from './OrderPage'
import { NavLink } from 'react-router-dom';

const AllOrders = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const queryCLient = useQueryClient()
  

  const userID = user?._id
  const {data} = useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct
  })
  
  const [ currentPage, setCurrentPage ] = useState(0)
  const recordPage = 6
  const lastIndex = currentPage * recordPage
  const pageCount = Math.ceil(data?.length / recordPage)
  const currentPageData = data?.slice(lastIndex, lastIndex + recordPage)
  const changeCPage = ({selected}) => {
    setCurrentPage(selected)
  }
  // console.log(data)

  const [ query, setQuery ] = useState("")
  const keys = ["order_No", "delivery_status"]

//   const search = (data) => {
//       return data?.filter((item) =>
//           keys.some((key)=> item[key]?.toLowerCase().includes(query))
//       )
//   }
//   const searchData = search(currentPageData)

  var nf = Intl.NumberFormat()
  return (
      <Container>
        <Header>
            <Text>Pending Items Upload</Text>
            <NavLink to="/admin-dashboard/products" style={{textDecoration: "none", color: "black"}}><Text>See All</Text></NavLink>
          </Header>
      <Wrapper>
      
      <Buttom>
        
          <Head>
            <Th>
              <HoldHead>Order Number </HoldHead>
            </Th>
            <Th>
              <HoldHead>Country</HoldHead>
            </Th>
            <Th>
              <HoldHead>Customer</HoldHead>
            </Th>
            <Th>
              <HoldHead>Status</HoldHead>
            </Th>
            <Th>
              <HoldHead>Category </HoldHead>
            </Th>
            <Th>
              <HoldHead>Date </HoldHead>
            </Th>
            <Th>
              <HoldHead>Price </HoldHead>
            </Th>
        </Head>
        {
            currentPageData?.map((props,index) => (
              <OrderPage index={ index } id={props._id} isSeller={props?.user?.isSeller} status={ props.status } tag_No={ props.tag_No } created={ moment(props.createdAt).format("D MMM YYYY") } price={ nf.format(props.price)} category={props.category} firstName={props?.user?.firstName} lastName={props?.user?.lastName} country={props?.user?.shippingFrom}/>
            ))
      }
        </Buttom>
      </Wrapper>
    </Container>
  )
}

export default AllOrders

const Wrapper = styled.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px 0px;
`
const Header = styled.div`
width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
const Text = styled.div`
  /* border-bottom: 2px solid blue; */
`;
// const Wrapper = styled.div``
const HoldHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`;
const Th = styled.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`;
const Head = styled.tr`
  border-bottom: 1px solid lightgray;
  border-right:1px solid lightgray;
  height: 70px;
`;
const Buttom = styled.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`;
