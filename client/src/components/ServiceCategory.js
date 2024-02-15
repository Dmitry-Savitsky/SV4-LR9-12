import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';

const ServiceCategory = ({ category, items }) => {
  const [services, setServices] = useState(items);

  const handleAddService = () => {
    const newServiceName = prompt('Enter the name of the new service:');
    if (newServiceName) {
      const newService = { name: newServiceName };
      setServices([...services, newService]);
    }
  };

  const handleDeleteService = (index) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    setServices(updatedServices);
  };

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <Card>
            <Card.Header style={styles.header}>{category}</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {services.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row className="justify-content-between"> {/* Добавлен класс justify-content-between */}
                      <Col>{item.name}</Col>
                      <Col xs="auto"> {/* Используем класс xs="auto" для правильного выравнивания */}
                        <Button variant="danger" onClick={() => handleDeleteService(index)}>Delete</Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
                <Button variant="primary" className="mt-3" onClick={handleAddService}>Add Service</Button>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
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

export default ServiceCategory;
