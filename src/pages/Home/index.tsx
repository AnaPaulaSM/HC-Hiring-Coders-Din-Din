import React from 'react';
import Header from '../../components/Header/index';
import Box from '../../components/Box';
import Banner from '../../assets/images/banner.png';
import '../../styles/global.css';

function Home() {
  return (
    <div className="App">
      <Header />
      <main>
        <Box background='claro'>
        <div>
          <h1>Educação financeira é tudo de bom.</h1>
        </div>
        <div className='banner'>
        <img src={Banner} alt='banner' />
        <p>Vem comigo que te mostro por onde começar</p>
          <button className='button'>quero saber mais</button>
        </div>
        </Box>
          <Box background='escuro'>
        </Box>
      </main>
    </div>
  );
}

export default Home;
