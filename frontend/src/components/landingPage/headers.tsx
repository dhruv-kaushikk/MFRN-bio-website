import { Typography } from '@mui/material'
import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import './headers.css'
const MainText = () => {
    return (
        <div className="main-text">
            <Typography variant="h1" className="main-text-title">
                Hi, I am dhruv kaushik.
            </Typography>
            <Typography variant="h2" className="main-text-typography">
                <TypewriterComponent
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('A Web Developer.')
                            .pauseFor(2000)
                            .deleteAll(75)
                            .typeString('A Backend Developer.')
                            .pauseFor(2000)
                            .start()
                    }}
                    options={{ loop: true, deleteSpeed: 75 }}
                />
            </Typography>
        </div>
    )
}
export default MainText
