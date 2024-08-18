import { createContext } from 'react'

interface AccordionContextProps {
    isOpen?: boolean
    toggleAccordion?: () => void
}

const AccordionContext = createContext<AccordionContextProps>({
    isOpen: false,
    toggleAccordion: () => {},
})

export default AccordionContext
