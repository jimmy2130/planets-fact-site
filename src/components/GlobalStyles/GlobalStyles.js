import { createGlobalStyle } from 'styled-components/macro';
import { COLORS, WEIGHTS, FAMILIES } from '../../constants';

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

html {
  --color-white: ${COLORS.white};
  --color-offblack: ${COLORS.offblack};
  --color-gray-400: ${COLORS.gray[400]};
  --color-gray-700: ${COLORS.gray[700]};
  --color-border: ${COLORS.border};

  --color-mercury: ${COLORS.mercury};
  --color-venus: ${COLORS.venus};
  --color-earth: ${COLORS.earth};
  --color-mars: ${COLORS.mars};
  --color-jupiter: ${COLORS.jupiter};
  --color-saturn: ${COLORS.saturn};
  --color-uranus: ${COLORS.uranus};
  --color-neptune: ${COLORS.neptune};


  --font-weight-normal: ${WEIGHTS.normal};
  --font-weight-medium: ${WEIGHTS.medium};
  --font-weight-bold: ${WEIGHTS.bold};

  --font-family-title: ${FAMILIES.title};
  --font-family-text: ${FAMILIES.text};
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
}

body {
	background-color: var(--color-offblack);
	background-image: url('/assets/background-stars.svg');
	font-family: 'Spartan', serif;
}

html, body, #root {
  height: 100%;
}
`;

export default GlobalStyles;
