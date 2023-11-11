import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Container, Row, Image} from 'react-bootstrap';

ReactDOM.render(

  <Container fluid className="banner" >
<Row className="row1">
  <h1 className="white-text">ola mundo</h1>
</Row>  

<Row className="row2">
  
  <Image roundedCircle src="defaultAvatar.png" />

</Row>
  </Container>
,
  document.getElementById('root')
);