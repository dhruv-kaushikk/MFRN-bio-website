import React from 'react'
import { Button } from '@mui/material'
import './buttons.css'

function Navbar() {
    return (
        <div className='buttons'>
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
                onClick={() => {
                    alert('TODO: make About Me Page')
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
                    alert('TODO: make projects page')
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
                onClick={() => {
                    alert('TODO: make Portfolio Page')
                }}
            >
                PortFolio
            </Button>
        </div>
    )
}
export default Navbar
