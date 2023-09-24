import React, { useState } from 'react'
import Nav from './Nav'
import './Addproduct.css'
import add from './add.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

export default function Addproduct() {

    const [state, setState] = useState({})
    const navigate=useNavigate()

    const inputChange = (event) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }

    const submit = () => {
        console.log(state);
        axios.post(' http://127.0.0.1:8000/api/addproduct', state).then((response) => {
            console.log(response);
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
                                <input type="text" class="form-control" name='name' placeholder="name" onChange={inputChange}></input>
                            </div>
                            <div class="col">
                                <input type="number" class="form-control" name='quantity' placeholder="quantity" onChange={inputChange}></input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="number" class="form-control" name='price' placeholder="price" onChange={inputChange}></input>
                            </div>
                            <div class="col">
                                {/* <input type="text" class="form-control" placeholder="category" name='category' onChange={inputChange}></input> */}
                                    <select id="inputState" class="form-control" name='category' onChange={inputChange}>
                                        <option selected disabled>Choose...</option>
                                        <option>Phone</option>
                                        <option>Tv</option>
                                        <option>Laptop</option>
                                        <option>Watch</option>
                                    </select>
                            </div>

                        </div>
                        <button type="button" class="btn btn-dark mt-4" onClick={submit}>SUBMIT</button>

                    </form>
                </div>
            </div>

        </div>

    )
}
