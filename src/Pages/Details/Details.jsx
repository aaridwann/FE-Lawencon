import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './details.scss'
import Navbar from '../../Components/Navbar/Navbar'
import { fetchingData } from '../../Hooks/FetchingData'
import { Suggest } from '../../Hooks/Suggest'
import { useNavigate } from 'react-router-dom'

let apiKey = '715289b';
let url2 = 'https://www.omdbapi.com/'


export default function Details() {
  const navigate = useNavigate()
  let { id } = useParams()
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [movie, setMovie] = useState([])
  const [search, setSearch] = useState('batman')
  const [suggest, setSuggest] = useState([])

  const goTo = (e) => {
    navigate(`/details/${e}`)
    setSuggest()
    // setSearch('')
  }

  const fetchData = async () => {
    await fetch(`https://www.omdbapi.com?apikey=715289b&i=${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }

  useEffect(() => {
    fetchData()
  }, [id])


  useEffect(() => {
    fetchingData(url2, apiKey, search, page, setMovie, movie)
    Suggest(search, movie, setSuggest)
  }, [page, search])

  return (
    <div className='details'>
      <section className='navbar'>
        <Navbar click={(e) => goTo(e)} suggest={suggest} change={(e) => setSearch(e.target.value)} />
      </section>


      <Body data={data} />
    </div>
  )
}



function Body({ data }) {
  console.log(data);
  return (<div className='body'>
    <section className='img'>
      <img src={data.Poster} />
    </section>

    <section className='detail'>
      <h1>{data.Title}</h1>



      <section className='desc'>
        <section className='A'>
          <span><p>genre : </p><h4>{data.Genre}</h4></span>
          <p>Actor : </p><h4>{data.Actors}</h4>
          <p>Country : </p><h4>{data.Country}</h4>
        </section>



        <section className='B'>
          <p>Duration</p><h4>{data.Runtime}</h4>
          <p>Imdb Rating</p><h4>{data.imdbRating}</h4>
          <p>Released</p><h4>{data.Released}</h4>
        </section>
      </section>


    </section>

  </div>);
}
