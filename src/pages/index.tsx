import 'normalize.css';
import Header from '@/components/Header';
import React from 'react';
import styled from 'styled-components';

const HomePage = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: var(--background-white);
`;

export default function Home() {
	return (
		<>
			<HomePage>
				<Header />
				
			</HomePage>
		</>
	);
}
