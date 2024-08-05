import React, { useState, useEffect } from 'react'
import {
    Accordion,
    AccordionTitle,
    AccordionContent,
    Box,
    Button,
    Link,
    Dropdown,
    DropdownContent,
    Typography,
    UnorderedList,
    List,
    Separator,
} from '@modjs/core'
import { CloseIcon, MenuIcon } from '@modjs/icons'

const PackagesDropdown = () => {
    const [currentPage, setCurrentPage] = useState('')

    useEffect(() => {
        const pkgName = window.location.pathname
        setCurrentPage(pkgName)
    }, [currentPage])

    return (
        <Dropdown
            toggleOpen={
                <Button variant="outlined" notched={true} textTransform="none">
                    {/core/.test(currentPage)
                        ? '@modjs/core v7.0.0'
                        : /icons/.test(currentPage)
                          ? '@modjs/icons v7.0.0'
                          : '@modjs v7.0.0'}
                    <MenuIcon />
                </Button>
            }
            toggleClose={
                <Button variant="outlined" notched={true} textTransform="none">
                    {/core/.test(currentPage)
                        ? '@modjs/core v7.0.0'
                        : /icons/.test(currentPage)
                          ? '@modjs/icons v7.0.0'
                          : '@modjs v7.0.0'}
                    <CloseIcon />
                </Button>
            }
        >
            <DropdownContent>
                <Box>
                    <Accordion variant="transparent" mt={16}>
                        <Link
                            variant="transparent"
                            href="/"
                            pl={0}
                            fs={1}
                            mb={8}
                        >
                            @modjs v7.0.0
                        </Link>
                        <Separator />
                        <Typography variant="small">
                            Production-Ready React Core Components
                        </Typography>
                        <AccordionTitle>
                            <Typography variant="body1">@modjs/core</Typography>
                        </AccordionTitle>

                        <AccordionContent>
                            <UnorderedList>
                                <List>
                                    <Link
                                        variant="transparent"
                                        href="/core"
                                        color="success"
                                    >
                                        v7.0.0 (stable)
                                    </Link>
                                </List>
                            </UnorderedList>
                        </AccordionContent>
                    </Accordion>
                    <Accordion variant="transparent" mt={16}>
                        <Typography variant="small">
                            Production-Ready React UI Components
                        </Typography>
                        <AccordionTitle>
                            <Typography variant="body1">
                                @modjs/icons
                            </Typography>
                        </AccordionTitle>
                        <AccordionContent>
                            <UnorderedList>
                                <List>
                                    <Link
                                        variant="transparent"
                                        href="/icons"
                                        color="success"
                                    >
                                        v7.0.0 (stable)
                                    </Link>
                                </List>
                            </UnorderedList>
                        </AccordionContent>
                    </Accordion>
                </Box>
            </DropdownContent>
        </Dropdown>
    )
}

export default PackagesDropdown
