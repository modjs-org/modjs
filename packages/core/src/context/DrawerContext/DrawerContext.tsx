import { createContext } from 'react'

interface DrawerContextProps {
    isOpen?: boolean
    toggleDrawer?: () => void
}

const DrawerContext = createContext<DrawerContextProps>({
    isOpen: false,
    toggleDrawer: () => {},
})

export default DrawerContext
