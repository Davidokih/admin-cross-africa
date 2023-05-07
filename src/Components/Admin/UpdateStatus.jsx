import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const baseURL = "http://localhost:5000";
// const baseURL = "https://crossbackend.onrender.com";

const UpdateStatus = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [ statusUpdate, setStatusUpdate ] = useState("")
    const [ rejected, setrejected ] = useState("not rejected")
    const updateStatus = useMutation({
      mutationKey: [ "products", id ],
      mutationFn: ({status,rejected}) => {
        const response = axios.patch(`${baseURL}/api/product/${id}/update`,{status,rejected})
        return response
        },
        onSuccess: ()=> {
            navigate("/admin-dashboard/products")
      }
    })
  
    const handleMutate = () => {
      updateStatus.mutate({status: statusUpdate, rejected: rejected})
    }
  return (
      <Container>
          <select value={statusUpdate} onChange={e=>{setStatusUpdate(e.target.value)}}>
              <option>cancled</option>
              <option>pending</option>
              <option>hold</option>
              <option>rejected</option>
          </select>
      { statusUpdate === "rejected" ? <textarea placeholder='reason for rejection' value={ rejected } onChange={ (e) => {
        setrejected(e.target.value)
          }}/> : null}
          <button onClick={handleMutate}>Update Status</button>
    </Container>
  )
}

export default UpdateStatus;

const Container = styled.div`
    width: 100%;
    /* background-color: gold; */
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    select{
        width: 300px;
        height: 30px;
        margin-bottom: 20px;
    }
    button{
        border-radius: 5px;
        background-color: #42d017;
        border: 0px;
        padding: 10px 20px;
        color: white;
        cursor: pointer;
    }
    textarea{
      outline: none;
      width: 300px;
      height: 200px;
      margin-bottom: 20px;
    }
`