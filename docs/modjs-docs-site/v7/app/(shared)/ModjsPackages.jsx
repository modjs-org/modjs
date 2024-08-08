import React from 'react'
import {
    Box,
    Button,
    Card,
    CardHeader,
    CardContent,
    Link,
    Dropdown,
    DropdownContent,
    Typography,
} from '@modjs/core'
import { DownChevronIcon, UpChevronIcon } from '@modjs/icons'

const ModjsPackages = ({ dropdownToggleOpenText, dropdownToggleCloseText }) => {
    return (
        <Dropdown
            toggleOpen={
                <Button
                    variant="icon"
                    notched={true}
                    textTransform="none"
                    data-testid="ModjsPackages_btn-toggle_packages_dropdown"
                >
                    {dropdownToggleOpenText}
                    <DownChevronIcon />
                </Button>
            }
            toggleClose={
                <Button variant="icon" notched={true} textTransform="none">
                    {dropdownToggleCloseText}
                    <UpChevronIcon />
                </Button>
            }
        >
            <DropdownContent>
                <Box>
                    <Box my={8}>
                        <Card variant="filled">
                            <CardHeader>
                                <Typography variant="small">Home</Typography>
                            </CardHeader>
                            <CardContent>
                                <Link
                                    variant="transparent"
                                    href="/"
                                    pl={0}
                                    fs={1}
                                    data-testid="ModjsPackages_link-home"
                                >
                                    @modjs v7.0.0
                                </Link>
                            </CardContent>
                        </Card>
                        <Card variant="filled">
                            <CardHeader>
                                <Typography variant="small">
                                    Production-Ready React Core UI Components
                                </Typography>
                            </CardHeader>
                            <CardContent>
                                <Link
                                    variant="transparent"
                                    href="/core"
                                    pl={0}
                                    fs={1}
                                    data-testid="ModjsPackages_link-core"
                                >
                                    @modjs/core v7.0.0
                                </Link>
                            </CardContent>
                        </Card>

                        <Card variant="filled">
                            <CardHeader>
                                <Typography variant="small">
                                    Production-Ready React UI Icons
                                </Typography>
                            </CardHeader>
                            <CardContent>
                                <Link
                                    variant="transparent"
                                    href="/icons"
                                    pl={0}
                                    fs={1}
                                    data-testid="ModjsPackages_link-icons"
                                >
                                    @modjs/icons v7.0.0
                                </Link>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </DropdownContent>
        </Dropdown>
    )
}

export default ModjsPackages
