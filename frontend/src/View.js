import React, { useEffect, useState } from 'react'
import './View.css'
import Nav from './Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function View() {
    const [state, setState] = useState()
    const [set, setCategory] = useState()
   const navigate= useNavigate()

    const inputChange = (event) => {
        const selectedcategory = event.target.value
        setCategory(selectedcategory)
       
    }
useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/Filterproducts/${set}`).then((response)=>{
        console.log(response.data.data)
        setState(response.data.data)

    ;}).catch((error)=>{console.log(error);})

},[set])
    useEffect(() => {
        axios.get(' http://127.0.0.1:8000/api/getallproduct').then((response) => {
            console.log(response.data.data);
            setState(response.data.data)

        }).catch((error) => { console.log(error); })
    }, [])

const deleteproduct =(val)=>{
const id = val
axios.get(`http://127.0.0.1:8000/api/deleteproduct/${id}`).then((response)=>{
    console.log(response);
}).catch((error)=>{console.log(error);})
window.location.reload()
}
const editproduct =(val)=>{
    const id = val
    console.log(id);
   navigate(`/edit/${id}`)
    }


    return (
        <>
            <Nav />
            <center>
                <div className='selclr'>
                    <div class=" col-md-4  ">
                        <select id="inputState" class="form-control" name='category' onClick={ inputChange}>
                            <option selected disabled>Filter...</option>
                            <option >Phone</option>
                            <option >Laptop</option>
                            <option >Tv</option>
                            <option >Watch</option>
                        </select>
                    </div>
                </div>
            </center>
            <div className='viewbody'>
                <div className='row'>
                    {state?.map((value, key) => (
                        <div className='col '>
                            <div class="container">
                                <div class="wrapper">
                                    <div class="banner-image"> </div>
                                    <h2> {value.name}</h2>
                                    <p>$ :{value.price} <br />
                                        Quantity:{value.quantity}</p>
                                </div>
                                <div class="button-wrapper">
                                    <button class="btn outline" onClick={()=>{editproduct(value.id)}}>EDIT</button>
                                    <button class="btn fill"  onClick={()=>{deleteproduct(value.id)}}>DELETE</button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
