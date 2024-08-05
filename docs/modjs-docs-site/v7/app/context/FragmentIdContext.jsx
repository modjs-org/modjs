import { createContext } from 'react'

const FragmentIdContext = createContext({
    fragmentId: null,
    setFragmentId: () => {},
})

export default FragmentIdContext
