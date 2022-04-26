import React from "react";
import { Container } from "./styles";

export const Input = (props) => {
	const { type, icon, placeholder, id, onChange, value } = props;
	return (
		<Container>
			<input type={type} onChange={onChange} value={value} placeholder={placeholder} id={id} />
			{icon}
		</Container>
	);
};