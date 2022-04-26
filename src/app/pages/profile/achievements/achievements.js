import React from 'react';
import { Container } from './styles';

import trophy from '../../../../assets/trophy.png';
import conquistaImg from '../../../../assets/conquistas.png';


export const Achievements = () => {
  return (
     <Container>        
        <div className='achievements'>
            <h1>Conquistas</h1>

            <div className='achievementsCards'>
                <div className='card'>
                    <img src={conquistaImg} alt='Imagem de uma conquista' />
                </div>

                <div className='card'>
                    <img src={conquistaImg} alt='Imagem de uma conquista' />
                </div>

                <div className='card'>
                    <img src={conquistaImg} alt='Imagem de uma conquista' />
                </div>

                <div className='card'>
                    <img src={conquistaImg} alt='Imagem de uma conquista' />
                </div>

                <div className='card'>
                    <img src={conquistaImg} alt='Imagem de uma conquista' />
                </div>

                <div className='card'>
                    <img src={conquistaImg} alt='Imagem de uma conquista' />
                </div>

                <div className='card'>
                    <img src={conquistaImg} alt='Imagem de uma conquista' />
                </div>

                <div className='card'>
                    <img src={conquistaImg} alt='Imagem de uma conquista' />
                </div>
            </div>
        </div>

        <div className='statistics'>
            <h1>Estátisticas</h1>

            <div className='statisticsList'>
                <div className='list geral'>
                    <h3>Geral</h3>
                    <h3>42º Lugar</h3>
                </div>

                <div className='list metas'>
                    <h3>Geral</h3>
                    <h3>73º Lugar</h3>
                </div>

                <div className='list likes'>
                    <h3>Geral</h3>
                    <h3>23º Lugar</h3>
                </div>

                <div className='list coments'>
                    <h3>Geral</h3>
                    <h3>3º Lugar</h3>
                </div>
            </div>
        </div>
     </Container>
  );
}

export const Header2 = () => {
    return(
        <div className='header header2'>
            <div className='trophyDiv'>
                <img className='trophy' alt="trophy illustration" src={trophy}/>
            </div>

            <h1>Estátisticas</h1>
        </div>
    )
}