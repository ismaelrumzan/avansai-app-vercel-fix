export const Button = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'Gilroy',
    // Because Gilroy font compared to 'Sapce Grotesk' is 4px upper
    paddingTop: '4px',
    height: 'unset',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
    },
    md: {
      fontSize: 'md',
    },
    lg: {
      fontSize: 'lg',
    },
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'green.500',
    },
    solid: {
      bg: 'green.500',
      color: 'white',
    },
    simple: ({ theme }) => {
      return {
        justifyContent: 'flex-start',
        bg: 'white',
        color: 'black',
        textTransform: 'none',
        fontFamily: 'Gilroy',
        borderRadius: theme.radii.base,
      }
    },
    success: ({ theme }) => {
      return {
        bg: 'brand',
        borderRadius: theme.radii.lg,
        color: 'black',
      }
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'success',
  },
}
