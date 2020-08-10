import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import videosRepository from '../../repositories/videos';
import categoriesRepository from '../../repositories/categories';

import Base from '../templates/Base';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

// import { Container } from './styles';

function Video() {
  const history = useHistory();

  const initialValues = {
    title: '',
    url: '',
    category: '',
  };

  const { formData, handleInputChange } = useForm(initialValues);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const result = await categoriesRepository.getAllCategories();
      setCategories([...result]);
    }

    loadCategories();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const categorySelected = categories.find((category) => category.title === formData.category);

    await videosRepository.create({
      title: formData.title,
      url: formData.url,
      categoryId: categorySelected.id,
    });

    history.push('/');
  }

  return (
    <Base>
      <h1>Cadastro de Video</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Título:"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <FormInput
          label="URL:"
          name="url"
          value={formData.url}
          onChange={handleInputChange}
        />

        <FormInput
          label="Categoria:"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          suggestions={categories.map((caterogy) => caterogy.title)}
        />

        <div>
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>

      <div style={{ marginTop: 24 }}>
        <Link to="/register/category">
          Cadastrar Categoria
        </Link>
      </div>
    </Base>
  );
}

export default Video;
