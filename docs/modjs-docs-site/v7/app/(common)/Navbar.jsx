'use client'
import React, { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import ThemeContext from '../context/ThemeContext'

import {
    Appbar,
    Button,
    Box,
    Drawer,
    DrawerContent,
    Link,
    Container,
    Typography,
    SideNavigation,
    Tooltip,
    TooltipContent,
    AppbarMobile,
} from '@modjs/core'
import {
    DarkThemeIcon,
    LightThemeIcon,
    MailIcon,
    GithubIcon,
    MenuIcon,
    SettingsIcon,
} from '@modjs/icons'

import GlobalSearch from '../(shared)/GlobalSearch'
import PackagesDropdown from '../(shared)/PackagesDropdown'
import Navigation from '../(shared)/CoreNavigation'

import lightTheme from '../../public/assets/themes/lightTheme'
import darkTheme from '../../public/assets/themes/darkTheme'

const MdScreenCoreNavigation = styled(Drawer)`
    @media (min-width: 1281px) {
        display: none;
    }
`

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState('')

    useEffect(() => {
        const pg = window.location.pathname
        setCurrentPage(pg)
    }, [currentPage])

    const { setTheme } = useContext(ThemeContext)

    const switchToLightTheme = () => {
        setTheme(lightTheme)
        localStorage.setItem('theme', JSON.stringify(lightTheme))
    }

    const switchToDarkTheme = () => {
        setTheme(darkTheme)
        localStorage.setItem('theme', JSON.stringify(darkTheme))
    }

    return (
        <>
            <Appbar
                sticky={true}
                borderBottom={
                    /icons$/.test(currentPage)
                        ? 'none'
                        : /core$/.test(currentPage)
                          ? 'none'
                          : /\/$/.test(currentPage)
                            ? 'none'
                            : ''
                }
            >
                <Container
                    fluid={
                        /icons$/.test(currentPage)
                            ? false
                            : /core$/.test(currentPage)
                              ? false
                              : /\/$/.test(currentPage)
                                ? false
                                : true
                    }
                    display="flex"
                    justifyContent="space-between"
                >
                    <Box display="flex" gap={8}>
                        {/* Side Core Naviagtion for mdScreen */}
                        <MdScreenCoreNavigation>
                            <DrawerContent title={<PackagesDropdown />}>
                                <SideNavigation top={0}>
                                    <Navigation />
                                </SideNavigation>
                            </DrawerContent>
                        </MdScreenCoreNavigation>

                        {/* Packages Dropdown */}
                        <PackagesDropdown />
                    </Box>
                    <Box>
                        {/* Menu Items */}
                        <Box display="flex" alignItems="center" gap={8}>
                            {/* Global Search */}
                            <GlobalSearch
                                toggleOpenId="desktop-search-field-toggle-open"
                                toggleCloseId="desktop-search-field-toggle-close"
                                searchFieldId="desktop-search"
                            />

                            <Tooltip
                                arrow={true}
                                el={
                                    <Link variant="icon">
                                        <GithubIcon />
                                    </Link>
                                }
                            >
                                <TooltipContent displayPosition="left">
                                    <Typography variant="small" color="white">
                                        Github Repository
                                    </Typography>
                                </TooltipContent>
                            </Tooltip>

                            {/* Settings Drawer */}
                            <Drawer
                                toggleOpen={
                                    <Tooltip
                                        arrow={true}
                                        el={
                                            <Link variant="icon">
                                                <SettingsIcon />
                                            </Link>
                                        }
                                    >
                                        <TooltipContent displayPosition="left">
                                            <Typography
                                                variant="small"
                                                color="white"
                                            >
                                                Settings
                                            </Typography>
                                        </TooltipContent>
                                    </Tooltip>
                                }
                            >
                                <DrawerContent
                                    displayPosition="right"
                                    title={
                                        <Typography variant="h3">
                                            Settings
                                        </Typography>
                                    }
                                >
                                    <Box display="flex" gap={8}>
                                        <Button
                                            variant="icon"
                                            onClick={switchToLightTheme}
                                        >
                                            Light Theme <LightThemeIcon />
                                        </Button>
                                        <Button
                                            variant="icon"
                                            onClick={switchToDarkTheme}
                                        >
                                            Dark Theme
                                            <DarkThemeIcon />
                                        </Button>
                                    </Box>
                                </DrawerContent>
                            </Drawer>

                            <Box elevation="light">
                                <Link
                                    variant="filled"
                                    notched={true}
                                    href="https://www.fullstackpro.io/contact"
                                >
                                    <MailIcon fill="white" /> Contact Us
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Appbar>

            {/* Appbar Mobile */}
            <AppbarMobile sticky={true}>
                <Container
                    display="flex"
                    justifyContent="space-between"
                    gap={8}
                >
                    <Box display="flex" gap={8}>
                        {/* Side Core Naviagtion */}
                        <Drawer>
                            <DrawerContent title={<PackagesDropdown />}>
                                <SideNavigation top={0}>
                                    <Navigation />
                                </SideNavigation>
                            </DrawerContent>
                        </Drawer>
                    </Box>
                    <Box>
                        <Box display="flex" alignItems="center" gap={8}>
                            {/* Menu Items */}
                            <GlobalSearch
                                toggleOpenId="mobile-search-field-toggle-open"
                                toggleCloseId="mobile-search-field-toggle-close"
                                searchFieldId="mobile-search"
                            />
                            <Drawer
                                toggleOpen={
                                    <Tooltip
                                        arrow={true}
                                        el={
                                            <Link variant="icon">
                                                <MenuIcon />
                                            </Link>
                                        }
                                    >
                                        <TooltipContent displayPosition="left">
                                            <Typography
                                                variant="small"
                                                color="white"
                                            >
                                                Open Menu
                                            </Typography>
                                        </TooltipContent>
                                    </Tooltip>
                                }
                            >
                                <DrawerContent
                                    displayPosition="top"
                                    title={
                                        <Typography variant="h3">
                                            Settings
                                        </Typography>
                                    }
                                >
                                    <Box display="flex" gap={8}>
                                        <Button
                                            variant="icon"
                                            onClick={switchToLightTheme}
                                        >
                                            Light Theme <LightThemeIcon />
                                        </Button>
                                        <Button
                                            variant="icon"
                                            onClick={switchToDarkTheme}
                                        >
                                            Dark Theme
                                            <DarkThemeIcon />
                                        </Button>
                                    </Box>
                                </DrawerContent>
                            </Drawer>
                        </Box>
                    </Box>
                </Container>
            </AppbarMobile>
        </>
    )
}

export default Navbar
