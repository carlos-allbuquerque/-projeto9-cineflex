import axios from "axios";
import { useState, useEffect } from "react";
import "./Movies.css"
import React from "react";
import {Link} from "react-router-dom";

function Movie(props) {
    return (
        <img src={props.posterURL} alt="" />
    );
}


export default function Movies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {setMovies(response.data); 
            console.log(movies)          
        });

    }, []);

    return (
        <>
            <h2 className="text">Selecione o filme</h2>
            <ul className="posters">
                {movies.map((movie, index) => <Link to={`/filme/${movie.id}`}><li className="poster"><Movie posterURL={movie.posterURL} key={index} /></li></Link>)}
            </ul>
            
        </>
        
    );
}