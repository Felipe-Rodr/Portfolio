/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation:{
				typing: 'typing 2s steps(22), blink .5s step-end infinite alternate',
				'slide-in-left': 'slide-left 350ms ease-in-out 0s 1',
				'slide-in-right': 'slide-right 350ms ease-in-out 0s 1',
				'go-around': 'move-around 4s linear 0s infinite',
				'walk': 'walk 5s linear 0s infinite'
			},
			keyframes:{
				typing:{
					from:{
						width: 0
					}
				},
				blink:{
					'50%': {
						'border-color': 'transparent'
					}
				},
				'slide-left':{
					'0%':{
						transform: 'translateX(-100%)'
					},
					'100%':{
						transform: 'translateX(0)'
					}
				},
				'slide-right':{
					'0%':{
						transform: 'translateX(100%)'
					},
					'100%':{
						transform: 'translateX(0)'
					}
				},
				'move-around':{
					from:{
						transform: 'rotate(0deg) translateX(50px) rotate(0deg)'
					},
					to:{
						transform: 'rotate(360deg) translateX(50px) rotate(-360deg)'
					}
				},
				walk:{
					'0%':{
						transform: 'translateX(-100vw)'
					},
					'100%':{
						transform: 'translateX(100vw)'
					}
				}
			},
			colors:{
				primary: '#2a2438',
				secondary: '#352f44',
				'secondary-light': '#5c5470',
				neutral: '#dbd8e3'
			},
			fontFamily:{
				roboto: ['Roboto Slab']
			},
			fontSize:{
				h1: ['2.5rem', '3.5rem'],
				h2: ['2rem', '2.75rem'],
				h3: ['1.5rem', '2.125rem'],
				h4: ['1rem', '1.625rem'],
				h5: ['14px', '24px'],
				text_1: ['16px', '24px'],
				text_2: ['14px', '22px'],
				details_1: ['12px', '20px'],
				details_2: ['10px', '18px']
			}
		},
	},
	plugins: [],
}
