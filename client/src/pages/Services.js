import React from 'react';
import { Container } from 'react-bootstrap';
import ServiceCategory from '../components/ServiceCategory';
import jsonData from '../json/Services';

const Services = () => {
  return (
    <div className="services-page-container">
      <Container className="mb-5"> {/* Добавляем нижний отступ с помощью класса mb-5 */}
        {jsonData.Services.map((service, index) => (
          <ServiceCategory
            key={index}
            category={service.category}
            items={service.items}
          />
        ))}
      </Container>
    </div>
  );
};

export default Services;
