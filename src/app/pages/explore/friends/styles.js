import styled from 'styled-components';

export const Container = styled.div`
margin-top: 40px;
animation: fade .2s ease-in;
flex: 1;
overflow: auto;

    .userAvatar {
        border-radius: 50%;
    }


    .user {
        margin: 0px 20px 10px 20px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        img {
            display: inline;
            width: 40px;
            height: 40px;
        }

        svg {
            font-size: 1rem;
            color: black;
        }

        h3, h5 {
            text-align: start;
            margin-left: 10px;
            font-size: 13px;
        }

        h5 {
            margin-top: -5px;
            color: #6D6D6D;
        }
    
        .userInfos {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }
`;
