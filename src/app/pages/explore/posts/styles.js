import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;  
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fade .2s ease-in;
    
.containerResults { 
    margin: 30px 20% 10px 20%;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "TopPhotoLeft TopPhotoRight1"
        "TopPhotoLeft TopPhotoRight2"
        "MiddlePhoto MiddlePhoto"
        "MiddlePhoto MiddlePhoto"
        "BottomPhotoLeft BottomPhotoRight1"
        "BottomPhotoLeft BottomPhotoRight2";

    height: 500px;
}

.bottomPhotoLeft {
    width: 100%;
}

.bottomPhotoLeft { 
    grid-area: BottomPhotoLeft;
    margin: 15px 8px 0px 0px; 
}

.bottomPhotoRight1 { 
    grid-area: BottomPhotoRight1;
    margin: 16px 0px -41px 0px;
}

.bottomPhotoRight2 { 
    grid-area: BottomPhotoRight2;
    margin: 44px 0px -69px 0px;
}

.topPhotoLeft { 
    grid-area: TopPhotoLeft;
    margin: 0px 8px 0px 0px;
}

.topPhotoRight1 { 
    grid-area: TopPhotoRight1;
    margin: 0px 0px 9px 0px;
}

.topPhotoRight2 {
    grid-area: TopPhotoRight2;
}

.middlePhoto { 
    grid-area: MiddlePhoto;
    margin: 15px 0px 0px 0px;
}

`;
