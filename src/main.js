import * as React from 'react'
import { Navbar,Nav } from 'react-bootstrap'


export default function main(){
    return(<>
<Navbar bg="dark" variant="dark">

        <Navbar.Brand>Thoffy's webpage</Navbar.Brand>
        <Nav>
            <Nav.Link>about</Nav.Link>
            <Nav.Link>notes</Nav.Link>
            <Nav.Link>blog</Nav.Link>
            <Nav.Link>notices</Nav.Link>











        </Nav>


</Navbar>

<About/>

    </>)
}