import { Button, Container, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Context } from '../index'
import Loader from './Loader'
import firebase from 'firebase/compat/app'

const Chat = () => {
	const { auth, firestore } = useContext(Context)
	const [user] = useAuthState(auth)
	const bro = 'Bro!'
	const sis = 'Sis!'

	const [message, loading] = useCollectionData(
		firestore.collection('messages').orderBy('createdAt'),
	)

	const sendMessage = async (value) => {
		firestore.collection('messages').add({
			uid: user.uid,
			displayName: user.displayName,
			photoURL: user.photoURL,
			text: value,
			createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
		})
	}

	if (loading) {
		return <Loader />
	}

	return (
		<Container>
			<Grid container justifyContent={'center'} style={{ marginTop: 30 }}>
				<div style={{ width: '80%', height: '50vh', border: '1px solid #e7e7e7', overflowY: 'auto' }}>
					{message.map((messag, index) => {
						return (
							<div
								key={`${messag.uid}__${index}`}
								style={{
									margin: 20,
									marginLeft: user.uid === messag.uid ? 'auto' : '710px' || '',
								}}
							>
								<Grid container direction={'column'} alignItems={'flex-start'}>
									<p style={{ fontSize: 40 }}>{messag.text}</p>
									<div style={{ borderLeft: '4px solid gray', padding: 10 }}>
										<p style={{ color: 'gray' }}>
											Sent by {messag.displayName} at{' '}
											<span>{messag.createdAt.toDate().toLocaleTimeString()}</span>
										</p>
									</div>
								</Grid>
							</div>
						)
					})}
				</div>
				<Grid container justifyContent={'center'} alignItems={'center'}>
					<Button
						onClick={() => sendMessage(bro)}
						style={{
							width: '100px',
							marginTop: 20,
							marginRight: 10,
							backgroundColor: '#d50000',
							color: '#fff',
						}}
						variant={'outlined'}
					>
						"Bro!"
					</Button>
					<Button
						onClick={() => sendMessage(sis)}
						style={{ width: '100px', marginTop: 20, backgroundColor: '#2196f3', color: '#fff' }}
						variant={'outlined'}
					>
						"Sis!"
					</Button>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Chat
