import styled from 'styled-components';

export const Container = styled.div`
animation: fade .25s ease-in;
height: 100vh;
   .userAvatar{
      width: 40px;
      height: 40px;
      border-radius: 50%;
   }
   header{
      width: 100%;
      margin: 0;
      padding: 30px 5% 10px;
      background-color: #fff;
      position: fixed;
      top: 0;
      left: 0;
   }
   section{
      width: 90%;
      height: 100%;
      margin: 0 auto;
      padding-top: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .post{
         margin: 0;
      }
      .main {
         height: 90%;
         display: flex;
         flex-direction: column;
         h3{
            margin: 10px 0;
         }
         & > div:nth-child(1){
            max-height: 50%;
            overflow: auto;
            margin: 5px 0;
         }
         .comentsArea{
            overflow: auto;
            min-height: 40%;
            flex: 1;
         }
      }
   }
   .inputArea{
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .box{
         width: 85%;
         height: 40px;
         border-radius: 20px;
         border: 1px solid #707070;
         padding: 0 10px;
         display: flex;
         align-items: center;
         font-size: 1.2rem;
         input{
            width: 100%;
            height: 80%;
            margin-right: 5px;
            font-size: 1rem;
            border: none;
            text-align: start;
            outline: none;
         }
         button{
            background: none;
            display: flex;
            align-items: center;
         }
         svg{
            font-size: 1.3rem;
            cursor: pointer;
         }
      }
   }
   .coment{
      margin: 25px 0;
      display: flex;
      align-items: flex-start;
      .content{
         width: 100%;
         margin: 0 10px;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         p{
            font-size: 0.8rem;
            text-align: start;
         }
         h5{
            font-weight: 400;
            display: inline-block;
         }
         .text{
            font-size: 0.9rem;
         }
      }
      .coment--like{
         cursor: pointer;
         height: fit-content;
         font-size: 1.5rem;
         color: ${props => props.theme.primary};
         svg{
            animation: fade .2s ease-in;
         }
      }
   }
`;