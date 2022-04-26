import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { fetchingReplace } from '../../Hooks/fetchingReplace';
import Card from '../../Components/card/Card';
import { useNavigate } from 'react-router-dom';
import './Find.scss'
import Modals from '../../Components/modal/Modals';
import { fetchingData } from '../../Hooks/FetchingData';
let apiKey = '715289b';
let url2 = 'https://www.omdbapi.com/'

export default function Find() {
  let navigate = useNavigate()
  let { name } = useParams()
  const [movie, setMovie] = useState([])
  const [page, setPage] = useState(2)
  const [modal, setModal] = useState(false)
  const [dataModal, setDataModal] = useState({})

  // use effect for fetching trigered by params
  useEffect(() => {
    fetchingReplace(url2, apiKey, name, page, setMovie, movie)
    // fetchingData(url2, apiKey, name, page, setMovie, movie)
  }, [name])

  useEffect(() => {
    fetchingData(url2, apiKey, name, page, setMovie, movie)
  }, [page])

  // On Scroll Command for refresh page
  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      console.log('scroll');;
      setPage(page + 1)
    }
  }

  return (
    <div className='container' >

      {/* Navbar component reusable */}
      <Navbar />

      {/* Body list movie */}
      <div className='body' >
        {movie ? movie.map((x) => (
          // Card Reusable component for movie list
          <Card key={x.imdbID}
            data={x}
            click={(x) => navigate(`/details/${x}`)}
            modal={(e) => {
              setDataModal(e)
              setModal(!modal)
            }} />
        )) : 'Not found'}
      </div>

      {modal && <Modals close={() => setModal(false)} data={dataModal} />}
    </div>
  )
}
