import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../redux/actions';
import './../styles/Menu.css';

const Menu = ({ onSubmit, onCancel, onSubmitSuccess, initialData }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);

  useEffect(() => {
    if (initialData) {
      dispatch(updateFormData(initialData));
    }
  }, [dispatch, initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onSubmitSuccess(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ ...formData, [name]: value }));
  };

  return (
    <div className="menu-container">
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Изображение URL:
          <input
            type="text"
            name="img"
            value={formData.img || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Опыт:
          <input
            type="text"
            name="experience"
            value={formData.experience || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Телефон:
          <input
            type="text"
            name="phone-number"
            value={formData['phone-number'] || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onCancel}>Отмена</button>
      </form>
    </div>
  );
};

export default Menu;
