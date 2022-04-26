import styled from 'styled-components';

export const Container = styled.div`
animation: slide .25s ease-in;
   main{
      padding: 40px 0 120px;
      width: 90%;
      margin: auto;
   }
   .resumo{
      text-align: start;
      label {
         font-weight: 600;
      }
      textarea{
         font-size: 1rem;
         ::placeholder{
            color: rgba(0, 0, 0, 0.7);
         }
      }
   }
   .hashtags{
      margin: 30px 0 ;
      svg{
         color: #000;
         font-size: 1.5rem;
      }
      input{
         font-size: 1rem;
         ::placeholder{
            color: rgba(0, 0, 0, 0.7);
         }
      }
   }
   .hashtags--itens{
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      span{
         margin: 5px 5px 5px 0;
         padding: 5px 12px;
         background-color: #3caefc;
         border-radius: 20px;
         display: flex;
         align-items: center;
         font-size: 0.8rem;
         color: white;
         font-weight: bold;
         animation: fade .3s ease-in;
      }
      svg{
         color: #fff;
         font-size: 1rem;
         margin-left: 4px;
         cursor: pointer;
      }
   }
   .uploads{
      display: flex;
      justify-content: space-between;
      label:nth-child(1){
         margin-right: 10px;
      }
      & > label{
         width: 100%;
         cursor: pointer;
         & > div, span{
            display: flex;
            justify-content: center;
            align-items: center;
         }
         span{
            margin: 0 5px;
         }
      }
   }
   .preview{
      margin-top: 20px;
      max-height: 250px;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      align-items: center;
      position: relative;
      animation: fade .4s linear;
      img, video{
         width: 100%;
      }
      video{
         align-self: flex-end;
      }
      .preview--close{
         position: absolute;
         top: 20px;
         right: 20px;
         z-index: 100;
         padding: 5px;
         background-color: #fff;
         color: ${props => props.theme.primary};
         border-radius: 50%;
         font-size: 1.5rem;
         display: flex;
         align-items: center;
      }
   }

   button{
      margin-top: 40px;
      background-color: ${props => props.theme.primary};
      color: #fff;
      font-weight: 600;
      font-size: 1.2rem;
      padding: 10px 40px;
      border-radius: 10px;
         span.MuiCircularProgress-root{
         color: #fff;
         width: 24px !important;
         height: 24px !important;
   }
   }
`;