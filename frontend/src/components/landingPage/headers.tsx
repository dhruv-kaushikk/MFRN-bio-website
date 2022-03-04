import { Typography } from '@mui/material'
import React from 'react'
import Buttons from './buttons/buttons'
import TypewriterComponent from 'typewriter-effect'
import './headers.css'
const MainText = () => {
    return (
        <div className="main-text">
            <Typography variant="h1" className="main-text-title">
                Hi! I'm Dhruv Kaushik.
            </Typography>
            <Typography variant="h2" className="main-text-typography">
                <TypewriterComponent
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(100)
                            .typeString('A Web Developer.')
                            .pauseFor(2000)
                            .deleteAll(75)
                            .typeString('A Backend Developer.')
                            .pauseFor(2000)
                            .deleteAll(75)
                            .typeString('A Discord Moderator.')
                            .pauseFor(2000)
                            .deleteAll(75)
                            .typeString('A Professional fun-haver.')
                            .pauseFor(2000)
                            .start()
                    }}
                    options={{ loop: true, deleteSpeed: 75 }}
                />
            </Typography>
            <Buttons />
        </div>
    )
}
export default MainText
