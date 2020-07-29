import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

import Base from '../templates/Base';
import FormInput from '../../components/FormInput';

function Category() {
  const initialValues = {
    name: '',
    description: '',
    color: '#00A878',
  };

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(initialValues);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setCategory({ ...category, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setCategories([
      ...categories,
      category
    ]);

    setCategory(initialValues);
  }

  return (
    <Base>
      <h1>Cadastro de Categoria: {category.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nome da Categoria"
          type="text"
          name="name"
          value={category.name}
          onChange={handleInputChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="description"
              value={category.description}
              onChange={handleInputChange} 
            />
          </label>
        </div>

        <FormInput
          label="Cor"
          type="color"
          name="color"
          value={category.color}
          onChange={handleInputChange}
        />

        <div>
          <button>Cadastrar</button>
        </div>
      </form>

      <ul>
        {categories &&
         categories.map((category, index) => (
          <li key={`${category.name}-${index}`}>{category.name}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </Base>
  );
}

export default Category;
