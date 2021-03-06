export const COLORS = {
	white: 'hsl(0deg 0% 100%)',
	offblack: 'hsl(240deg 67% 8%)',
	gray: {
		400: 'hsl(240deg 6% 54%)',
		700: 'hsl(240deg 17% 26%)',
	},
	border: 'hsl(0deg 0% 100% / 0.2)',
	mercury: 'hsl(194deg 48% 49%)',
	venus: 'hsl(33deg 82% 61%)',
	earth: 'hsl(263deg 67% 51%)',
	mars: 'hsl(10deg 63% 51%)',
	jupiter: 'hsl(2deg 68% 53%)',
	saturn: 'hsl(17deg 73% 46%)',
	uranus: 'hsl(169deg 73% 44%)',
	neptune: 'hsl(222deg 87% 56%)',
};

export const WEIGHTS = {
	normal: 400,
	medium: 500,
	bold: 700,
};

export const SCALE = {
	desktop: 1,
	tablet: 0.633,
	phone: 0.384,
};

const BREAKPOINTS = {
  tabletMax: 1300,
  phoneMax: 750,
}

export const QUERIES = {
  'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  'phoneAndDown': `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
}

export const FAMILIES = {
	title: '"Antonio", serif',
	text: '"Spartan", serif',
};