import Particles from 'react-tsparticles'
function ProjectParticles() {
	return (
		<Particles
			params={{
				particles: {
					number: {
						value: 20,
						density: {
							enable: true,
							value_area: 1500,
						},
					},
					color: {
						value: '#5865f2',
					},
					shape: {
						type: 'circle',
						stroke: {
							width: 3,
							color: '#5865f2',
							opacity: 0.6,
						},
						polygon: {
							nb_sides: 5,
						},
					},
					opacity: {
						value: 0.7,
						random: true,
						anim: {
							enable: false,
							speed: 1,
							opacity_min: 0.1,
							sync: false,
						},
					},
					size: {
						value: 4,
						random: true,
						anim: {
							enable: false,
							speed: 5,
							size_min: 0.1,
							sync: false,
						},
					},
					line_linked: {
						enable: true,
						distance: 150,
						color: '#fee75c',
						opacity: 0.6,
						width: 1,
					},
					move: {
						enable: true,
						speed: 2,
						direction: 'none',
						random: false,
						straight: false,
						out_mode: 'out',
						bounce: true,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
				},
				interactivity: {
					detect_on: 'window',

					events: {
						onhover: {
							enable: true,
							mode: 'grab',
						},
						resize: false,
					},
					modes: {
						grab: {
							distance: 150,
							line_linked: {
								opacity: 1,
							},
						},
						bubble: {
							distance: 400,
							size: 40,
							duration: 2,
							opacity: 8,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
						push: {
							particles_nb: 4,
						},
						remove: {
							particles_nb: 2,
						},
					},
				},
				retina_detect: true,
			}}
		/>
	)
}
export default ProjectParticles
