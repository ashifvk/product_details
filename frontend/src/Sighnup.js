import React, { useState } from 'react'
import './Sighnup.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

export default function Reg() {

  function refresh() {
    window.location.reload()
  }
  const navigate = useNavigate()

  const [state, setState] = useState([])

  const inputChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }
  const submit = () => {
    console.log(state);
    axios.post(' http://127.0.0.1:8000/api/registerdata', state).then((response) => {
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
        setTimeout(nav,2500)
        function nav() {
          navigate('/')
        }

    }).catch((error) => {
      console.log(error.response.data.message);
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    })

  }
  return (
    <div>
      <ToastContainer/>
      <div className='mai'>
        <div className='bor'>
          <h2 class="heading text-white text-center me">SIGN <span>UP!</span></h2>

          <div className='dis'>
            <label className='text-white' >YOUR NAME</label>
            <input type='text' name='name' onChange={inputChange} ></input>
            <label className='text-white'>CONTACT</label>
            <input type='tel' name='contact' onChange={inputChange}></input>
            <label className='text-white'>EMAIL</label>
            <input type='text' name='email' onChange={inputChange}></input>
            <label className='text-white'>USERNAME</label>
            <input type='text' name='username' onChange={inputChange}></input>
            <label className='text-white'>PASSWORD</label>
            <input type='password' name='password' onChange={inputChange}></input>

            <a href='/' ><i class="bi bi-box-arrow-up-right mr-2" ></i>Back to home</a>
            <button className='bv' onClick={submit}>SEND</button>

          </div>
        </div>
      </div>
    </div>
  )
}
