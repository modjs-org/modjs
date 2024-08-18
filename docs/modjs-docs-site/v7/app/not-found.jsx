//core
'use client'
import React from 'react'
import { Layout, Box, Container, Grid, Section, Typography } from '@modjs/core'
import ThemeWrapper from './wrappers/ThemeWrapper'
import ModFooter from './(common)/Footer'
import Navbar from './(common)/Navbar'

export default function Custom404() {
    return (
        <ThemeWrapper>
            <Layout>
                <Navbar currentPage="root" />
                <Section id="intro" height="85vh">
                    <Container>
                        <Box pt={30} pb={64}>
                            <Grid columns={2} gap={32}>
                                <Box>
                                    <Typography variant="h1" color="error">
                                        Page Not Found
                                    </Typography>
                                    <Typography variant="body1">
                                        The page you are looking for does not
                                        exist or have been moved.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Box>
                    </Container>
                </Section>
                <ModFooter />
            </Layout>
        </ThemeWrapper>
    )
}
