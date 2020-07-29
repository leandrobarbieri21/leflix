import React from 'react';

import { Main } from './styles';

import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';

function Base({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default Base;
