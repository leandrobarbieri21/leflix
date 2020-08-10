import React from 'react';
import { Link } from 'react-router-dom';

import Base from '../../templates/Base';

function Error404() {
  return (
    <Base>
      <h1>Erro 404</h1>
      <h2>Ops... Acredito que você esteja perdido.</h2>

      <Link to="/">
        Retornar a Página Inicial
      </Link>
    </Base>
  );
}

export default Error404;
