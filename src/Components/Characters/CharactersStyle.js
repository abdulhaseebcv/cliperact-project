import styled from "styled-components"

export const MainDiv =styled.div`
`

export const CardDiv = styled.div`
cursor: pointer;
transition: .3s ease-in-out;
border-radius:8px;
background-color:#495057;
border-color:'transparent';
margin-bottom: 15px;
:hover{
    transform: scale(1.05);
}
`

export const Character = styled.div`
height: 12rem;
display: flex;
`

export const Image = styled.img`
width: 220px;
border-top-left-radius: 8px;
border-bottom-left-radius:8px;
object-fit: cover;
`

export const Details = styled.div`
margin-left: 20px;
`

export const Title = styled.h1`
font-size: 1.4rem;
font-weight: bold;
color: #eee;
@media (max-width:450px) {
    font-size: 1rem;
}
`

export const Status = styled.div`
display: flex;
color: #eee;
gap: 4px;
span{
    margin-top: 3px;
    height: 10px;
    width: 10px;
    border-radius:50%;
    background: ${(props) => props.background === 'Alive' ? 'green' : props.background === 'Dead' ? 'red' : 'grey'};
}
p{
    font-size: 12px;
    font-weight: 600;
}
`

export const Location = styled.div`
p{
    color: gray;
    margin-bottom: 0;
    font-size: 12px;
    font-weight: 600;
}
span{
    color: #eee;
    font-size: 12px;
}
`
export const FirstSeen = styled.div`
margin-top:9px;
p{
    color:gray;
    margin-bottom: 0;
    font-size: 12px;
    font-weight: 600;
}
span{
    color: #eee;
    font-size: 12px;
    margin-bottom: 0;
}
`
