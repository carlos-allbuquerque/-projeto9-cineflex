import styled from "styled-components";

export default function Header() {
    return (
        <Headder>
            <Title>CINEFLEX</Title>
        </Headder>
    );
}

const Headder = styled.header`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Title = styled.h1`
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
`