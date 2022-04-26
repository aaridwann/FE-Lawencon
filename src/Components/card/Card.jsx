import React from 'react'
import './Card.scss'


export default function Card({ data, click,modal }) {
    return (
        <div onClick={() => modal(data)} key={data.Title} className='card' style={{ backgroundImage: `url(${data.Poster})` }} >
            <div className='contentDetail'>
                <h2>{data.Title}</h2>
                <p>{data.Year}</p>
                <p className='sedet' onClick={() => click(data.imdbID)}>See Details</p>
            </div>
        </div>
    )
}
