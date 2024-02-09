import React, { useState } from 'react'
import { AiFillEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setIsLoggedIn }) {
    const [formdata, setFromData] = useState({ email: "", password: "" })
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    function changeHandler(event) {
        const { name, value } = event.target
        setFromData((prevdata) => {
            return {
                ...prevdata,
                [name]: value
            }
        })
    }
    function submitHandler(event)
    {
        event.preventDefault();
        setIsLoggedIn(true)
        toast.success('Logged In')
        navigate('/dashboard')

    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Email Address <sup>*</sup>
                    <input required type='text' value={formdata.email} name='email' onChange={changeHandler} placeholder='Enter Email id ' ></input>
                </label>

                <label>Password<sup>*</sup>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={formdata.password}
                        placeholder='Enter your password'
                        onChange={changeHandler}
                        name='password'
                    />

                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEye />) : (<AiFillEyeInvisible />)}
                    </span>
                    <Link to='#' >
                        <p>Forget password</p>

                    </Link>

                </label>

                <div>
                    <button >Sign In</button>
                </div>

            </form>
        </div>
    )
}

export default LoginForm
