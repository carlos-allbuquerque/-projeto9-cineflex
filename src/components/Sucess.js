import UserContext from "../provider/UserContext";
import {useState, useEffect, useContext} from "react";
import axios from "axios";
import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Sucess() {
    
    let {user} = useContext(UserContext);
    console.log(user)

    const [movie, setMovie] = useState({});

    const [day, setDay] = useState({});

    const [hour, setHour] = useState({});

    useEffect (() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${user.idSeats}/seats`);
        console.log(user);
        promise.then(response => {setMovie(response.data.movie)
        promise.then(setDay(response.data.day))
        promise.then(setHour(response.data.name))
        })
        

    }, [])


    return (
        <Container>
            <Box><Text>Pedido feito com sucesso!</Text></Box>
            <Section>Filme e sessão</Section>
            <Info>{movie.title}</Info>
            <Info>{`${day.date} - ${hour}`}</Info>
            <Section>Ingressos</Section>
            {user.names.map((name) =><Info>{`Assento ${name}`}</Info>)}
            <Section>Comprador</Section>
            <Info>{`Nome: ${user.name}`}</Info>
            <Info>{`CPF: ${user.CPF}`}</Info>
            <Div><Link to="/"><Button>Voltar para a Home</Button></Link></Div>
        </Container>
    
    
    )

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Text = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #247A6B;
    width: 150px;
    text-align: center;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;

`

const Section = styled.h2`
    margin-top: 50px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-left: 30px;
    margin-bottom: 5px;
`
const Info = styled.h3`
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    margin-left: 30px;
`

const Button = styled.button`
    background: #E8833A;
    border-radius: 3px;
    width: 225px;
    height: 42px;
    margin-top: 50px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    border: none;
    h3 {
        text-align: center;   
    }
`
const Div = styled.div`
    display: flex;
    justify-content: center;
`