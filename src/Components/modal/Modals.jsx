import React from 'react'
import './Modal.scss'

export default function Modals({ data,close }) {
    return (
        <div className='bg' >
            <div className='modal'>
                <h2 onClick={close}>X</h2>
                <img src={data.Poster} />
                <h1>{data.Title} <br /> {data.Year}</h1>
            </div>
        </div>
    )
}
