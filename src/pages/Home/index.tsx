import React from 'react'
import { Page } from '../../styles'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
	return (
		<Page>
			<h1>Olá mundo!</h1>
			<h2>GERADO COM O TEMPLATE DO YAGO</h2>
			<br/>
			<Link to="/second">Segunda página</Link>
		</Page>
	)
}

export default Home
