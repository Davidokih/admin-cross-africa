import axios from "axios";
// const baseURL = "http://localhost:5000";
const baseURL = "https://crossbackend.onrender.com";

export const orders = async (id) => {
    // console.log(id);
    const response = await axios.get(`${baseURL}/api/order`)

    return response.data.data
}
export const placeOrder = async ({firstName,lastName,email,order_No,payment_method,country, Localgovt, state, apartment, nearestBusStop,products,subtotal, total}) => {
    // console.log(id);
    await axios.post(`${baseURL}/api/order/create`, { firstName, lastName, email, order_No, payment_method, country, Localgovt, state, apartment, nearestBusStop, products, subtotal, total }).then((res) => {
        
        return res.data.data
    }).catch((err)=>{
        console.log(err)
    })
}
export const getOneOrder =(id)=>{
    const response = axios.get(`${baseURL}/api/order/${id}`).then((res) => {
        return res.data.data
    })
    return response
}