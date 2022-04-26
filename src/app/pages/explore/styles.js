import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	max-height: 100vh;
	padding-bottom: 80px;
	display: flex;
	flex-direction: column;
	animation: slide 0.25s ease-in;
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

	.inputDiv {
		margin-top: 20px;

		svg {
			color: #000;
		}
	}

	.topExplore {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.searchIcon {
		position: relative;
		top: 5px;
		left: 40px;

		font-size: 19px;
	}

	.exploreInput {
		width: 240px;
		height: 50px;

		border-radius: 11px;
		border: none;

		font-weight: 700;
		font-size: 15px;

		background-color: #fcfcfc;
	}

	.navigation {
		margin-top: 20px;

		display: flex;
		justify-content: center;
      position: relative;

		h3 {
			margin: 0 12px;
			color: #707070;
			font-weight: 300;
         cursor: pointer;
         transition: .2s ease-in;
		}

		.active {
			color: #2d94dc;
		}

		.indicator {
			width: 10px;
			height: 2px;
			background-color: #2d94dc;
         position: absolute;
         bottom: -2px;
         left: 50%;
         transform: translateX(-50%);
         transition: .3s ease-in-out;
		}
      
      .indicator.id1{
         left: 15%;
      }
      .indicator.id2{
         left: 50%;
      }
      .indicator.id3{
         left: 85%;
      }
	}
`
