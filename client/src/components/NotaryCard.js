import React, { useState } from 'react';
import './../styles/NotaryCard.css';
import Menu from './Menu';

const NotaryCard = ({ notary, onDelete }) => {
  const [currentNotary, setCurrentNotary] = useState(notary);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [editingData, setEditingData] = useState({});

  const handleShowDetailsPopup = () => {
    setShowDetailsPopup(true);
  };

  const handleCloseDetailsPopup = () => {
    setShowDetailsPopup(false);
  };

  const handleShowEditMenu = () => {
    
    setEditingData(currentNotary);
    
    setShowEditMenu(true);
  };

  const handleCloseEditMenu = () => {
    setShowEditMenu(false);
  };

  const handleDelete = () => {
    onDelete(currentNotary.id);
  };

  const handleSubmit = (formData) => {
   
    console.log('Form data:', formData);

    handleCloseEditMenu();
  };

  const handleSubmitSuccess = (formData) => {
    
    console.log('Form submitted successfully:', formData);
    
    setCurrentNotary(formData);
  };

  return (
    <div className="notary-card">
      <img src={currentNotary.img} alt={currentNotary.name} />
      <p>{currentNotary.name}</p>
      <button onClick={handleShowDetailsPopup}>Подробнее</button>
      {showDetailsPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>{currentNotary.name}</h3>
            <img src={currentNotary.img} alt={currentNotary.name} />
            <p>Опыт работы: {currentNotary.experience}</p>
            <p>Телефон: {currentNotary['phone-number']}</p>
            <div className="action-buttons">
              
              <button onClick={handleShowEditMenu}>Редактировать</button>
              <button onClick={handleDelete}>Удалить</button> 
            </div>
            <button className="close-button" onClick={handleCloseDetailsPopup}>Закрыть</button>
          </div>
        </div>
      )}
      
      {showEditMenu && (
        <Menu initialData={editingData} onSubmit={handleSubmit} onCancel={handleCloseEditMenu} onSubmitSuccess={handleSubmitSuccess} />
      )}
    </div>
  );
};

export default NotaryCard;
