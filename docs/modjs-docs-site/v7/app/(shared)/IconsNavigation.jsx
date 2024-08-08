import React, { useEffect, useState, useRef } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionTitle,
    Link,
    Typography,
    UnorderedList,
    List,
} from '@modjs/core'
import { GithubIcon } from '@modjs/icons'

const IconsNavigation = () => {
    const gettingStartedAccordionRef = useRef(null)
    const apiAccordionRef = useRef(null)

    const [currentPage, setCurrentPage] = useState(null)

    const [gettingStartedAccordionOpen, setGettingStartedAccordionOpen] =
        useState(false)
    const [apiAccordionOpen, setApiAccordionOpen] = useState(false)

    //Set currentPage on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const page = window.location.pathname
            setCurrentPage(page)
        }
    }, [currentPage])

    //Auto open AccordionContent based on currentPage
    useEffect(() => {
        if (currentPage) {
            setGettingStartedAccordionOpen(
                /customization/.test(currentPage) ||
                    /installation/.test(currentPage),
            )
            setApiAccordionOpen(/api/.test(currentPage))
        }
    }, [apiAccordionOpen, currentPage])

    // Scroll to active link in AccordionContent
    useEffect(() => {
        if (
            (currentPage && apiAccordionRef.current) ||
            (currentPage && gettingStartedAccordionRef.current)
        ) {
            // Find the active link element
            const currentPageElement =
                apiAccordionRef.current.querySelector(
                    `[href="${currentPage}"]`,
                ) ||
                gettingStartedAccordionRef.current.querySelector(
                    `[href="${currentPage}"]`,
                )

            if (currentPageElement) {
                currentPageElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                })
            }
        }
    }, [currentPage])

    return (
        <>
            <Link
                variant="icon"
                mb={16}
                href="https://github.com/modjs-org/modjs/tree/main/packages/icons"
                target="_blank"
                data-testid="IconsNavigation_link-github"
            >
                Github Repository <GithubIcon />
            </Link>
            {/* Getting Started */}
            <Accordion
                variant="transparent"
                notched={false}
                defaultOpen={gettingStartedAccordionOpen}
            >
                <AccordionTitle data-testid="IconsNavigation_accordion-getting_started">
                    <Typography variant="h3">Getting Started</Typography>
                </AccordionTitle>
                <AccordionContent ref={gettingStartedAccordionRef}>
                    <UnorderedList>
                        <List>
                            <Link
                                variant="transparent"
                                href="/icons/installation"
                                active={/icons\/installation$/.test(
                                    currentPage,
                                )}
                                data-testid="IconsNavigation_link-installation"
                            >
                                Installation
                            </Link>
                        </List>
                        <List>
                            <Link
                                variant="transparent"
                                href="/icons/customization"
                                active={/icons\/customization$/.test(
                                    currentPage,
                                )}
                                data-testid="IconsNavigation_link-customization"
                            >
                                Customization
                            </Link>
                        </List>
                    </UnorderedList>
                </AccordionContent>
            </Accordion>

            <Accordion
                variant="transparent"
                notched={false}
                defaultOpen={apiAccordionOpen}
            >
                <AccordionTitle data-testid="IconsNavigation_accordion-component_api">
                    <Typography variant="h3">Component API</Typography>
                </AccordionTitle>
                <AccordionContent ref={apiAccordionRef}>
                    <UnorderedList>
                        <List>
                            <Link
                                variant="transparent"
                                href="/icons/api"
                                active={/icons\/api$/.test(currentPage)}
                                data-testid="IconsNavigation_link-icons_api"
                            >
                                Icons API
                            </Link>
                        </List>
                    </UnorderedList>
                </AccordionContent>
            </Accordion>
        </>
    )
}

export default IconsNavigation
