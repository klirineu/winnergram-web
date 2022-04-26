import React from 'react'
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

export const Spinner = () => {
   return (
      <Container className='spinner--container'>
         <CircularProgress 
            className="spinner"
         />
      </Container>
   )
}


const Container = styled.div`
   width: 100vw;
   height: 100%;
   .spinner{
      display: block;
      position: absolute;
      top: 50%;
      margin-top: -20px;
      left: 50%;
      margin-left: -20px;
      color: ${props => props.theme.primary};
   }
`;