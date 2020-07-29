import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

import Base from '../templates/Base';

function Video() {
  return (
    <Base>
      <h1>Cadastro de Video</h1>

      <Link to="/register/category">
        Cadastrar Categoria
      </Link>
    </Base>
  );
}

export default Video;
