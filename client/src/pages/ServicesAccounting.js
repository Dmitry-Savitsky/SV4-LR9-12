import React from 'react';
import './../styles/ServicesAccounting.css';
import notariesData from '../json/Notaries.json'; // Импортируем данные о нотариусах
import servicesData from '../json/ServicesAccounting.json'; // Импортируем данные о услугах

const ServicesAccounting = () => {
    return (
        <div className="services-accounting-page-container">
            <h1>Учет услуг</h1>
            <table>
                <thead>
                    <tr>
                        <th>Нотариус</th>
                        <th>Услуга</th>
                        <th>Цена</th>
                        <th>Дата</th>
                    </tr>
                </thead>
                <tbody>
                    {notariesData.map(notary => {
                        // Найдем услугу, соответствующую данному нотариусу
                        const service = servicesData.find(service => service['id-notary'] === notary.id);
                        return (
                            <tr key={notary.id}>
                                <td>{notary.name}</td>
                                <td>{service ? service.name : '-'}</td>
                                <td>{service ? service.price : '-'}</td>
                                <td>{service ? service.date : '-'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ServicesAccounting;
