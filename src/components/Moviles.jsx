import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaMoviles, DatosTablaMoviles } from '../data/DatosMoviles';
import './moviles.css';

class Moviles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      referenciaPulsado: DatosTablaMoviles[0].referencia,
      marcaPulsado: DatosTablaMoviles[0].marca,
      modeloPulsado: DatosTablaMoviles[0].modelo,
      colorPulsado: DatosTablaMoviles[0].color,
      descripcionPulsado: DatosTablaMoviles[0].descripción,
      imagenPulsado: DatosTablaMoviles[0].imagen,
    };
  }

  changeStateClicked(item) {
    this.setState({
      referenciaPulsado: item.referencia,
      marcaPulsado: item.marca,
      modeloPulsado: item.modelo,
      colorPulsado: item.color,
      descripcionPulsado: item.descripción,
      imagenPulsado: item.imagen,
    });
  }
  render() {
    return (
      <div className="main-site">
        <h1>Móviles</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
             <Table responsive striped hover>
                <thead>
                <tr
                   key={uuid()}
                   onClick={() => this.changeSelected(item)}
                      >
                    <th>{TitulosTablaMoviles.id}</th>
                    <th>{TitulosTablaMoviles.field1}</th>
                    <th>{TitulosTablaMoviles.field2}</th>
                    <th>{TitulosTablaMoviles.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaMoviles.map((item) => {
                    return (
                      <tr onClick={() => this.changeStateClicked(item)}>
                        <td>{item.referencia}</td>
                        <td>{item.marca}</td>
                        <td>{item.modelo}</td>
                        <td>{item.color}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={this.state.imagenPulsado} />
                <Card.Body>
                  <Card.Title>{this.state.marcaPulsado}</Card.Title>
                  <Card.Text>
                    Referencia: {this.state.referenciaPulsado}
                    <p />
                    {this.state.descripcionPulsado}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Moviles;
