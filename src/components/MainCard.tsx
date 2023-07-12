import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import image from '../../public/images/image 3.png';
import imageList from '../../public/images/ellipse.png';

const MainCardContainer = styled.section`
	width: 995px;
	height: 440px;
	display: flex;
	justify-content: space-around;
	margin: 10rem auto;
`;

const MainCardContent = styled.div`
	display: flex;
	flex-direction: column;
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

const MainCardText = styled.div`
	ul {
		padding: 0;
	}

	li {
		font-family: var(--ff-text);
		font-weight: var(--fw-text);
		font-size: 22px;
		line-height: 27px;
		opacity: 50%;
		padding: 1rem 0;
		list-style: none;
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
			<MainCardContent>
				<MainCardTitle>
					<h2>Como conseguir
						<br />
						<strong>
							minha planta
						</strong>
					</h2>
				</MainCardTitle>
				<MainCardText>
					<ul>
						<li>
							<Image
								src={imageList}
								width={52}
								height={52}
								alt='elipse'
							/>
							Escolha sua plantas
						</li>
						<li>
							<Image
								src={imageList}
								width={52}
								height={52}
								alt='elipse'
							/>
							Faça seu pedido
						</li>
						<li>
							<Image
								src={imageList}
								width={52}
								height={52}
								alt='elipse'
							/>
							Aguarde na sua casa
						</li>
					</ul>
				</MainCardText>
			</MainCardContent>
		</MainCardContainer >
	);
}