import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';

const Menu = styled.header`
	width: 100%;
	height: 3.053rem;
	
	display: flex;
	
	align-items: center;
	justify-content: space-around;
	margin-top: 0.625rem;
	padding: 0 1rem;

	flex-wrap: wrap;
	flex-direction: column;

	@media(min-width: 920px) {
		flex-direction: row;
		padding: 0;
		padding-left: 1rem;
	}
`;

const NavBar = styled.nav`
	width: 100%;

	display: flex;
	flex: 1;
	
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;

	@media(min-width: 920px) {
		justify-content: flex-end;
	}

	li {
		list-style: none;
		font-size: 12px;

		@media(min-width: 920px) {
			font-size: 16px;
		}
	}
	
	li, a {
		display: inline-block;

		font-family: var(--ff-text);
		font-weight: var(--fw-text);
		font-size: inherit;
		line-height: 1.1;
		text-decoration: none;

		padding: .5rem;
		
		color: var(--font-black);

		@media(min-width: 920px) {
			padding: 1rem;
		}
	}
`;

export default function Header() {
	return (
		<>
			<Menu>
				<Logo />
				<NavBar>
					<li>
						<a href="">Como fazer</a>
						/
					</li>
					<li>
						<a href="">Ofertas</a>
						/
					</li>
					<li>
						<a href="">Depoimentos</a>
						/
					</li>
					<li>
						<a href="">Videos</a>
						/
					</li>
					<li>
						<a href="">Meu carrinho</a>
					</li>
				</NavBar>
			</Menu>
		</>
	);
}