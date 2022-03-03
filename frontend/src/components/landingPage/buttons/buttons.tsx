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
            >
                About Me
            </Button>
            <Button
                variant="outlined"
                size="large"
                color="inherit"
                style={{ marginRight: '1rem' }}
            >
                Projects
            </Button>
            <Button variant="outlined" size="large" color="inherit">
                PortFolio
            </Button>
        </div>
    )
}
export default Navbar
