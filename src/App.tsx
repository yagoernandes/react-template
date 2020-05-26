import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import SecondPage from './pages/SecondPage'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/second">
						<SecondPage />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</Provider>
	)
}

export default App
