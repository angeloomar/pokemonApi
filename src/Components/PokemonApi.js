import React, { useState } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroupItem } from 'react-bootstrap';

function PokemonApi() {
  const [data, setData] = useState([]);

  const handleClick = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const data = response.data;
    setData(data.results);
  }

  return (
    <div>
      <button onClick={handleClick}>Obtener datos de la API</button>
      <ListGroup as='ul'>
      {data.map((item, index) => (
        <ListGroupItem as='li' key={index}>{item.name} </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default PokemonApi;

