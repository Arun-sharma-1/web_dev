import React, { useState } from 'react'
import { AiFillEyeInvisible, AiOutlineEye } from "react-icons/ai"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function SignUpForm({setIsLoggedIn}) {

    const [formdata, setFormdata] = useState({ firstname: '', lastname: '', password: '', confirmpassword: '', email: '' })
    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    const navigate = useNavigate();
    function changeHandler(event) {
        const { name, value } = event.target
        setFormdata((prevdata) => (
            {
                ...prevdata,
                [name]: value
            }
        ))
    }
    function submitHandler(event)
    {
        event.preventDefault();
        if(formdata.password !== formdata.confirmpassword)
        {
            toast.error('Password do not match')
            return;
        }
        setIsLoggedIn(true)
        toast.success(`account created with ${formdata.email}` )
        navigate('/dashboard')

    }
    return (
        <div>
            <div>
                <button>
                    Student
                </button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            type='text'
                            placeholder='Enter first name'
                            name='firstname'
                            onChange={changeHandler}
                            value={formdata.firstname} />
                    </label>
                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            type='text'
                            placeholder='Enter last name'
                            name='lastname'
                            onChange={changeHandler}
                            value={formdata.lastname} />
                    </label>
                </div>

                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                        type='text'
                        placeholder='Enter email address'
                        name='email'
                        onChange={changeHandler}
                        value={formdata.email} />

                </label>

                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input
                            type={showPassword1 ? 'text' : 'password'}
                            placeholder='Enter Password'
                            name='password'
                            onChange={changeHandler}
                            value={formdata.password} />
                        <span onClick={() => setShowPassword1((prev) => !prev)}>
                            {showPassword1 ? (<AiFillEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input
                            type={showPassword2 ? 'text' : 'password'}
                            placeholder='Enter confirm Password'
                            name='confirmpassword'
                            onChange={changeHandler}
                            value={formdata.confirmpassword} />
                        <span onClick={() => setShowPassword2((prev) => !prev)}>
                            {showPassword2 ? (<AiFillEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>
                <button>Create Account</button>
            </form>
        </div>
    )
}

export default SignUpForm
