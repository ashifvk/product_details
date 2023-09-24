import axios from 'axios';
import './Nav.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Nav() {

    const nav = useNavigate()

    function ani() {
        document.getElementById('anim').className = 'classname';
    }

    function closediv() {
        document.getElementById('anim').className = 'no';

    }

    const [state, setState] = useState({})

    const inputChange = (event) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }
    const submit = () => {
        console.log(state);
        axios.post('http://127.0.0.1:8000/api/LoginUserAPIView', state).then((response) => {
            console.log(response.data.data);
            localStorage.setItem('role', response.data.data.role)
            console.log(response.data.data.role);
            window.location.reload()


        }).catch((error) => {
            console.log(error);
        })
    }

    const logout = () => {
        localStorage.removeItem('role')
        nav('/')
    }

    const role = localStorage.getItem('role')
    useEffect(() => {
        const role = localStorage.getItem('role')
    },[])

    return (
<>
            {role == 'admin' ?
                <nav class="navbar navbar-expand-lg navbar-light bg">
                    <a class="navbar-brand text-white" href="#">
                        <labell class='ml-2'>AziKart</labell>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav mx-auto">
                            <a class="nav-link active text-white" href="/">Home <span class="sr-only">(current)</span></a>
                            <a class="nav-link text-white" href="/addproduct">Add product</a>
                            <a class="nav-link text-white" href="/view">view</a>
                            {/* <a class="nav-link text-white" href="/users">Users</a>    */}
                        </div>

                    </div>
                    <input name="" type="button" className='clicker' onClick={logout} value="logout"></input>
                </nav>
                :
                role == 'user' ?
                    <nav class="navbar navbar-expand-lg navbar-light bg">
                        <a class="navbar-brand text-white" href="#">
                            <labell class='ml-2'>AziKart</labell>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav mx-auto">
                                <a class="nav-link active text-white" href="/">Home <span class="sr-only">(current)</span></a>
                                <a class="nav-link text-white" href="/view">view</a>
                                <a class="nav-link text-white" href="/users">profile</a>
     
                            </div>
          

                        </div>
                        <input name="" type="button" className='clicker' onClick={logout} value="logout"></input>
                    </nav>
                    :
                    <nav class="navbar navbar-expand-lg navbar-light bg">
                        <a class="navbar-brand text-white" href="#">
                            <labell class='ml-2'>AziKart</labell>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav mx-auto">
                                <a class="nav-link active text-white" href="/">Home <span class="sr-only">(current)</span></a>
                                <a class="nav-link text-white" href="/view">view</a>
                            </div>

                        </div>
                        <input name="" type="button" className='clicker' onClick={ani} value="login"></input>
                    </nav>
            }

            <div id='anim'>
                <div class="mod">
                    <div class="modal-content modback">
                        <div class="modal-header">
                            <h5 class="modal-title text-white" id="staticBackdropLabel">LOGIN HERE!</h5>
                            <button type="button" class="close" onClick={closediv}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <form className='modleft'>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" name='username' aria-describedby="emailHelp" onChange={inputChange}></input>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label className='modleft'>Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={inputChange}></input>
                                </div>
                                <label>Don't have account ? </label><a className='ml-3' href='/sighnup' >SIGHN UP</a>

                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onClick={submit} >login</button>
                        </div>
                    </div>
                </div>

            </div>

            </>    )
}
