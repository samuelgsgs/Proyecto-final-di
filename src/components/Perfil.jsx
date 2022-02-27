import React from 'react';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '' };

    //Campos de modificacion.
    this.inputUser = React.createRef();
  }

  cerrarSesion() {
    localStorage.clear();
    location.href = '#';
  }

  guardarCambios() {
    this.setState({ user: this.inputUser.current.value });
    localStorage.setItem('user', this.state.user);
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
    });
  }

  render() {
    return (
      <Container className="center">
        <Form>
          <InputGroup
            style={{
              margin: '20px',
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            {localStorage.getItem('user')}
          </InputGroup>
          <Card
            style={{
              width: '20rem',

              border: 'black 10px solid',
            }}
          >
            <Card.Img variant="top" src={localStorage.getItem('imagen')} />
          </Card>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cambiar Nickname</Form.Label>
            <Form.Control
              type="text"
              placeholder={localStorage.getItem('user')}
              ref={this.inputUser}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={this.guardarCambios.bind(this)}
            style={{ margin: '15px' }}
          >
            Guardar Cambios
          </Button>
          <Button
            variant="primary"
            onClick={this.cerrarSesion.bind(this)}
            style={{ margin: '15px' }}
          >
            Cerrar sesión
          </Button>
        </Form>
      </Container>
    );
  }
  componentWillUnmount() {
    localStorage.setItem('user', this.state.user);
  }
}

export default Perfil;
