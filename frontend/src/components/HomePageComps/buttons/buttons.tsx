import React from 'react'
import { Button } from '@mui/material'
import './buttons.css'
import { Link } from 'react-router-dom'
function Buttons() {
    return (
        <div className="buttons">
            <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to="/about"
                className="home-left-portfolio"
            >
                <Button
                    variant="outlined"
                    size="large"
                    color="inherit"
                    style={{ marginRight: '1rem' }}
                    sx={{
                        ':hover': {
                            borderColor: '#fee75c', // theme.palette.primary.main
                        },
                    }}
                >
                    About Me
                </Button>
            </Link>
            <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to="/portfolio"
                className="home-left-portfolio"
            >
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
                    Portfolio
                </Button>
            </Link>
            <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to="/projects"
                className="home-left-portfolio"
            >
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
                >
                    Projects
                </Button>
            </Link>
        </div>
    )
}
export default Buttons
