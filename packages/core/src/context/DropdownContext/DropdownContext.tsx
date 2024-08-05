import { createContext } from 'react'

interface DropdownContextProps {
    isOpen?: boolean
    toggleDropdown?: () => void
}

const DropdownContext = createContext<DropdownContextProps>({
    isOpen: false,
    toggleDropdown: () => {},
})

export default DropdownContext
