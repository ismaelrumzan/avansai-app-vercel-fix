import { Global } from '@emotion/react'
import { ReactElement } from 'react'

export const Fonts = (): ReactElement => (
  <Global
    styles={`
 @font-face {
   font-family: 'Gilroy';
   font-style: normal;
   font-weight: 700;
   font-display: swap;
   src: url(/fonts/Gilroy-Bold.woff2) format('woff2');
   url(/fonts/Gilroy-Bold.woff) format('woff');
   url(/fonts/Gilroy-Bold.eot) format('eot');
}
/* latin-ext */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/spacegrotesk/v3/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj42VnsqPMZBSSJLm2FXTQ.woff) format('woff');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/spacegrotesk/v3/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj42VnskPMZBSSJLm2E.woff) format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`}
  />
)
