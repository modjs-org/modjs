import { createContext } from 'react'

interface ModalContextProps {
    isOpen?: boolean
    toggleModal?: () => void
}

const ModalContext = createContext<ModalContextProps>({
    isOpen: false,
    toggleModal: () => {},
})

export default ModalContext
