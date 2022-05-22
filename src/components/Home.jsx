import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Movie from './Movie';

const HomeWrapper = styled.div`
padding: 10px 100px;
margin: auto 0;
`;
const Title = styled.h3`
font-weight: 500;
margin-left: 10px;
`
const MoviesList = styled.div`
display: flex;
flex-direction:column;
align-items: flex-start;
width: 100%;
`
const Home = () => {
    const apiEndpoint = `http://localhost:5000/movies`;
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const getMovies = async() => {
            const response = await axios.get(apiEndpoint);
            if(response.status===200)
                setMovies(response.data);
        } 
        getMovies();
    },[]);
    //console.log(movies);
  return (
    <HomeWrapper>
        <Title>Movies Review</Title>
        <MoviesList>
            {movies && movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </MoviesList>
    </HomeWrapper>
  )
}

export default Home
