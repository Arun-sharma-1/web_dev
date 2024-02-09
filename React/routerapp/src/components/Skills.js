import React from 'react'
import { useNavigate } from 'react-router-dom'

function Skills() {
    const navigate = useNavigate();
    function clickHandler() {
        navigate('/about')
    }
    return (
        <div>
            This is skills section
            <br></br>
            <button className='border bg-amber-600 px-4 py-2 m-4 rounded-md text-white font-bold' onClick={clickHandler}>Move to about section</button>
        </div>
    )
}

export default Skills
