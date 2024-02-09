import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import FrameImage from '../assets/frame.png'

function Templete({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
    return (
        <div>
            {/* left  */}
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>
                {formtype === 'signup' ? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <button>SignUp with google</button>
            </div>

            {/* right */}
            <div>
                <img src={FrameImage} alt='frame' width={558} height={504} loading='lazy' />
                <img src={image} alt='image with prop' width={558} height={504} loading='lazy' />
            </div>
        </div>
    )
}

export default Templete
