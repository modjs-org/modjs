'use client'
import React from 'react'
import { Box, Container, Footer, Grid, Link, Typography } from '@modjs/core'
import { FullStackProIcon } from '@modjs/icons'
import { useMediaQuery } from '@modjs/utils'

const ModFooter = () => {
    const smScreen = useMediaQuery({ query: { media: '(max-width: 768px)' } })
    return (
        <Footer borderTop="dark" position="relative">
            <Container py={16}>
                <Grid columns={3}>
                    <Box
                        display="flex"
                        gap={8}
                        justifyContent="start"
                        alignItems="center"
                        mb={7}
                    >
                        <Link
                            variant="icon"
                            href="https://www.fullstackpro.io"
                            data-testid="Footer_link-fullstackpro_home_page"
                        >
                            <FullStackProIcon height="1rem" width="1.5rem" />
                        </Link>
                        <Typography variant="small">
                            Made with ♥ by www.fullstackpro.io
                        </Typography>
                    </Box>

                    <Box
                        display="flex"
                        justifyContent={smScreen ? 'start' : 'center'}
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
                        justifyContent={smScreen ? 'start' : 'end'}
                        mb={7}
                    >
                        <Link
                            variant="inline"
                            color="light"
                            fs={0.75}
                            href="/sitemap.xml"
                            data-testid="Footer_link-sitemap"
                        >
                            Sitemap.xml
                        </Link>
                    </Box>
                </Grid>
            </Container>
        </Footer>
    )
}

export default ModFooter
