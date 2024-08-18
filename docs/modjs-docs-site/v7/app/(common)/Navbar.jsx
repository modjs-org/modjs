'use client'
import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

import {
    Appbar,
    Button,
    Box,
    Drawer,
    DrawerContent,
    Container,
    Typography,
    SideNavigation,
    Tooltip,
    TooltipContent,
} from '@modjs/core'
import {
    DarkThemeIcon,
    LightThemeIcon,
    SettingsIcon,
    MenuIcon,
    CloseIcon,
} from '@modjs/icons'

import GlobalSearch from '../(shared)/GlobalSearch'
import HomeNavigation from '../(shared)/HomeNavigation'
import CoreNavigation from '../(shared)/CoreNavigation'
import IconsNavigation from '../(shared)/IconsNavigation'

import lightTheme from '../../public/assets/themes/lightTheme'
import darkTheme from '../../public/assets/themes/darkTheme'
import ModjsPackages from '../(shared)/ModjsPackages'

const Navbar = ({
    //TODO: Use trypscript for types
    currentPage, //string
}) => {
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
                    currentPage === 'root' ||
                    currentPage === 'root/core' ||
                    currentPage === 'root/icons'
                        ? 'none'
                        : ''
                }
            >
                <Container
                    fluid={
                        currentPage === 'root' ||
                        currentPage === 'root/core' ||
                        currentPage === 'root/icons'
                            ? false
                            : true
                    }
                    display="flex"
                    justifyContent="space-between"
                >
                    <Drawer
                        toggleOpen={
                            <Tooltip
                                arrow={true}
                                el={
                                    <Button
                                        variant="icon"
                                        data-testid="Navbar_btn-toggle_packages_drawer"
                                    >
                                        {currentPage === 'root/core' ||
                                        currentPage === 'root/core/children'
                                            ? '@modjs/core v7.0.0'
                                            : currentPage === 'root/icons' ||
                                                currentPage ===
                                                    'root/icons/children'
                                              ? '@modjs/icons v7.0.0'
                                              : '@modjs v7.0.0'}
                                        <MenuIcon />
                                    </Button>
                                }
                            >
                                <TooltipContent displayPosition="left">
                                    <Typography variant="small" color="white">
                                        Toggle Packages Drawer
                                    </Typography>
                                </TooltipContent>
                            </Tooltip>
                        }
                        toggleClose={
                            <Tooltip
                                arrow={true}
                                el={
                                    <Button variant="icon">
                                        {currentPage === 'root/core' ||
                                        currentPage === 'root/core/children'
                                            ? '@modjs/core v7.0.0'
                                            : currentPage === 'root/icons' ||
                                                currentPage ===
                                                    'root/icons/children'
                                              ? '@modjs/icons v7.0.0'
                                              : '@modjs v7.0.0'}

                                        <CloseIcon />
                                    </Button>
                                }
                            >
                                <TooltipContent displayPosition="left">
                                    <Typography variant="small" color="white">
                                        Toggle Packages Drawer
                                    </Typography>
                                </TooltipContent>
                            </Tooltip>
                        }
                    >
                        <DrawerContent
                            title={
                                <ModjsPackages
                                    dropdownToggleOpenText={
                                        currentPage === 'root/core' ||
                                        currentPage === 'root/core/children'
                                            ? '@modjs/core v7.0.0'
                                            : currentPage === 'root/icons' ||
                                                currentPage ===
                                                    'root/icons/children'
                                              ? '@modjs/icons v7.0.0'
                                              : '@modjs v7.0.0'
                                    }
                                    dropdownToggleCloseText={
                                        currentPage === 'root/core' ||
                                        currentPage === 'root/core/children'
                                            ? '@modjs/core v7.0.0'
                                            : currentPage === 'root/icons' ||
                                                currentPage ===
                                                    'root/icons/children'
                                              ? '@modjs/icons v7.0.0'
                                              : '@modjs v7.0.0'
                                    }
                                />
                            }
                        >
                            <SideNavigation>
                                {currentPage === 'root/core' ||
                                currentPage === 'root/core/children' ? (
                                    <CoreNavigation />
                                ) : currentPage === 'root/icons' ||
                                  currentPage === 'root/icons/children' ? (
                                    <IconsNavigation />
                                ) : (
                                    <HomeNavigation />
                                )}
                            </SideNavigation>
                        </DrawerContent>
                    </Drawer>

                    <Box>
                        {/* Menu Items */}
                        <Box display="flex" alignItems="center" gap={8}>
                            {/* Global Search */}
                            <GlobalSearch
                                toggleOpenId="desktop-search-field-toggle-open"
                                toggleCloseId="desktop-search-field-toggle-close"
                                searchFieldId="desktop-search"
                            />

                            {/* Settings Drawer */}
                            <Drawer
                                toggleOpen={
                                    <Tooltip
                                        arrow={true}
                                        el={
                                            <Button variant="icon">
                                                <SettingsIcon />
                                            </Button>
                                        }
                                    >
                                        <TooltipContent displayPosition="left">
                                            <Typography
                                                variant="small"
                                                color="white"
                                            >
                                                Toggle Settings Drawer
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
                        </Box>
                    </Box>
                </Container>
            </Appbar>
        </>
    )
}

export default Navbar
