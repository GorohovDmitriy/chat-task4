import { AppBar, Button, Grid, Toolbar } from '@material-ui/core'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index'

const Navbar = () => {
	const { auth } = useContext(Context)
	const [user] = useAuthState(auth)

	// const user = false
	const signOut = () => {
		if (window.confirm('Вы действительно хотите выйти ???')) {
			auth.signOut()
		}

	}

	return (
		<AppBar color={'inherit'} position='static'>
			<Toolbar variant={'dense'} >
				<Grid container justifyContent={'flex-end'}>
					{user ? (
						<Button onClick={signOut} variant={'outlined'}>Выйти</Button>
					) : (
						<NavLink to={LOGIN_ROUTE}>
							<Button variant={'outlined'}>Логин</Button>
						</NavLink>
					)}
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
