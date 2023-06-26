import 'normalize.css';
import Menu from '@/components/Menu';
import React from 'react';
import styled from 'styled-components';
import Newsletter from '@/components/Newsletter';

const HomePage = styled.main`
	max-width: 75rem;
	margin: auto;
	
	background-color: var(--background-white);
`;

export default function Home() {
	return (
		<>
			<HomePage>
				<Menu />
				<Newsletter />
			</HomePage>
		</>
	);
}
