import React from 'react';
import styled from 'styled-components';

const NewsletterContainer = styled.div`
	width: 36.563rem;
	height: 28.875rem;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	margin: 5rem 0;
`;

const NewsletterTitle = styled.div`
	p {
		font-family: var(--ff-text);
		font-weight: var(--fw-text);
		font-size: 22px;
		line-height: 27px;
		color: var(--font-black);
		opacity: 0.5;
	}
	
	h1 {
		font-family: var(--ff-title);
		font-weight: var(--fw-title);
		font-size: 82px;
		line-height: 94px;
		margin: 0;
		color: var(--font-black);
	}
`;

const NewsletterText = styled.div`
	font-family: var(--ff-text);
	font-weight: var(--fw-text);
	font-size: 16px;
	line-height: 26px;
	color: var(--font-black);
	opacity: 0.5;
`;

const NewsletterForm = styled.form`
	width: 36.563rem;
	height: 4.688rem;

	display: flex;

	box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
	background-color: var(--background-white);

	input {
		width: 70%;
		height: 100%;

		font-family: var(--ff-text);
		font-weight: var(--fw-text);
		font-size: 16px;
		line-height: 20px;

		color: var(--font-black);
		opacity: 0.3;
		
		border: none;
		justify-content: center;
	}

	button {
		width: 30%;
		height: 100%;
		
		color: var(--font-white);
		font-family: var(--ff-text);
		font-weight: var(--fw-text);
		font-size: 16px;
		line-height: 20px;

		background-color: var(--background-yellow);
		border: none;
	}
`;

export default function Newsletter() {
	return (
		<NewsletterContainer>
			<NewsletterTitle>
				<p>Sua casa com as</p>
				<h1>melhores plantas</h1>
			</NewsletterTitle>
			<NewsletterText>
				<p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torna-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
			</NewsletterText>
			<NewsletterForm>
				<input type="text" placeholder='Insira seu e-mail' />
				<button>Assinar newsletter</button>
			</NewsletterForm>
		</NewsletterContainer>
	);
}