import { Box, Button, Container, Grid } from '@material-ui/core'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import React, { useContext } from 'react'
import { Context } from '..'
import firebase from 'firebase/compat/app'

const Login = () => {
	const { auth } = useContext(Context)

	const loginGoogle = async () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		const { user } = await auth.signInWithPopup(provider)
		console.log(user)
	}

	const loginFaceBook = async () => {
		const provider = new firebase.auth.FacebookAuthProvider()
		const { user } = await auth.signInWithPopup(provider)
		console.log(user)
	}

	return (
		<Container>
			<Grid
				container
				style={{ height: window.innerHeight - 50 }}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Grid container direction={'column'} alignItems={'center'}>
					<Box style={{ marginBottom: 10 }}>
						<Button onClick={loginGoogle} style={{ width: '350px' }} variant={'outlined'}>
							<FcGoogle style={{ marginRight: 10 }} /> Войти с помощью Google
						</Button>
					</Box>
					<Box>
						<Button onClick={loginFaceBook} style={{ width: '350px' }} variant={'outlined'}>
							<BsFacebook style={{ marginRight: 10 }} /> Войти с помощью facebook
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Login
