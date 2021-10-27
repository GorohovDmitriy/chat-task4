import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { privateRoutes, publickRoutes } from './routes'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index'

const AppRouter = () => {
	const { auth } = useContext(Context)
	const [user] = useAuthState(auth)

	return user ? (
		<Switch>
			{privateRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} component={Component} exact />
			))}
			<Redirect to={CHAT_ROUTE} />
		</Switch>
	) : (
		<Switch>
			{publickRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} component={Component} exact />
			))}
			<Redirect to={LOGIN_ROUTE} />
		</Switch>
	)
}

export default AppRouter
