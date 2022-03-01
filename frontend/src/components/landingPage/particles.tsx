import { makeStyles } from '@mui/styles';
import React, { Component } from 'react'
import ReactParticles from 'react-tsparticles'
type Props = {}

type State = {}

const useStyles = makeStyles(() => ({
	particlesCanvas: {
		position: "fixed",
		opacity: "0.3"
	},
}));
const Particles = () => {
	const classes = useStyles();
	return (
		<ReactParticles
			canvasClassName={classes.particlesCanvas}
			params={{
				background: {
					color: {
						value: "#0d47a1"
					},
					position: "50% 50%",
					repeat: "no-repeat",
					size: "cover"
				},
				fullScreen: {
					zIndex: 1
				},
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: "push"
						},
						onHover: {
							enable: true,
							mode: "repulse"
						}
					},
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.8,
							size: 40
						},
						grab: {
							distance: 400
						}
					}
				},
				particles: {
					color: {
						value: "#ff0000"
					},
					links: {
						color: {
							value: "#57f287"
						},
						distance: 150,
						enable: true,
						opacity: 2
					},
					move: {
						attract: {
							rotate: {
								x: 600,
								y: 1200
							}
						},
						enable: true,
						outModes: {
							default: "out",
							bottom: "out",
							left: "out",
							right: "out",
							top: "out"
						}
					},
					number: {
						density: {
							enable: true
						},
						value: 150
					},
					opacity: {
						random: true,
						value: {
							min: 0.1,
							max: 0.5
						},
						animation: {
							enable: true,
							speed: 3,
							minimumValue: 0.1
						}
					},
					size: {
						random: true,
						value: {
							min: 0.1,
							max: 5
						},
						animation: {
							enable: true,
							speed: 20,
							minimumValue: 0.1
						}
					},
					twinkle: {
						lines: {
							enable: true,
							frequency: 0.02,
							color: {
								value: "#ed4245"
							},

						},
						particles: {
							enable: true,
							color: {
								value: "#fee75c"
							}
						}
					}
				}
			}
			} />
	)
}

export default Particles;