import { createIcon, IconProps } from '@chakra-ui/icons'
import { ComponentWithAs } from '@chakra-ui/react'

export const ArrowDown: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'CheckCircle',
  viewBox: '0 0 24 24',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.25,7.311,12.53,18.03a.749.749,0,0,1-1.06,0L.75,7.311"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
})
