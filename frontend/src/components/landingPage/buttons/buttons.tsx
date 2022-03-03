import React from 'react'
import { Button } from '@mui/material'
import './buttons.css'

function Navbar() {
    return (
        <div>
            <Button
                variant="outlined"
                size="large"
                color="inherit"
                style={{ marginRight: '1rem' }}
                sx={{
                    ':hover': {
                        borderColor: '#5865f2', // theme.palette.primary.main
                    },
                }}
            >
                About Me
            </Button>
            <Button
                variant="outlined"
                size="large"
                color="inherit"
                style={{ marginRight: '1rem' }}
                sx={{
                    ':hover': {
                        borderColor: '#57f287',
                    },
                }}
                onClick={() => {
                    alert('aah')
                }}
            >
                Projects
            </Button>
            <Button
                variant="outlined"
                size="large"
                color="inherit"
                sx={{
                    ':hover': {
                        borderColor: '#fee75c', // theme.palette.primary.main
                    },
                }}
            >
                PortFolio
            </Button>
        </div>
    )
}
export default Navbar
