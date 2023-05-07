import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import styled from 'styled-components';

const Search = ({ data }) => {
    const [ query, setQuery ] = useState()
    console.log(query)
    const keys = ["name", "brand","tag"]

    const search = () => {
        return data.filter((item) =>
            keys.some((key)=> item[key].t.includes(query))
        )
    }
  return (
        <SerachHold>
          <input
              placeholder="Search by name or brand"
              value={ query }
              onChange={e=> setQuery(e.target.value)}
          />
            <button onClick={search}>
            <BiSearch />
            </button>
        </SerachHold>
  )
}

export default Search;

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