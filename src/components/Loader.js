import { Container, Grid } from '@material-ui/core'
import React from 'react'
import '../App.css'

const Loader = () => {
	return (
		<Container >
			<Grid
				container
				style={{ height: window.innerHeight - 50 }}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Grid
					container
					direction={'column'}
					alignItems={'center'}
				>
					<div className="lds-hourglass"></div>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Loader
