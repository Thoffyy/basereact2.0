import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Container, Row, Image} from 'react-bootstrap';

ReactDOM.render(
<>
    <Container fluid className="banner" >
  <Row className="row1">
  <h1 className="white-text">ola mundo</h1>
  </Row>  

  <Row className="row2">

  <Image roundedCircle src="defaultAvatar.png" />

  </Row>
    </Container>
  <Container>

<h2>
  Quem sou eu?
</h2>

<p>
A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo rea
</p>

<h2>
  coisas aleatorias
</h2>

<p>
A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo rea
</p>

<h2>
  Lorem Ipsus
</h2>

<p>
A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo rea
</p>

<h2>
  Asid amet
</h2>

<p>
A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo rea
</p>















  </Container>








</>

,
  document.getElementById('root')
);