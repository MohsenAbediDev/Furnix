import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function PaginationRounded() {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#B88E2F',
				contrastText: '#fff',
			},
			secondary: {
				main: '#F9F1E7',
				contrastText: '#000',
			},
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<Stack spacing={2} className='flex-center my-8'>
				<Pagination count={3} shape='rounded' color='primary'/>
			</Stack>
		</ThemeProvider>
	)
}

export default PaginationRounded
