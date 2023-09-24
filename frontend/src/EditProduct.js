import React, { useEffect, useState } from 'react'
import './EditProduct.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Nav from './Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditProduct() {
     const navigate=useNavigate()
    const [state, setState] = useState({})
    const [take, setTake] = useState({})
    const { productId } = useParams()
    console.log(productId);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/GetsingleProduct/${productId}`).then((response) => {
            // console.log(response.data.data);
            setState(response.data.data[0])
        }).catch((error) => { console.log(error); })
    }, [])
    console.log(state);

    const inputChange = (event) => {
        const { name, value } = event.target
        setTake({ ...take, [name]: value })
    }
    const update = () => {
        axios.post(` http://127.0.0.1:8000/api/updateproduct/${productId}`, take).then((response) => {
            console.log(response.data.data);
            toast.success(response.data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(nav, 2500)
            function nav() {
                navigate('/view')
            }
        }).catch((error) => { console.log(error); })
    }

    return (
        <div>
            <ToastContainer/>
            <Nav />
            <div className='mainboard'>
                <div className='borad'>
                </div>
                <div className='board2 mt-5'>
                    <h4>Add Products!</h4>
                    <form>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" name='name' placeholder="name" onChange={inputChange} defaultValue={state.name}></input>
                            </div>
                            <div class="col">
                                <input type="number" class="form-control" name='quantity' placeholder="quantity" onChange={inputChange} defaultValue={state.quantity}></input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="number" class="form-control" name='price' placeholder="price" onChange={inputChange} defaultValue={state.price}></input>
                            </div>
                            <div class="col">
                                {/* <input type="text" class="form-control" placeholder="category" name='category' onChange={inputChange}></input> */}
                                <select id="inputState" class="form-control" name='category' defaultValue={state.category} onChange={inputChange}>
                                    <option selected disabled>Choose...</option>
                                    <option>Phone</option>
                                    <option>Tv</option>
                                    <option>Laptop</option>
                                    <option>Watch</option>
                                </select>
                            </div>

                        </div>
                        <button type="button" class="btn btn-dark mt-4" onClick={update}>UPDATE</button>

                    </form>
                </div>
            </div>

        </div>
    )
}
