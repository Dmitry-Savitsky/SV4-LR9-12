import React, { useState } from 'react';
import './../styles/Notaries.css';
import notariesData from '../json/Notaries.json'; 
import NotaryCard from '../components/NotaryCard'; 
import Menu from '../components/Menu'; 

const Notaries = () => {
    const [notaries, setNotaries] = useState(notariesData);
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleSubmit = (formData) => {
        // Обрабатываем данные формы
        console.log('Form data:', formData);
    };

    const handleSubmitSuccess = (formData) => {
        // Обновляем состояние или выполняем другие действия после успешной отправки формы
        console.log('Form submitted successfully:', formData);
        // Обновляем список нотариусов
        setNotaries([...notaries, formData]);
    };

    const handleDelete = (notaryId) => {
        // Функция для удаления нотариуса из списка по его идентификатору
        setNotaries(notaries.filter(notary => notary.id !== notaryId));
        console.log('Object deleted successfully:', notaryId);
    };

    const handleCancel = () => {
        setShowMenu(false);
    };

    return (
        <div className="notaries-page-container">
            <div className='notaries-page-header'>
                <h1 className="title">Список нотариусов:</h1>
                <ul>
                    <li>
                        {/* Кнопка вызова меню */}
                        <button onClick={handleToggleMenu}> Добавить </button>
                        {/* Показываем меню, если showMenu === true */}
                        {showMenu && <Menu onSubmit={handleSubmit} onSubmitSuccess={handleSubmitSuccess} onCancel={handleCancel} />}
                    </li>
                </ul>
            </div>

            <div className='notaries-page-body'>
                {notaries.map(notary => (
                    <NotaryCard key={notary.id} notary={notary} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default Notaries;
