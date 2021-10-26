import { Container, Grid } from '@material-ui/core'
import React from 'react'

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

				</Grid>
			</Grid>
		</Container>
	)
}

export default Loader
