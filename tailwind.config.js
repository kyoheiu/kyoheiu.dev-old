/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						'code::before': {
							content: '""'
						},
						'code::after': {
							content: '""'
						},
						code: {
							fontWeight: 400
						}
					}
				}
			},
			spacing: {
				144: '36rem'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
