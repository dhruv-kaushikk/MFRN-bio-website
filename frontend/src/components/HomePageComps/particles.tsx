import { makeStyles } from '@mui/styles'
import React from 'react'
import ReactParticles from 'react-tsparticles'
const useStyles = makeStyles(() => ({
    particlesCanvas: {
        position: 'fixed',
        opacity: '0.3',
    },
}))
const Particles = () => {
    const classes = useStyles()
    return (
        <ReactParticles
            canvasClassName={classes.particlesCanvas}
            params={{
                background: {
                    position: '50% 50%',
                    repeat: 'no-repeat',
                    size: 'cover',
                    opacity: 0,
                },
                fullScreen: {
                    zIndex: 1,
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: false,
                    },
                    modes: {
                        bubble: {
                            distance: 200,
                            duration: 2,
                            opacity: 1,
                            size: 40,
                        },
                        grab: {
                            distance: 400,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#ff0000',
                    },
                    links: {
                        color: {
                            value: '#57f287',
                        },
                        distance: 150,
                        enable: true,
                        opacity: 10,
                    },
                    move: {
                        attract: {
                            rotate: {
                                x: 600,
                                y: 1200,
                            },
                        },
                        enable: true,
                        outModes: {
                            default: 'out',
                            bottom: 'out',
                            left: 'out',
                            right: 'out',
                            top: 'out',
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 50,
                    },
                    opacity: {
                        random: true,
                        value: {
                            min: 0.5,
                            max: 1,
                        },
                        animation: {
                            enable: true,
                            speed: 3,
                            minimumValue: 1,
                        },
                    },
                    size: {
                        random: true,
                        value: {
                            min: 0.1,
                            max: 5,
                        },
                        animation: {
                            enable: true,
                            speed: 20,
                            minimumValue: 0.1,
                        },
                    },
                    twinkle: {
                        lines: {
                            enable: true,
                            frequency: 0.02,
                            color: {
                                value: '#ed4245',
                            },
                        },
                        particles: {
                            enable: true,
                            color: {
                                value: '#fee75c',
                            },
                        },
                    },
                },
            }}
        />
    )
}

export default Particles
