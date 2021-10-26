import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

firebase.initializeApp({
	apiKey: 'AIzaSyASfZbVy0l9gFmiH1WtPdnIu6MSg0UlV78',
	authDomain: 'chat-react-f7e6b.firebaseapp.com',
	projectId: 'chat-react-f7e6b',
	storageBucket: 'chat-react-f7e6b.appspot.com',
	messagingSenderId: '930999652051',
	appId: '1:930999652051:web:e361552c0653c456c84e26',
	measurementId: 'G-GXJCQYNB02',
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
	<React.StrictMode>
		<Context.Provider value={{
			firebase,
			auth,
			firestore
		}}>
			<App />
		</Context.Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
