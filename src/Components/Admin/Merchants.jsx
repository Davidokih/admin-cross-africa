import React,{useState} from 'react'
import styled  from 'styled-components'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import moment from 'moment'
import { BiSearch } from "react-icons/bi";
import ReactPaginate from 'react-paginate'
// import "../../App.css"
import "./style.css"

import OrderPage from './AdminDashboard/OrderPage'
import { getUser } from '../Api/Api';

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
  const keys = ["firstName", "lastName", "phoneNum"]

  const search = (e) => {
    const result = e?.filter((item) =>
   keys.some((key) => {
      const value = item[key];
      return typeof value === "string" && value.toLowerCase().includes(query);
    })
  );
  return query ? (result?.length ? result : null) : e
  }
  const searchData = search(currentPageData)

  var nf = Intl.NumberFormat()
  return (
      <Align>
          <Title>Merchants</Title>
      <Container>
        <Header>
                  <SerachHold>
                  <button onClick={search}>
            <BiSearch />
            </button>
          <input
              placeholder="Search by name or brand"
              value={ query }
              onChange={e=> setQuery(e.target.value)}
          />
           
        </SerachHold>
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
              <HoldHead>No. Of Items</HoldHead>
            </Th>
            <Th>
              <HoldHead>Registerd </HoldHead>
            </Th>
            <Th>
              <HoldHead>Edit </HoldHead>
            </Th>
        </Head>
        {
            searchData?.map((props,index) => (
              <OrderPage index={ index } id={ props._id } isSeller={ props.isSeller } order_No={ props.phoneNum } registerd={ moment(props.createdAt).format("D MMM YYYY") } country={ props?.country } items={ props?.product?.length } avatar={ props.avatar[0].url} name={ `${props.firstName} ${props.lastName}`} />
              // 
            ))
      }
        </Buttom>
              </Wrapper>
              <ReactPaginate
        breakLabel="..."
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={ pageCount }
        onPageChange={ changeCPage }
        containerClassName={"pagination"}
        previousLinkClassName={"pagination_link"}
        nextLinkClassName={"pagination_link"}
        disabledClassName={ "pagination_link_disable" }
        activeClassName={"pagination_link_active"}
        renderOnZeroPageCount={ null }
      />
    </Container>
      </Align>
  )
}

export default NewSellers

const Align = styled.div`
    width: 90%;
`
const Title = styled.div`
    margin-top: 80px;
    margin-bottom: 50px;
    font-weight: 700;
    font-size: 20px;
`
const SerachHold = styled.div`
  width: 400px;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 5px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
    background-color: transparent;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: transparent;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`
const Wrapper = styled.div`
  width: 100%;
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
    background-color: #f6eded;
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
  /* background-color: #f8f9fa; */
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  border-left: 1.5px solid #d0d1d2;
  border-bottom: 1.5px solid #d0d1d2;

`;
const Head = styled.tr`

  height: 70px;
`;
const Buttom = styled.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  /* border-collapse: collapse; */
  border-spacing: 0;
  border: 1.5px solid #d0d1d2;

  /* overflow-x: scroll; */
`;
