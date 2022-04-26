import React from "react";
import { Container } from "./styles";

export const Avatar = (props) => {
	const { avatarUrl } = props;
	return (
		<Container>
			<img src={avatarUrl} alt='imagem de perfil do usuário' className="userAvatar"/>
		</Container>
	);
};
export const UserName = (props) => {
	const { userName } = props;
	return (
		<Container>
			<h3>{userName}</h3>
		</Container>
	);
};
export const Name = (props) => {
	const { name } = props;
	return (
		<Container>
            <h5>{name}</h5>
        </Container>
	);
};
