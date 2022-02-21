import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Header = ({nombreJugador, dificultad, puntos}) => {

  return (        
        <Navbar bg="light">
        <Container>
            <Navbar.Brand href="/">
              <img
                src="/logo.svg"
                width="30"
                height="30"
                className=""
                alt="Salir"
              />
            </Navbar.Brand>
            <Navbar.Collapse className="">
              <Navbar.Text> 
                Nombre : {nombreJugador}
              </Navbar.Text>
            </Navbar.Collapse>

            <Navbar.Collapse className="justify-content-center">
              <Navbar.Text> 
                Dificultad : {dificultad}
              </Navbar.Text>
            </Navbar.Collapse>
            
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text> 
                Ganancia : {puntos}
              </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  )
}

export default Header