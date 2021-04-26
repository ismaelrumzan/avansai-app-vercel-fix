import { createIcon, IconProps } from '@chakra-ui/icons'
import { ComponentWithAs } from '@chakra-ui/react'

export const CheckCircle: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'CheckCircle',
  viewBox: '0 0 24 24',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6,13.223,8.45,16.7a1.049,1.049,0,0,0,1.707.051L18,6.828"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      ,
      <path
        d="M0.750 11.999 A11.250 11.250 0 1 0 23.250 11.999 A11.250 11.250 0 1 0 0.750 11.999 Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
})
