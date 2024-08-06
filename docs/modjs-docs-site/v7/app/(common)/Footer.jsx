'use client'
import React from 'react'
import { Box, Container, Footer, Grid, Link, Typography } from '@modjs/core'
import { FullStackProIcon, GithubIcon } from '@modjs/icons'
import { useMediaQuery } from '@modjs/utils'

const ModFooter = () => {
    const smScreen = useMediaQuery({ query: { media: '(max-width: 768px)' } })
    return (
        <Footer borderTop="dark" position="relative">
            <Container py={16}>
                <Grid columns={3}>
                    <Box
                        display="flex"
                        justifyContent="left"
                        alignItems="center"
                        mb={7}
                    >
                        <Link
                            variant="inline"
                            href="https://www.fullstackpro.io"
                            color="light"
                            fs={0.75}
                        >
                            Made with ♥ by www.fullstackpro.io
                        </Link>
                    </Box>

                    <Box
                        display="flex"
                        justifyContent={smScreen ? 'left' : 'center'}
                        alignItems="center"
                        mb={7}
                    >
                        <Typography variant="small">
                            © 2024 www.fullstackpro.io | 10+ years of Software
                            Engineering Excellence
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={8}
                        justifyContent={smScreen ? 'start' : 'center'}
                        mb={7}
                    >
                        <Link variant="icon">
                            <FullStackProIcon
                                height="1rem"
                                width="1.5rem"
                                fill="#5a6b31"
                            />
                        </Link>
                        <Link variant="icon" href="github" target="blank">
                            <GithubIcon />
                        </Link>
                    </Box>
                </Grid>
            </Container>
        </Footer>
    )
}

export default ModFooter
