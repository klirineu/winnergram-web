import styled from 'styled-components';

export const Container = styled.div`
   header{
      padding: 50px 0 30px;
      background: ${props => props.theme.gradient};
      h2{
         margin-left: 10vw;
         text-align: start;
         color: #fff;
      }
      input[type="file"]{
         display: none;
      }
      .avatar{
         display: flex;
         justify-content: center;
      }
      .avatar--label{
         margin: 20px 0;
         position: relative;
         img{
            width: 140px;
            height: 140px;
            border-radius: 50%;
         }
      }
      .avatar--icon{
         width: 36px;
         height: 36px;
         padding: 4px;
         border-radius: 50%;
         background-color: #fff;
         color: #A39999;
         position: absolute;
         bottom: 0;
         right: 0;
         box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      }
   }
   main{
      margin: 0 auto;
      min-width: 300px;
      max-width: calc(425px + 20vw);
      padding: 50px 10vw;
      .username{
         margin-bottom: 20px;
         display: flex;
         justify-content: flex-end;
         align-items: center;
         svg{
            margin-left: 5px;
            font-size: 1.3rem;
            color: ${props => props.theme.primary};
         }
      }
      .inputs{
         & > div{
            margin-bottom: 25px;
         }
      }
      & > button{
         min-width: 150px;
         margin: 0 auto;
         padding: 12px 40px;
         border-radius: 10px;
         font-size: 1.2rem;
         font-weight: 600;
         background-color: ${props => props.theme.primary};
         color: #fff;
         display: flex;
         justify-content: center;
         align-items: center;
         span.MuiCircularProgress-root{
            color: #fff;
            width: 24px !important;
            height: 24px !important;
         }
      }
   }
`;