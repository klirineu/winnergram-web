import React from 'react';
import { Container } from './styles';

import { BsChat } from "react-icons/bs";
import { IoSettingsOutline, IoAddCircleOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

export const Rank = () => {
  return (
     <Container>

        <div className="container1">
            <div>
                <IoIosArrowBack />
                <h3>Ranking</h3>
            </div>

            <div>
                <BsChat />
                <IoAddCircleOutline />
                <IoSettingsOutline />
            </div>
        </div>

        <div className='container2'>
            <div className='position'>
                <img src='https://cdn.discordapp.com/attachments/669349508831772683/936862118509166633/Imagem_38.png'  alt='avatar do usuário' />

                <div className='placeContainer2'>
                    <h1>2</h1>
                </div>
            </div>

            <div className='position'>
                <img src='https://cdn.discordapp.com/attachments/669349508831772683/936862118509166633/Imagem_38.png'  alt='avatar do usuário' />

                <div className='placeContainer1'>
                    <h1>1</h1>
                </div>
            </div>

            <div className='position'>
                <img src='https://cdn.discordapp.com/attachments/669349508831772683/936862118509166633/Imagem_38.png'  alt='avatar do usuário' />

                <div className='placeContainer3'>
                    <h1>3</h1>
                </div>
            </div>
        </div>

        <div className='container3'>
            <div className='user'>
                <div className='userContainer1'>
                    <img src='https://cdn.discordapp.com/attachments/669349508831772683/936862118509166633/Imagem_38.png' alt='avatar do usuário' />
                    <h4>MarcoMacias</h4>
                </div>

                <h4>4º Lugar</h4>
            </div>

            <div className='user'>
                <div className='userContainer1'>
                    <img src='https://cdn.discordapp.com/attachments/669349508831772683/936862118509166633/Imagem_38.png' alt='avatar do usuário' />
                    <h4>Vitor Ribeiro</h4>
                </div>

                <h4>5º Lugar</h4>
            </div>

            <div className='user'>
                <div className='userContainer1'>
                    <img src='https://cdn.discordapp.com/attachments/669349508831772683/936862118509166633/Imagem_38.png' alt='avatar do usuário' />
                    <h4>Vinicius</h4>
                </div>

                <h4>6º Lugar</h4>
            </div>
        </div>

     </Container>
  );
}