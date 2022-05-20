import axios from "axios";
import { useState } from "react";

export default function Films() {

    const [films, setFilms] = useState([]);
    let promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    
    promise.then(resposta => {
		setFilms(resposta.data);
	});

    return (
            <h2 className="text">Selecione o filme</h2>
    );
}