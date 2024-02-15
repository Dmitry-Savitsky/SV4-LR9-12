// AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Notaries from '../pages/Notaries';
import ServicesAccounting from '../pages/ServicesAccounting';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services'
import Clients from '../pages/Clients';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/notaries" element={<Notaries />} />
      <Route path="/servicesAccounting" element={<ServicesAccounting />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path='/clinets' element={<Clients />} />
    </Routes>
  );
};

export default AppRoutes;

// функциональный компонент
// классовый компонент
// компонент стрелочной функции 