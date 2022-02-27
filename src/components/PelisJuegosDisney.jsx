import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
//import '../table_component.css';
//import { DatosTablaJuegos } from '../data/DatosJuegos';

class PelisJuegosDisney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      tableData: [],
    };
  }

  eventoclick(item) {
    this.setState({
      imageUrl: item.imageUrl,
      films: item.films,
      videoGames: item.videoGames,
    });
  }
  async componentDidMount() {
    const response = await fetch('https://api.disneyapi.dev/characters');
    const responseData = await response.json();

    this.setState({
      tableData: responseData.data.filter(
        (item) => item.videoGames.length || item.films.length > 0
      ),
    });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Películas y juegos Disney</h1>
        <h4>Si el campo está vacío es que no existe película o videojuego.</h4>
        <Container>
          <Row>
            <Col lg={10} md={16}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Películas</th>
                    <th>Videojuegos</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.eventoclick(item)}>
                        <td>{item.films}</td>
                        <td>{item.videoGames}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={2} md={6}>
              {' '}
              <Card variant="outlined" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={this.state.imageUrl} style={{border: 'black 10px solid'}} />
                <Card.Body>
                  <Card.Title>
                    {'Películas: ' + this.state.films}
                    <p />
                    {"Videojuegos: " + this.state.videoGames}
                    <p />

                  </Card.Title>
                  <Card.Text>
                    {this.state.current_price}
                    <p />
                    {this.state.high_24h}
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

export default PelisJuegosDisney;
