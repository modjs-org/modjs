import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Container, SideNavigation } from '@modjs/core'
import FragmentIdContext from '../context/FragmentIdContext'

const MdLgScreenTableOfContents = styled(SideNavigation)`
    @media (max-width: 768px) {
        display: none;
    }
`

const TableOfContentsWrapper = ({ children, defaultFragmentId, sections }) => {
    const [fragmentId, setFragmentId] = useState(null)

    const value = {
        fragmentId,
        setFragmentId,
    }
    //Calculate accurate table it position because the main div is displayed flex which causes the handleScroll to not work properly.
    const handleScroll = () => {
        const scrollPosition = window.scrollY + 50

        let lastVisibleSection = null

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i])
            if (section) {
                const { top } = section.getBoundingClientRect()
                const sectionTop = top + window.scrollY

                if (sectionTop <= scrollPosition) {
                    lastVisibleSection = sections[i]
                    break
                }
            }
        }

        if (lastVisibleSection) {
            setFragmentId(`#${lastVisibleSection}`)
        }
    }
    useEffect(() => {
        setFragmentId(defaultFragmentId)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <FragmentIdContext.Provider value={value}>
            <MdLgScreenTableOfContents>
                <Container fluid={true} mt="normal" mb="wide">
                    {children}
                </Container>
            </MdLgScreenTableOfContents>
        </FragmentIdContext.Provider>
    )
}

export default TableOfContentsWrapper
