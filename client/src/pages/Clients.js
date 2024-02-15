import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import jsonData from '../json/Clinets.json';

const Clients = () => {
  return (
    <Container className="m-4" >
      <h1 className="mb-4">Список клиентов</h1>
      <Row>
        {jsonData.clients.map((client) => (
          <Col key={client.id} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{client.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{client.email}</Card.Subtitle>
                <Card.Text>
                  <strong>Phone:</strong> {client.phone}<br />
                  <strong>Address:</strong> {client.address}<br />
                  <strong>Notes:</strong> {client.notes}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const styles = {
    header: {
      backgroundColor: '#9b9779',
      color: '#fff',
    },
  };

export default Clients;
