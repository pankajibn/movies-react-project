import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const MovieWrapper = styled.div`
width: 100%;
height: 150px;
margin-bottom: 10px;
padding: 10px;
display: flex;
justify-content: flex-start;
-webkit-box-shadow: 3px -2px 5px 0px rgba(230,227,230,0.67);
-moz-box-shadow: 3px -2px 5px 0px rgba(230,227,230,0.67);
box-shadow: 3px -2px 5px 0px rgba(230,227,230,0.67);
`
const MovieImg = styled.img`
    border-radius: 10px;
    padding: 5px;
    flex: 2;
`
const MovieInfo = styled.div`
    padding: 10px;
    flex: 8;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;

`
const MovieTitle = styled.h4`
    font-size: 14px;
`
const MovieReleaseDate =  styled.span`
font-size: 12;
font-weight: 500;
color: grey;
`
const MovieRatings = styled.span`
font-size: 12;
font-weight: 500;
color: grey;
`
const SeeFull = styled.div`
flex: 2;
margin: auto 0;
`
const ViewButton= styled.button`
background-color: green;
width: 120px;
border: none;
border-radius: 20px;
height: 30px;
color: white;
cursor: pointer;
`

const Movie = ({movie,isDetail}) => {
    const maxRatings = '5.0';
  return (
    <MovieWrapper>
    <MovieImg src={`https://via.placeholder.com/150x100?text=${movie && movie.title}`}/>
    <MovieInfo>
    <MovieTitle>{movie && movie.title}</MovieTitle>
    <MovieReleaseDate>{movie && movie.release_date}</MovieReleaseDate>
    <MovieRatings>{movie.ratings && `${movie.ratings}/${maxRatings}`}</MovieRatings>
    </MovieInfo>
    {!isDetail && <SeeFull><Link to={`/movies/${movie.id}`}><ViewButton>See Full Review</ViewButton></Link></SeeFull>}
    </MovieWrapper>
  )
}

export default Movie
