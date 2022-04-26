import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	min-height: 100vh;
	padding-bottom: 100px;
	display: flex;
	flex-direction: column;
    animation: slide .25s ease-in;

	.container1 {
		margin: 4vh 0 2vh;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
        align-items: center;

		h3 {
            margin-left: -10px;

            display: inline;

			width: 60%;
			text-align: center;
			font-weight: 600;
		}
		svg {
            margin-right: 10px;
			font-size: 1.3rem;
		}
		& > div {
            margin: 0px 25px;

            display: flex;
            align-items: center;

			text-align: start;
		}
		& > div:nth-child(3) {
			display: flex;
			justify-content: center;
			align-items: center;
			svg {
				margin: 0 5px;
			}
			svg:nth-child(1) {
				font-size: 1.5rem;
			}
		}
	}

    @keyframes press {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.92);
        }
        to {
            transform: scale(1);
        }
    }
    @keyframes bounce {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(2);
            opacity: 0;
        }
        to{
            transform: scale(1);
            opacity: 1;
        }
    }

    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .card {
        width: 90px;

        margin: 20px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:active{
            animation: press 0.2s 1 linear;
        }
    }

    .card div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 80px;
        height: 80px;

        border-radius: 100%;

        background-color: rgb(124, 252, 0);
    }
    .card.active h3{
        color: #3CAEFC;
    }

    .card.love div{
        background-color: #3CAEFC;
        border: 1px solid #220C0F;
    }
    .card.gast div{
        background-color: #FFD766;
        border: 1px solid #FAC600;
    }
    .card.pic div{
        background-color: #8BC34A;
        border: 1px solid #689F38;
    }
    .card.esp div{
        background-color: #F7A41C;
        border: 1px solid #F0534A;
    }
    .card.ent div{
        background-color: #595B7E;
        border: 1px solid #C0DFB1;
    }
    .card.fin div{
        background-color: #36CD90;
        border: 1px solid #6AA9EF;
    }
    .card.edu div{
        background-color: #5F55AF;
        border: 1px solid #2D2755;
    }
    .card.mus div{
        background-color: #28C1D1;
        border: 1px solid #00A2B2;
    }
    .card.jog div{
        background-color: #413E51;
        border: 1px solid #CAE241;
    }
    .card.ani div{
        background-color: #6474A6;
        border: 1px solid #292D3C;
    }
    .card.fit div{
        background-color: #E4EAF8;
        border: 1px solid #040505;
    }
    .card.mod div{
        background-color: #40A6DD;
        border: 1px solid #36CD90;
    }
    .card.cri div{
        background-color: #FEF6AA;
        border: 1px solid #8F9EB6;
    }
    .card.out div{
        background-color: #1E262E;
        border: 1px solid #1E262E;
    }

    .card h3 {
        margin-top: 5px;
        font-weight: 800;
        font-size: 17px;
        transition: .2s linear;
    }

    .card img {
        width: 60px;
        height: 60px;
        display: inline;
    }
    .card.active img{
        animation: bounce 0.4s 1 linear;
    }
    
    .monitor {
        width: 65px!important;
        height: 65px!important;
    }

    .dumbbell {
        width: 50px!important;
        height: 50px!important;
    }


    .bottom {
        margin-top: 50px;

        display: flex;
        justify-content: center;
    }

    button {
        width: 200px;
        height: 48px;

        font-size: 25px;
        font-weight: 700;

        border-radius: 20px;
    }

`;
