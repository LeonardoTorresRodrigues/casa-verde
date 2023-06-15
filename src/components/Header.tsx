import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';

const Menu = styled.header`
	width: 75.188rem;
	height: 3.053rem;
	background-color: grey;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
`;

const LinksList = styled.ul`
	display: flex;
	margin-left: auto;
	justify-content: flex-end;
	gap: 1rem;
	
	li, a {
		text-decoration: none;
		list-style-type: none;
	}
`;

export default function Header() {
	return (
		<>
			<Menu>
				<Logo />
				<LinksList>
					<li>
						<a href="">Como fazer</a>
					</li>
					<li>
						<a href="">Ofertas</a>
					</li>
					<li>
						<a href="">Depoimentos</a>
					</li>
					<li>
						<a href="">Videos</a>
					</li>
					<li>
						<a href="">Meu carrinho</a>
					</li>
				</LinksList>
			</Menu>
		</>
	);
}