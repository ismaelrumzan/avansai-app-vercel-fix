import { CloseButton, Flex, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { PropsWithChildren, ReactElement } from 'react'

interface Props {
  isOpen?: boolean
  onClose?: () => void
}

export const MobileNavContent = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<Props>): ReactElement => {
  const bg = useColorModeValue('white', 'background')
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{ duration: 0.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Flex
            direction="column"
            w="100%"
            bg={bg}
            h="100vh"
            overflow="auto"
            pos="absolute"
            top={0}
            left={0}
            zIndex={20}
            px={6}
            py={6}
          >
            {children}
            <CloseButton pos="absolute" top={8} right={6} onClick={onClose} />
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
