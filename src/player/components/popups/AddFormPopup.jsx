import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, TextField, Tooltip, IconButton, Paper } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { addFormData } from '../../../store/form';

const AddFormPopup = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nombre: '',
    generos: '',
    integrantes: '',
    sitioWeb: '',
    imagen: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return (
      formData.nombre !== '' &&
      formData.generos !== '' &&
      formData.integrantes !== '' &&
      formData.sitioWeb !== '' &&
      formData.imagen !== ''
    );
  };

  const handleSubmit = () => {
    dispatch(addFormData(formData));
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper style={{ width: '60%', margin: 'auto'}}>
        <form>
          <TextField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Géneros"
            name="generos"
            value={formData.generos}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Integrantes"
            name="integrantes"
            value={formData.integrantes}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sitio Web"
            name="sitioWeb"
            value={formData.sitioWeb}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Imagen"
            name="imagen"
            value={formData.imagen}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <Tooltip  title="Guardar">
          <IconButton onClick={handleSubmit} disabled={!isFormValid()} >
              <AddCircleOutline />
            </IconButton>
          </Tooltip>
        </form>
      </Paper>
    </Modal>
  );
};

export default AddFormPopup;
