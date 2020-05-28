import React from 'react'
import { Page } from '../../styles'

import { Link } from 'react-router-dom'

const Home: React.FC = () => {
	return (
		<Page>
			<h1>Segunda página!</h1>
			<h2>GERADO COM O TEMPLATE DO YAGO</h2>
			<br />
			<Link to="/">Voltar para home</Link>
		</Page>
	)
}

export default Home
