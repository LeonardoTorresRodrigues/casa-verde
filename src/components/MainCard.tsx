import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import image from '../../public/images/image 3.png';

const MainCardContainer = styled.section`
	width: 995px;
	height: 440px;
	border: 1px red solid;
	display: flex;
	justify-content: space-around;
	margin: auto;
`;

const MainCardTitle = styled.div`
	margin-top: 1.5rem;

	h2 {
		font-family: var(--ff-text);
		font-weight: var(--fw-text);
		font-size: 22px;
		line-height: 27px;
		font-style: normal;
		color: var(--font-black);
		letter-spacing: 0em;
		text-align: left;
		margin-bottom: 1.5rem;
	}
	h2 strong {
		font-family: var(--ff-title);
		font-size: 42px;
		font-style: normal;
		font-weight: var(--fw-title);
		line-height: 49px;
		text-align: left;
	}
`;

export default function MainCard() {
	return (
		<MainCardContainer>
			<Image
				src={image}
				width={606}
				height={440}
				alt='Folhas da uma planta'
			/>
			<MainCardTitle>
				<h2>Como conseguir
					<br />
					<strong>
						minha planta
					</strong>
				</h2>
				<ul>
					<li>Escolha sua plantas</li>
					<li>Faça seu pedido</li>
					<li>Aguarde na sua casa</li>
				</ul>
			</MainCardTitle>
		</MainCardContainer>
	);
}