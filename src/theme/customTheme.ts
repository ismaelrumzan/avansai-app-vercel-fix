import { ColorModeOptions, extendTheme } from '@chakra-ui/react'
import { Button, Heading, SocialAuthButton, Input } from '@theme/components'

const config: ColorModeOptions = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const customTheme = extendTheme({
  styles: {
    global: (props) => ({
      'html, body': {
        backgroundColor: props.colorMode === 'dark' ? '#1b202c' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        height: '100%',
      },
    }),
  },
  components: {
    Button,
    Heading,
    Input,
    SocialAuthButton,
  },
  fonts: {
    heading: 'Gilroy',
    body: 'Space Grotesk',
  },
  lineHeights: {
    heading: '110%',
    body: '155%',
  },
  fontWeights: {
    body: 'SemiBold',
    heading: '700',
  },
  fontSizes: {
    xxs: '0.651rem', // 10.42px
    xs: '0.781rem', // 12.50px
    sm: '0.938rem', // 15.00px
    md: '1.125rem', // 18.00px
    lg: '1.35rem', // 21.60px
    xl: '1.62rem', // 25.92px
    '2xl': '1.944rem', // 31.10px
    '3xl': '2.333rem', // 37.32px
    '4xl': '2.799rem', // 44.79px
    '5xl': '3.359rem', // 53.75px
    '6xl': '4.031rem', // 64.50px
  },
  colors: {
    brand: '#07C969',
    background: '#1b202c',
    warn: {
      100: '#FFEDD5',
    },
    success: {
      50: '#EAF8F6',
      100: '#CFF7EE',
      500: '#07C969',
      600: '#07B150',
    },
    info: {
      50: '#F3FAFC',
      300: '#0077B5',
      500: '#1B96EA',
    },
    accent: {
      50: '#F5F7FB',
      400: '#AB8EF6',
      500: '#9061F5',
      800: '#462AAA',
    },
    danger: {
      50: '#FED7D7',
      100: '#FED7D7',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
      600: '#C53030',
    },
  },
  config,
})

export default customTheme
