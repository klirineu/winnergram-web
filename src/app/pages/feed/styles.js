import styled from "styled-components";

export const Container = styled.div`
	margin: 0 auto 50px;
	padding: 0 7.5% 50px;
	animation: fade 0.25s ease-in;

	.emailwarning {
		width: 100%;
		height: 50px;
		padding: 2px 4px;
		background-color: #ed6c02;
		position: fixed;
		top: 0;
		left: 0;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.2s ease-in;
		z-index: 2;
		p {
			width: fit-content;
			margin-right: 8px;
			font-size: 0.8rem;
		}
		button {
			padding: 5px;
			background: none;
			border: 1px solid #fff;
			border-radius: 5px;
			color: #fff;
			font-size: 0.8rem;
		}
	}
	.submited {
		background-color: #2e7d32;
	}

	header {
		width: 100%;
		margin: 0;
		padding: 30px 7.5% 10px;
		background-color: #fff;
		position: fixed;
		top: ${(props) => (props.email ? "50px" : "0")};
		left: 0;
		z-index: 2;
	}

	h1 {
		font-size: 24px;
		color: #2b2a2a;
	}

	svg {
		margin-right: 10px;
	}

	svg:hover {
		cursor: pointer;
	}

	.posts {
		width: 100%;
		min-height: calc(100vh - 140px);
		padding: ${(props) => (props.email ? "110px" : "60px")} 0 30px;
	}

	.posts.empty {
		display: flex;
		align-items: center;
	}

	.postNoImage .postDescription {
		padding: 0px 20px 10px 20px;
	}
`;
