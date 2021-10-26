import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { privateRoutes, publickRoutes } from './routes'

const AppRouter = () => {
	const user = true

	return user ? (
		<Switch>
			{privateRoutes.map(({ path, Component }) => (
				<Route path={path} component={Component} exact />
			))}
			<Redirect to={CHAT_ROUTE} />
		</Switch>
	) : (
		<Switch>
			{publickRoutes.map(({ path, Component }) => (
				<Route path={path} component={Component} exact />
			))}
			<Redirect to={LOGIN_ROUTE} />
		</Switch>
	)
}

export default AppRouter
