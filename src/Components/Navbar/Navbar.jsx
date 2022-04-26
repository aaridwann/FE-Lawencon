import React, { useState } from 'react'
import hamburger from './hamburger.png'
import search from './search.png'
import './Navbar.scss'
import { useNavigate } from 'react-router-dom'


export default function Navbar({ suggest, change, click }) {
    const navigate = useNavigate()
    return (<section className='top'>
        <h3 onClick={() => navigate('/')}>Movie Apps</h3>
        <section className='search'>
            <form>
                <input onChange={(e) => change(e)} type='text' placeholder='Find something...' />
                {/* <button className='cari'>search</button> */}
            </form>
        </section>
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