import React, { useEffect } from 'react'
import { Card, Col } from 'react-bootstrap'
import { trivia_score } from '../data/Data'
import ScoreItem from './ScoreItem';

const Scores = ({numero, puntos, setPuntos}) => {

    useEffect(() => {
        
       if((numero >= 1) && (numero <= 10) ) {
            if(numero>1) document.getElementById(numero-1).style.background = 'white';            
            document.getElementById(numero).style.background = 'yellow';
            setPuntos(puntos + ((numero) * 1000));
        }
        
    }, [numero]);
    
 


  return (
    <Card>
        <Card.Header>
            Score
        </Card.Header>                

        <Card.Body>
            {trivia_score.map((score, index)=>(
                <Col key={score.id} id = {score.id} className="mt-3">
                <ScoreItem score = {score}/>
                </Col>
                ))}      
           
        </Card.Body>

    </Card>
  )
}

export default Scores