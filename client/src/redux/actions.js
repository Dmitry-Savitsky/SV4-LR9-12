// MENU

export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';

export const updateFormData = (formData) => ({
  type: UPDATE_FORM_DATA,
  payload: formData,
});

// SERVICECATEGORY.js

export const ADD_SERVICE = 'ADD_SERVICE';
export const DELETE_SERVICE = 'DELETE_SERVICE';

export const addService = (category, service) => ({
  type: ADD_SERVICE,
  payload: { category, service },
});

export const deleteService = (category, index) => ({
  type: DELETE_SERVICE,
  payload: { category, index },
});
