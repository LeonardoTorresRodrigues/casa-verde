import React, { useState } from 'react';
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
	font-style: normal;
	letter-spacing: 0em;
	text-align: left;
	line-height: 26px;
	margin-bottom: 1rem;
	color: var(--font-black);
	opacity: 0.5;
`;

const NewsletterForm = styled.div`
	display: flex;
	flex-direction: column;
	
	
	background-color: var(--background-white);

	@media(min-width: 920px) {
		flex-direction: row;
	}

	input {
		padding: 1.6rem;
		padding-left: 3.4rem;
		flex: 1;

		font-family: var(--ff-text);
		font-weight: var(--fw-text);
		font-size: 16px;
		font-style: normal;
		line-height: 20px;
		
		letter-spacing: 0em;
		text-align: left;

		outline-color: var(--font-yellow);
		color: var(--font-black);
		opacity: 0.;
		
		box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
		border: none;
	}

	input:hover {
		box-shadow: 10px 10px 30px 0px #0000002e;
	}

	button {
		width: 100%;
		height: 4.6rem;

		left: 751px;
		top: 597px;

		padding: 1.6rem;
		
		border: none;
		
		color: var(--font-white);
		background-color: var(--background-yellow);
		box-shadow: 10px 10px 30px 0px #ffcb474d;

		font-family: var(--ff-text);
		font-weight: var(--fw-text);
		font-size: 16px;
		line-height: 20px;

		@media(min-width: 920px) {
			width: initial;
		}
	}
`;

export default function Newsletter() {
	const [email, setEmail] = useState('');
	const [emailAlert, setEmailAlert] = useState('');

	const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setEmailAlert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`);
		setEmail('');
	};

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
			<form action="/" onSubmit={handleSubscribe}>
				<NewsletterForm>
					<input type="email"
						placeholder='Insira seu e-mail'
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<button type="submit">Assinar newsletter</button>
				</NewsletterForm>
			</form>
			{emailAlert && <p>{emailAlert}</p>}
		</NewsletterContainer>
	);
}