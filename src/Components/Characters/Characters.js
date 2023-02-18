import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { CardDiv, Character, Details, FirstSeen, Image, Location, MainDiv, Status, Title } from './CharactersStyle';
import axios from 'axios';
import Epsiode from '../Episode/Epsiode';

function Characters() {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
  const sendReq = () => {
    axios.get('https://rickandmortyapi.com/api/character').then((res) => {
      console.log('res: ', res?.data?.results)
      setCharacters(res?.data?.results)
    })
  }
  useEffect(() => {
    sendReq()
  }, [])
  return (
   <MainDiv className='bg-dark pt-5'>
     <Container>
    <Row>
    <Col md={3} className='ms-auto'>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Search" onChange={(e)=>setSearch(e.target.value)} />
      </Form.Group>
      </Form>
     </Col>
    </Row>
      <Row className='p-2'>
        {characters.filter((item)=>{
          return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
        }).map((character) => {
          return (
            <Col key={character.id} lg={6}>
              <CardDiv>
                <Character>
                  <Image className='img-fluid' src={character?.image}></Image>
                  <Details>
                    <Title>{character?.name}</Title>
                    <Status background={character.status}>
                      <span></span>
                      <p>{character?.status}-{character?.species}</p>
                    </Status>
                    <Location>
                      <p>Last known location:</p>
                      <span>{character?.location?.name}</span>
                    </Location>
                    <FirstSeen>
                      <p>First seen in:</p>
                      <Epsiode data={character.episode[0]} />
                    </FirstSeen>
                  </Details>
                </Character>
              </CardDiv>
            </Col>
          )
        })}
      </Row>
    </Container>
   </MainDiv>
  )
}

export default Characters