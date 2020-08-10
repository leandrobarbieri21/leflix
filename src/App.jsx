import React, { useState, useEffect } from 'react';

import categoriesRepository from './repositories/categories';

import Base from './pages/templates/Base';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';

function App() {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    async function loadHome() {
      const result = await categoriesRepository.getAllCategoriesWithVideos();
      setHomeData(result);
    }

    loadHome();
  }, []);

  return (
    <Base paddingAll={0}>
      {homeData.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      {homeData.map((item, index) => {
        if (index === 0) {
          return (
            <div key={homeData[0].id}>
              <BannerMain
                videoTitle={homeData[0].videos[0].title}
                url={homeData[0].videos[0].url}
                videoDescription={`Como o react funciona? Já parou pra pensar como o React renderiza as coisas na tela da suas apps?
                Nesse vídeo vamos fazer do ZERO uma implementação em cima da API do React atual,
                fazendo toda a parte de renderização e entendendo como o Virtual DOM,
                JSX entre outras coisas bases para a renderização do React funcionar, ficou curioso? Bora ver! ⚛`}
              />

              <Carousel
                key={homeData[0].id}
                ignoreFirstVideo
                category={homeData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={item.id}
            category={item}
          />
        );
      })}
    </Base>
  );
}

export default App;
