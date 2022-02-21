import React from 'react'
//import { Container, Card, Button, Form  } from 'react-bootstrap';
import Formulario from '../components/Formulario';
import { useState } from "react";

const Inicio = () => {
    const [category, setCategory] = useState("");   
    const [difficulty, setDifficulty] = useState("");
    const [name, setName] = useState("")
  return (<>
    <Formulario 
        category={category}
        setCategory={setCategory}
        difficulty ={difficulty}
        setDifficulty = {setDifficulty}
        name={name}
        setName = {setName}/>        
  </>)
}

export default Inicio