import styled from "styled-components";

export default function Footer({
    posterURL,
    title,
    hours =""
}) {
    return (
        <Container>
        <Image><img src={posterURL} alt="" /></Image>
        <Title>{title}</Title>
        </Container>
    ); 
}

const Container = styled.footer`
    width: 100%;
    height: 117px;
    background-color: #DFE6ED;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;

`

const Image = styled.image`
    img {
        width: 48px;
        height: 72px;
        padding: 5px;
        background-color: #FFFFFF;
        margin-left: 10px;
    }
`
const Title = styled.h1`
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    margin-left: 10px;
`