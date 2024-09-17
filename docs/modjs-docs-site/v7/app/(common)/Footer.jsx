'use client'
import React from 'react'
import { Box, Container, Footer, Grid, Link, Typography } from '@modjs/core'
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
                        <Typography variant="small">Made with ♥</Typography>
                    </Box>

                    <Box
                        display="flex"
                        justifyContent={smScreen ? 'start' : 'center'}
                        alignItems="center"
                        mb={7}
                    >
                        <Typography variant="small">
                            © 2024 www.prashan.dev
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
                            Sitemap
                        </Link>
                    </Box>
                </Grid>
            </Container>
        </Footer>
    )
}

export default ModFooter
