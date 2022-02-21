import React, { useEffect, useState } from 'react'
import { Col, Container, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Scores from '../components/Scores';
import Trivia from '../components/Trivia';
import { URLBASE } from '../utils/apis';

const Jugar = () => {
  const params = useParams();
  const nombreJugador = params.nombre;  
  const categoria = params.categoria; 
  const dificultad = params.dificultad; 
  const [trivia, setTrivia] = useState([]);
  const [numero, setNumero] = useState(0);
  const [puntos, setPuntos] = useState(0);
  
  const desOrdenar = (arr) => arr.sort(()=> Math.random() -0.5);  

  useEffect(() => {
    const cargarTrivia = async() => {
      const url = `${URLBASE}/api.php?amount=10&category=${categoria}&difficulty=${dificultad}&type=multiple`
      const response = await fetch(url);
      const data = await response.json();
      setTrivia(data.results.map(item => (
        {
            pregunta: item.question,
            opciones: desOrdenar([...item.incorrect_answers, item.correct_answer]),
            respuesta: item.correct_answer
        }
    )));
    };
    cargarTrivia();
  }, [categoria, dificultad]);
  
  
  return (

<>
    <Header 
      nombreJugador = {nombreJugador}
      dificultad = {dificultad}
      puntos = {puntos}
    /> 
    

    <Container className='container-fuid'>
    <Row className='col-lg '>
      <Col className='lg 3'>
       
          <Trivia 
            trivia = {trivia}
            numero = {numero}
            setNumero = {setNumero}
          /> 
         
      </Col>
      <Col className='mt-4 col-lg-3'>
          <Scores 
          numero = {numero}
          puntos = {puntos}
          setPuntos = {setPuntos}
          />
      </Col>
    </Row>
    
    </Container>

 

    </>
  )
}

export default Jugar