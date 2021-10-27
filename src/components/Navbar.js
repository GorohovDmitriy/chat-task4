import { AppBar, Button, Grid, Toolbar } from '@material-ui/core'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index'

const Navbar = () => {
	const { auth } = useContext(Context)
	const [user] = useAuthState(auth)

	const signOut = () => {
		if (window.confirm('Вы действительно хотите выйти ???')) {
			auth.signOut()
		}
	}

	return (
		<AppBar color={'inherit'} position='static'>
			<Toolbar color={'#1de9b6'}>
				<Grid container justifyContent={'flex-end'}>
					{user ? (
						<Button
							style={{ backgroundColor: '#1de9b6', color: '#fff' }}
							onClick={signOut}
							variant={'outlined'}
						>
							Выйти
						</Button>
					) : (
						<NavLink style={{ textDecoration: 'none' }} to={LOGIN_ROUTE}>
							<Button style={{ backgroundColor: '#1de9b6', color: '#fff' }} variant={'outlined'}>
								Логин
							</Button>
						</NavLink>
					)}
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
