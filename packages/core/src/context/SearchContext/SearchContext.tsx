import { createContext } from 'react'

interface SearchContextProps {
    isOpen?: boolean
    toggleSearchResults?: () => void
}

const SearchContext = createContext<SearchContextProps>({
    isOpen: false,
    toggleSearchResults: () => {},
})

export default SearchContext
