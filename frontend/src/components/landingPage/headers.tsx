import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import './headers.css'
const MainText = () => {
    return (
        <div className="main-text">
            <TypewriterComponent
                onInit={(typewriter) => {
                    typewriter.typeString('I am a developer').start()
                }}
            />
        </div>
    )
}
export default MainText
