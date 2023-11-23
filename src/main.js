import * as React from 'react'
import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Notes from './notes.js'
import About from './about.js'

export default function Main() { // Corrigido para 'Main' com a primeira letra em maiúscula

  const [currentPage, setCurrentPage] = useState(1) // Corrigido para 'currentPage' em vez de 'currentState'

  if (currentPage === 1) { // Corrigido para '===' para comparação
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Thoffy's webpage</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => { setCurrentPage(1); }}>about</Nav.Link>
            <Nav.Link onClick={() => { setCurrentPage(2); }}>notes</Nav.Link>
            <Nav.Link onClick={() => { setCurrentPage(3); }}>blog</Nav.Link>
            <Nav.Link onClick={() => { setCurrentPage(4); }}>notices</Nav.Link>
          </Nav>
        </Navbar>
        <About />
      </>
    );
  }

  if (currentPage === 2) { // Corrigido para '===' para comparação
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Thoffy's webpage</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => { setCurrentPage(1); }}>about</Nav.Link>
            <Nav.Link onClick={() => { setCurrentPage(2); }}>notes</Nav.Link>
            <Nav.Link onClick={() => { setCurrentPage(3); }}>blog</Nav.Link>
            <Nav.Link onClick={() => { setCurrentPage(4); }}>notices</Nav.Link>
          </Nav>
        </Navbar>
        <Notes />
      </>
    );
  }

  // Adicione outras condições conforme necessário

  return null; // Ou algo padrão se currentPage não corresponder a nenhuma condição
}
