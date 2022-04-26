import React, { useState } from 'react'
import './Navbar.scss'
import { useNavigate } from 'react-router-dom'


export default function Navbar({ suggest, change, click, submit }) {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    // onchange function
    const handlerChange = (e) => {
        setSearch(e.target.value)
        change(e.target.value)
    }

    // On submit function
    function submitHandler(e) {
        e.preventDefault()
        submit
        navigate(`/find/${search}`)
    }


    return (<section className='top'>
        {/* Title Apps */}
        <h3 onClick={() => navigate('/')}>Movie Apps</h3>

        {/* Input for search collumt */}
        <section className='search'>
            <form onSubmit={submitHandler}>
                <input onChange={(e) => handlerChange(e)} type='text' placeholder='Find something...' />
            </form>
        </section>

        {/* Suggest display */}
        <div className='suggest'>
            {suggest &&
                <section onClick={() => click(suggest[2])}>
                    <img src={suggest[1]} />
                    <p>{suggest[0]}</p>
                </section>
            }
        </div>

    </section>);
}