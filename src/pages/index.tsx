import 'normalize.css';
import Header from '@/components/Header';
import React from 'react';
import styled from 'styled-components';
import Newsletter from '@/components/Newsletter';

const HomePage = styled.div`
	width: 75.188rem;
	height: 100vh;
	margin: 0 auto;
	background-color: var(--background-white);
`;

export default function Home() {
	return (
		<>
			<HomePage>
				<Header />
				<Newsletter />
			</HomePage>
		</>
	);
}
