import { useEffect, useState } from 'react'

interface UseMediaQueryProps {
    query: {
        media: string
    }
}

const useMediaQuery = ({ query: { media } }: UseMediaQueryProps) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const mql = window.matchMedia(media)
        setMatches(mql.matches)

        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }
        mql.addEventListener('change', listener)

        return () => mql.removeEventListener('change', listener)
    }, [media])
    return matches
}

export default useMediaQuery
