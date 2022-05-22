import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Movie from './Movie';

function MovieDetails() {
    const apiEndpoint = `http://localhost:5000/movies`;
    let {id} = useParams();
    console.log(id);
    const [movie, setMovie] = useState({});

    useEffect(()=>{
        const getMovie = async() => {
            const response = await axios.get(`${apiEndpoint}/${id}`);
            if(response.status===200)
                setMovie(response.data);
        } 
        getMovie();
    },[id]);
  return (
    <>
    <Movie movie={movie} isDetail={true} />
    <Link to="/">Back</Link>
    </>
  )
}

export default MovieDetails
