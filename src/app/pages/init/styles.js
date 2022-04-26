import styled from 'styled-components';

export const Container = styled.div`
*{
    font-family: 'Rubik', sans-serif;
}
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    animation: fade 0.6s linear;

	${props => props.theme.fadeTransition}

    section.enter{
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .enter .button{
        svg{
            margin-right: 20px;
            font-size: 1.5rem;
        }
        display: flex;
        align-items: center;
        padding: 20px 40px 20px 20px;
    }
    .sign{
        display: flex;
        flex-direction: column;
        a{
            font-weight: 500;
            color: ${props => props.theme.primary};
        }
    }

    .socials{
        
    }
`;