import React from 'react';
import { Container } from './styles';
import img from "../../../assets/emptyill.png"

export const Empty = () => {
  return (
     <Container>
        <div>
            <img src={img} alt="empty page" />
            <h3>Nenhuma Atividade</h3>
        </div>
     </Container>
  )
};
