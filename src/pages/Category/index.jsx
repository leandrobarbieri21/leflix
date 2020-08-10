import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import categoriesRepository from '../../repositories/categories';

import Base from '../templates/Base';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

// import { Container } from './styles';

function Category() {
  const initialValues = {
    title: '',
    description: '',
    color: '#00A878',
  };

  const { formData, handleInputChange, clearForm } = useForm(initialValues);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const result = await categoriesRepository.getAllCategories();
      setCategories([...result]);
    }

    loadCategories();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    setCategories([
      ...categories,
      formData,
    ]);

    clearForm();
  }

  return (
    <Base>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Título da Categoria:"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <FormInput
          label="Descrição:"
          type="textarea"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />

        <FormInput
          label="Cor:"
          type="color"
          name="color"
          value={formData.color}
          onChange={handleInputChange}
        />

        <div>
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories
         && categories.map((item) => (
           <li key={item.id}>{item.title}</li>
         ))}
      </ul>

      <div style={{ marginTop: 24 }}>
        <Link to="/">
          Ir para Home
        </Link>
      </div>
    </Base>
  );
}

export default Category;
