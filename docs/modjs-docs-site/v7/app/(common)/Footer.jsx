'use client'
import React from 'react'
import { Container, Footer, Link } from '@modjs/core'

const ModFooter = () => {
    return (
        <Footer borderTop="dark" position="relative">
            <Container py={16} display="flex" justifyContent="space-between">
                <Link variant="inline" href="/" color="light" fs={0.75}>
                    Made with ♥ by www.fullstackpro.io
                </Link>
                <Link
                    href="/sitemap.xml"
                    variant="inline"
                    color="light"
                    fs={0.75}
                >
                    Sitemap
                </Link>
            </Container>
        </Footer>
    )
}

export default ModFooter
