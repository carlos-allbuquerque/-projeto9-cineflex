import UserContext from "../provider/UserContext";
import {useState, useEffect, useContext} from "react";
import axios from "axios";
import styled from "styled-components";

export default function Sucess() {
    
    let {user} = useContext(UserContext);

    const [movie, setMovie] = useState({});

    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${user.idSeats}/seats`);
    console.log(user);

    return (
        <Container>
            <Box><Text>Pedido feito com sucesso!</Text></Box>

        </Container>
    
    
    )

}

const Container = styled.div`

`

const Text = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
`