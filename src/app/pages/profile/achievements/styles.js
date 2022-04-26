import styled from "styled-components";

export const Container = styled.div`
	/*margin: 50px auto 100px;*/
   animation: scale .4s ease-in;

	overflow-x: hidden;

	width: 100%;
	padding-bottom: 100px;
	display: flex;
	flex-direction: column;
	header {
		height: 40vh;
		padding: 5vw 20px;
		background: ${(props) => props.theme.gradient};
		color: #fff;
		border-radius: 0 0 15% 15%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		& > div {
			width: 100%;
		}
	}
	.container1 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		h3 {
			font-weight: 500;
		}

		svg {
			margin: 0 5px;
			font-size: 1.3rem;
		}
	}

	.achievements {
		margin-top: 40px;
		margin-left: 25px;
	}

	.achievements h1 {
		font-weight: 500;
		font-size: 20px;
		color: #212121;
		text-align: start;
	}

	.achievementsCards {
		overflow-x: scroll;

		margin-top: 25px;
		padding-bottom: 20px;

		max-width: 100%;

		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.achievementsCards .card {
		margin-right: 15px;

		min-width: 70px;
		height: 120px;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		background-color: #3badfc;
		border-radius: 7px;
		border: 1px solid #AD9C97;
	}

	.card img {
		width: 50px;
		height: 50px;

		background-color: white;
		border-radius: 35px;
		padding: 10px;
	}

	.statistics {
		margin-top: 40px;
		margin-left: 25px;
	}

	.statistics h1 {
		font-weight: 500;
		font-size: 20px;
		color: #212121;
		text-align: start;
	}

	.statisticsList {
		margin-top: 15px;

		color: #212121;
	}

	.list {
		margin-top: 10px;
		margin-right: 25px;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.list h3 {
		font-weight: 300;
	}
`;
