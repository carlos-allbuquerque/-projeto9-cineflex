import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components"
import React from "react";
import {Link} from "react-router-dom";

function Movie(props) {
    return (
        <Image src={props.posterURL} alt="" />
    );
}


export default function Movies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies`);
        promise.then(response => {setMovies(response.data); 
            console.log(movies)       
        });

    }, []);

    return (
        <>
            <Box><Title>Selecione o filme</Title></Box>
            <Posters>
                {movies.map((movie, index) => 
                <Link to={`/sessoes/${movie.id}`}>
                    <Poster>
                        <Movie posterURL={movie.posterURL} key={index} />
                    </Poster>
                </Link>)}
            </Posters>
            
        </>
        
    );
}

const Box = styled.div`
    display: flex;
    justify-content: center;
`

const Title = styled.h1`
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Posters = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;  
`

const Poster = styled.li`
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
`
const Image = styled.img`
    width: 149px;
    height: 213px;
    padding: 10px;
`