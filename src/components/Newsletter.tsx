import React from 'react';
import styled from 'styled-components';

const NewsletterContainer = styled.div`
	background-color: #ffe29a;
	padding: 1rem;
	margin-top: 1rem;
	position: relative;
	max-width: 36.5rem;

	@media(min-width: 920px) {
		background-color: transparent;
		margin-top: 9.6rem;
	}

	:after {
		content: "";
		display: block;
		width: 49rem;
		height: 60.9rem;
		position: absolute;
		--baseDistance: -287px;
		top: calc(var(--baseDistance) + 50px);
		right: 0;
		z-index: -1;
		pointer-events: none;
	}
`;

const NewsletterContainerText = styled.div`
	max-width: 30rem;
	margin-bottom: 2rem;
`;

const NewsletterTitle = styled.div`
		h1 {
			font-family: var(--ff-text);
			font-weight: var(--fw-text);
			font-style: normal;
			font-size: 22px;
			line-height: 27px;
			letter-spacing: 0em;
			text-align: left;
			margin-bottom: 1.5rem;
			color: var(--font-black);
		}
		h1 strong {
			font-family: var(--ff-title);
			font-size: 50px;
			font-style: normal;
			font-weight: var(--fw-title);
			line-height: 1;
			letter-spacing: 0em;
			text-align: left;

			@media(min-width: 920px) {
				font-size: 82px;
			}
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
			<NewsletterContainerText>
				<NewsletterTitle>
					<h1>Sua casa com as
						<br />
						<strong>
							melhores plantas
						</strong>
					</h1>
				</NewsletterTitle>
				<NewsletterText>
					<p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torna-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
				</NewsletterText>
			</NewsletterContainerText>
			<NewsletterForm>
				<input type="email" placeholder='Insira seu e-mail' />
				<button>Assinar newsletter</button>
			</NewsletterForm>
		</NewsletterContainer>
	);
}