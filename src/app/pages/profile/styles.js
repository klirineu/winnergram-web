import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	padding-bottom: 100px;
	display: flex;
	flex-direction: column;
	animation: slide .25s ease-in;
	& > header {
		min-height: 270px;
		height: 40vh;
		padding: 0 20px 3vh;
		background: ${(props) => props.theme.gradient};
		color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		& > div {
			width: 100%;
			position: relative;
		}
		.header {
			height: 100%;
			animation: fade 0.4s linear;
		}
		.header2 {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			h1 {
				margin-top: 15px;
				font-size: 25px;
			}
		}

		.trophyDiv {
			width: auto;

			display: flex;
			flex-direction: row;
			justify-content: center;

			padding: 20px;
			border-radius: 100%;
			background-color: white;
		}

		.trophy {
			width: 60px;
			height: 60px;
		}
	}
	& > header > header {
		width: 100%;
		position: relative;
		padding: 30px 0 10px;
		div:nth-child(1){
			cursor: pointer;
			width: 70%;
			pointer-events: none;
			svg{
				pointer-events: visible;
			}
			h3{
				width: 50%;
				max-height: 48px;
    			overflow: hidden;
    			line-height: 1.2;
				position: absolute;
				top: 30px;
				left: 50%;
				transform: translate(-50%);
			}
		}
		div:nth-child(2){
			justify-content: flex-end;
			width: 30%;
		}
	}
	.header1 {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.header1 > .userAvatar {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.header1 > .container2 {
		width: 100%;
		display: flex;
		justify-content: center;

		& > div {
			width: 30%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		span {
			margin-top: 10px;
			font-size: 1.1rem;
			font-weight: 700;
		}
	}
	.container3 {
		display: flex;
		justify-content: center;
		align-items: center;
		.MuiCircularProgress-root{
			margin: 10px;
			width: 20px !important;
			height: 20px !important;
		}
	}
	.container3 > a button {
		display: flex;
		align-items: center;
		height: 35px;
		background-color: #fff;
		color: ${(props) => props.theme.primary};
		padding: 10px 40px;
		border-radius: 5px;
		font-size: 1rem;
		font-weight: 700;
	}
	.container3 > a:nth-child(2) button {
		margin: 0 10px;
		font-size: 1.3rem;
		padding: 0 10px;
	}

	// spinner center
	& > div.spinner--container {
		height: 50vh;
		position: relative;
	}

	main {
		width: 90%;
		margin: 0 auto;
		animation: scale .4s ease-in;
		h2 {
			text-align: start;
			margin: 50px 0 20px;
			font-weight: 600;
		}
	}

	
	.infos {
		.bio{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			p{
				margin-right: 10px;
			}
			svg{
				cursor: pointer;
			}
		}
		ul {
			margin: 15px 0;
			list-style: none;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.iconVerified {
			color: #3caefc;
		}
		.switchBtn {
			width: 65px;
			padding: 5px;
			& .Mui-checked {
				& + .MuiSwitch-track {
					border: 2px solid #278ace;
				}
				& .MuiSwitch-thumb {
					background-color: #278ace;
				}
			}
			& .MuiSwitch-switchBase {
				padding: 10px;
			}
			& .MuiSwitch-track {
				height: 28px;
				background: none;
				border-radius: 20px;
				border: 2px solid #3e3e3e;
			}
			& .MuiSwitch-thumb {
				background-color: #3e3e3e;
				width: 25px;
				height: 18px;
				border-radius: 20px;
				box-shadow: none;
			}
		}
	}

	
`;
