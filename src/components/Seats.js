import axios from "axios";
import {useState, useEffect, useContext} from "react";
import { useParams, useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Footer from "./Footer";
import UserContext from "../provider/UserContext";

let selectedSeats = [];

function Seat({name, isAvailable, selectedSeats, id}) {
    

    const [color, setColor] = useState("");

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        (isAvailable) ? setColor("#C3CFD9"):setColor("#FBE192");
    }, [])
    
    function selectSeat() {
        if (!selected) {
            if(isAvailable)  {
                setColor("#8DD7CF");
                setSelected(true);
                if (!selectedSeats.includes(id)) {
                    selectedSeats.push(id) 
                }
                console.log(selectedSeats);

            } else {
                alert("Assento indispovível");
            }
        } else {
            if(isAvailable) {
                setColor("#C3CFD9");
                setSelected(false); 
                selectedSeats.splice(selectedSeats.indexOf(id), 1);
            }
        }

    }
    return(
        <Icon color={color} onClick={() => selectSeat()} >
            <Text>{name}</Text> 
        </Icon>
        
    );
}

export default function Seats() {
    

    const {idSeats} = useParams();

    const [seats, setSeats] = useState([]);

    const [movieInfo, setMovieInfo] = useState({});

    const [day, setDay] = useState([])

    const [hour, setHour] = useState("");

    const [name, setName] = useState("");

    const [CPF, setCPF] = useState("")

    let {setUser, user} = useContext(UserContext);

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeats}/seats`);

        promise.then(response => {setSeats(response.data.seats)
        promise.then(setMovieInfo(response.data.movie))
        promise.then(setDay(response.data.day))
        promise.then(setHour(response.data.name))
        })
    
    }, [])

    const navigate = useNavigate();

    function order() {
        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        {ids:[...selectedSeats], name: name, cpf: CPF}).catch(e => console.log(e))
        setUser({idSeats, name, CPF, ids:[...selectedSeats]});
        selectedSeats = [];
        navigate("/sucesso");
    }

    console.log(seats);
    return (
        <Container>
            <Box><Title>Selecione o(s) assento(s)</Title></Box>
            <SeatsList>
                {seats.map((seat, index) => <Seat name={seat.name} isAvailable={seat.isAvailable} selectedSeats={selectedSeats} id={seat.id} key={index} />)}  
            </SeatsList>
            <Meaning>
                <SelectedExample>
                    <SE/>
                    <h2>Selecionado</h2>
                </SelectedExample>
                <AvailableExample>
                    <AE />
                    <h2>Disponível</h2>
                </AvailableExample>
                <UnavailableExample>
                    <UE />
                    <h2>Indisponível</h2>
                </UnavailableExample>
            </Meaning>
            <BuyerField>
                <Buyer>Nome do comprador:</Buyer>
                <BuyerInput placeholder="Digite seu nome..." value={name} onChange={(event) => setName(event.target.value)} />
            </BuyerField>
            <CPFField>
                <CPFText>CPF do comprador:</CPFText>
                <CPFInput placeholder="Digite seu CPF..." value={CPF} onChange={(event) => setCPF(event.target.value)}></CPFInput>
            </CPFField>
            
            <Button onClick={() => order()} ><h3>Reservar assentos(s)</h3></Button>
            <Footer posterURL={movieInfo.posterURL} title={movieInfo.title} hours={`${day.weekday} - ${hour}`}/>
        </Container>
        
    );
} 

const Container = styled.div`
    margin-bottom:124px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
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
    
`

const SeatsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 14px;
    background-color: ${props => props.color};
    border: 1px solid #808F9D;

`

const Text = styled.h3`
    font-size: 14px;
`

const Meaning = styled.h3`
    margin-top: 20px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    gap: 50px;
`

const SelectedExample = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SE = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #8DD7CF; 
    margin-bottom: 5px;
    border: 1px solid #808F9D;
`

const AvailableExample = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AE = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #C3CFD9; 
    margin-bottom: 5px;
    border: 1px solid #808F9D;
`

const UnavailableExample = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UE = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #FBE192; 
    margin-bottom: 5px;
    border: 1px solid #808F9D;
`

const BuyerField = styled.div`
    margin-top: 50px;
    width: 327px;
`

const Buyer = styled.h2`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
`

const BuyerInput = styled.input`
    width: 327px;
    height: 51px;

    &:placeholder-shown {
        font-style: italic;
    }
`

const CPFField = styled.div`
    margin-top: 50px;
    width: 327px;
`

const CPFText = styled.h2`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
`

const CPFInput = styled.input`
    width: 327px;
    height: 51px;

    &:placeholder-shown {
        font-style: italic;
    }
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
