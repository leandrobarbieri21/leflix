import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{background: "#0B0500" }}>
      <Menu/>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={`Como o react funciona? Já parou pra pensar como o React renderiza as coisas na tela da suas apps? 
          Nesse vídeo vamos fazer do ZERO uma implementação em cima da API do React atual, 
          fazendo toda a parte de renderização e entendendo como o Virtual DOM, 
          JSX entre outras coisas bases para a renderização do React funcionar, ficou curioso? Bora ver! ⚛`}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Footer />

    </div>
  );
}

export default App;
