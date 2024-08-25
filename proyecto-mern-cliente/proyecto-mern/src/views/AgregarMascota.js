import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormularioMascota from '../components/FormularioMascota';

const AgregarMascota = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const createPet = pet => {
    axios.post('http://localhost:8000/api/pets', pet)
      .then(res => navigate('/'))
      .catch(err => setErrors(err.response.data.errors)); // Capturar errores y establecer en el estado
  };

  return (
    <div>
       <h1>Refugio para mascotas</h1>
       <h2>Registrar Mascota</h2>
      <FormularioMascota onSubmitProp={createPet} errors={errors} /> {/* Pasar errores al componente FormularioMascota */}
    </div>
  );
};
export default AgregarMascota;
