/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'radial-light':
					'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(217,216,255,0.5), rgba(255,255,255,0.9))',
				'radial-dark':
					'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))',
			},
		},
	},
	plugins: [],
}
