import React,{useState} from 'react'
import styled  from 'styled-components'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { orders } from '../../Api/OrderApi'
import moment from 'moment'
import ReactPaginate from 'react-paginate'
import OrderPage from './OrderPage'
import { useParams } from 'react-router-dom';

const AllOrders = () => {

    const {id} = useParams()
  

  const {data} = useQuery({
    queryKey: ["orders"],
    queryFn: orders
  })
  
  const filteredData = data?.filter((el) => {
    const filteredProducts = el?.products?.filter((e) => e.sellerID === id)
    // console.log(filteredProducts)
    return filteredProducts?.length > 0;
  })

  // console.log(filteredData)
  const [ currentPage, setCurrentPage ] = useState(0)
  const recordPage = 6
  const lastIndex = currentPage * recordPage
  const pageCount = Math.ceil(filteredData?.length / recordPage)
  const currentPageData = filteredData?.slice(lastIndex, lastIndex + recordPage)
  const changeCPage = ({selected}) => {
    setCurrentPage(selected)
  }
  // console.log(data)

  const [ query, setQuery ] = useState("")
  // console.log(query)
  const keys = ["order_No", "delivery_status"]
//   const searchData = search(currentPageData)

  var nf = Intl.NumberFormat()
  return (
      <Container>
          <Header>
            <Text>Transactions</Text>
            {/* <SerachHold>
          <input
              placeholder="Search by name or brand"
              value={ query }
              onChange={e=> setQuery(e.target.value)}
          />
            <button onClick={search}>
            <BiSearch />
            </button>
        </SerachHold> */}
          </Header>
      <Wrapper>
      
      <Buttom>
          
          <Head>
            <Th>
              <HoldHead>TAG No.</HoldHead>
            </Th>
            <Th>
              <HoldHead>Status</HoldHead>
            </Th>
            <Th>
              <HoldHead>Payment Method</HoldHead>
            </Th>
            <Th>
              <HoldHead>Paid</HoldHead>
            </Th>
            <Th>
              <HoldHead>Date </HoldHead>
            </Th>
            <Th>
              <HoldHead>No. Of Items</HoldHead>
            </Th>
            <Th>
              <HoldHead>Amount </HoldHead>
            </Th>
            
        </Head>
        {
            currentPageData?.map((props,index) => (
              <OrderPage index={ index } key={ index } delivery_status={ props.delivery_status } order_No={ props.order_No } created={ moment(props.createdAt).format("D MMM YYYY") } payment_method={ props.payment_method } pending_days={ props.pending_days } price={ props.products} qty={ props?.products } id={id } payment_status={props.payment_status}/>
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
  )
}

export default AllOrders

const SerachHold = styled.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
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
    margin-top: 70px;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 90%;
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
  border-top: 1px solid #aca8ab;
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
