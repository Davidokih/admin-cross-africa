import React,{useState} from 'react'
import styled  from 'styled-components'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import moment from 'moment'
import { BiSearch } from "react-icons/bi";
import ReactPaginate from 'react-paginate'
import "../../../App.css"
import OrderPage from './OrderPage'
import { getUser } from '../../Api/Api';
import { NavLink } from 'react-router-dom';

const NewSellers = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const queryCLient = useQueryClient()
  

  const userID = user?._id
  const {data} = useQuery({
    queryKey: ["users"],
    queryFn: getUser
  })
  
  const seller = data?.filter((el)=> el.isSeller === true)
  const [ currentPage, setCurrentPage ] = useState(0)
  const recordPage = 6
  const lastIndex = currentPage * recordPage
  const pageCount = Math.ceil(seller?.length / recordPage)
  const currentPageData = seller?.slice(lastIndex, lastIndex + recordPage)
  const changeCPage = ({selected}) => {
    setCurrentPage(selected)
  }
  // console.log(seller)

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
            <Text>New Merchant Request</Text>
            <NavLink to="/admin-dashboard/merchants" style={{textDecoration: "none", color: "black"}}><Text>See All</Text></NavLink>
          </Header>
      <Wrapper>
      
      <Buttom>
        
          <Head>
            <Th>
              <HoldHead>No. </HoldHead>
            </Th>
            <Th>
              <HoldHead>Country</HoldHead>
            </Th>
            <Th>
              <HoldHead>Name</HoldHead>
            </Th>
            <Th>
              <HoldHead>Status</HoldHead>
            </Th>
            <Th>
              <HoldHead>Address</HoldHead>
            </Th>
            <Th>
              <HoldHead>Date </HoldHead>
            </Th>
        </Head>
        {
            currentPageData?.map((props,index) => (
              <OrderPage index={ index } id={props._id} isSeller={props.isSeller} address={props?.address} order_No={ props.phoneNum } created={ moment(props.createdAt).format("D MMM YYYY") }firstName={props.firstName} lastName={props.lastName} country={props?.country} status={props?.status}/>
            ))
      }
        </Buttom>
      </Wrapper>
    </Container>
  )
}

export default NewSellers

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
