import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function Session({
    weekday,
    date,
    showtimes,

}) {

    return(
        <Container>
            <Day>{weekday} - {date}</Day>
                <Buttons>
                    {showtimes.map((showtimes, index) => 
                    <Link to={`/assentos/${showtimes.id}`}>
                        <Button key={index}>{showtimes.name}</Button>
                        </Link>)}
                </Buttons>
        </Container>

    );
}

export default function Sessions() {

    const [sessions, setSessions] = useState([])

    const {idSessions} = useParams();
    console.log(idSessions);

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSessions}/showtimes`);

        promise.then(response => { setSessions(response.data.days);
            console.log(sessions);
        });
    }, [])


    return(
        <>
            <Title>Selecione o horário</Title>
            {sessions.map(session =>
            <Session weekday={session.weekday} date={session.date} showtimes={session.showtimes} key={session.id} />
            )}
        </>
    );
}

const Title = styled.h1`
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-top: 30px;
    margin-bottom: 20px;
    
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    margin-left: 40px;
`

const Day = styled.h2`
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 20px;
`



const Buttons = styled.div`
    display: flex;
`

const Button = styled.button`
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    color: white;
    font-weight: 400;
    font-size: 18px;
    margin-right: 10px;
    border: none;  
    cursor: pointer;
`
