import styled from 'styled-components';

export const Container = styled.div`
  	width: 100%;
	min-height: 100vh;
	padding-bottom: 100px;
	display: flex;
	flex-direction: column;
    background: linear-gradient(to bottom, #3BADFC, #278ACE);

    * {
        font-family: 'Rubik', sans-serif;
    }

	.container1 {
		margin: 4vh 0 2vh;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
        align-items: center;
        color: #FFFFFF;

		h3 {
            margin-left: -10px;

            display: inline;

			width: 60%;
			text-align: center;
			font-weight: 400;
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

    .container2 {
        display: flex;
        justify-content: center;
        flex-direction: row;
        color: #FFFFFF;

        .position {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;

            img {
                border: 2px solid #f9f9f9fa;
                border-radius: 100%;
                margin-bottom: 15px;
            }
        }

        .placeContainer1 {
            display: flex;
            justify-content: center;
            flex-direction: column;

            font-size: 17px;
            font-weight: bolder;

            background-color: #FF856F;
            width: 79px;
            height: 111px;

            border-radius: 5px 5px 0px 0px;
        }

        .placeContainer2 {
            display: flex;
            justify-content: center;
            flex-direction: column;

            font-size: 17px;
            font-weight: bolder;

            background-color: #7fe4f1;
            width: 79px;
            height: 73px;

            border-radius: 5px 5px 0px 0px;
        }

        .placeContainer3 {
            display: flex;
            justify-content: center;
            flex-direction: column;

            font-size: 17px;
            font-weight: bolder;

            background-color: #8fbbf7;
            width: 79px;
            height: 55px;

            border-radius: 5px 5px 0px 0px;
        }
    }


    .container3 {
        padding-top: 40px;
        border-radius: 60px 60px 0px 0px;

        height: 100vh;
        background-color: #FFFFFF;
    }

    .user {
        margin: 15px 30px 0px 30px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .userContainer1 {
            width: 165px;
            display: flex;
            align-items: center;

            img, h4 {
                display: inline;
            }

            h4 {
                margin-left: 15px;
            }
        }

        img {
            width: 40px;
            height: 40px;
        }

        h4 {
            font-size: 17px;
            font-weight: 400;
        }
    }
`;