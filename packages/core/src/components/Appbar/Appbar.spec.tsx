import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import { MailIcon, PilotProIcon } from '@modjs/icons'
import Appbar from './Appbar'
import Box from '../Box/Box'
import Container from '../Container/Container'
import Link from '../Link/Link'
import Typography from '../Typography/Typography'
import Layout from '../Layout/Layout'

describe('<Appbar>', () => {
    context('Render', () => {
        it('should render appbar component with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Appbar>
                            <Container
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Box>
                                    <Link
                                        variant="transparent"
                                        href="/"
                                        data-testid="logo-link"
                                    >
                                        <PilotProIcon />
                                    </Link>
                                </Box>
                                <Box
                                    display="flex"
                                    gap="normal"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Box elevation="light">
                                        <Link
                                            href="/contact"
                                            data-testid="contact-us-link"
                                        >
                                            <MailIcon fill="white" />
                                            Outlined Link
                                        </Link>
                                    </Box>
                                </Box>
                            </Container>
                        </Appbar>
                        <Container>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                        </Container>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="appbar"]').should('exist')
        })
        it('should render sticky appbar', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Appbar sticky={true}>
                            <Container
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Box>
                                    <Link
                                        variant="transparent"
                                        href="/"
                                        data-testid="logo-link"
                                    >
                                        <PilotProIcon />
                                    </Link>
                                </Box>
                                <Box
                                    display="flex"
                                    gap="normal"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Box elevation="light">
                                        <Link
                                            href="/contact"
                                            data-testid="contact-us-link"
                                        >
                                            <MailIcon fill="white" />
                                            Outlined Link
                                        </Link>
                                    </Box>
                                </Box>
                            </Container>
                        </Appbar>
                        <Container>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                        </Container>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="appbar"]')
                .should('exist')
                .and('have.css', 'position', 'sticky')
                .and('have.css', 'top', '0px')
                .and('have.css', 'width', '738px')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Appbar
                            sticky={true}
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            <Container
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Box>
                                    <Link
                                        variant="transparent"
                                        href="/"
                                        data-testid="logo-link"
                                    >
                                        <PilotProIcon />
                                    </Link>
                                </Box>
                                <Box
                                    display="flex"
                                    gap="normal"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Box elevation="light">
                                        <Link
                                            href="/contact"
                                            data-testid="contact-us-link"
                                        >
                                            <MailIcon fill="white" />
                                            Outlined Link
                                        </Link>
                                    </Box>
                                </Box>
                            </Container>
                        </Appbar>
                        <Container>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                        </Container>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="appbar"]').should('have.attr', 'class')
            cy.get('[data-test="appbar"]').should('have.attr', 'style')
            cy.get('[data-test="appbar"]').should('have.attr', 'data-test')
            cy.get('[data-test="appbar"]').should('not.have.attr', 'm')
            cy.get('[data-test="appbar"]').should('not.have.attr', 'p')
            cy.get('[data-test="appbar"]').should('not.have.attr', 'sticky')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Appbar m={32} p={32}>
                            <Container
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Box>
                                    <Link
                                        variant="transparent"
                                        href="/"
                                        data-testid="logo-link"
                                    >
                                        <PilotProIcon />
                                    </Link>
                                </Box>
                                <Box
                                    display="flex"
                                    gap="normal"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Box elevation="light">
                                        <Link
                                            href="/contact"
                                            data-testid="contact-us-link"
                                        >
                                            <MailIcon fill="white" />
                                            Outlined Link
                                        </Link>
                                    </Box>
                                </Box>
                            </Container>
                        </Appbar>
                        <Container>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                        </Container>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="appbar"]')
                .should('exist')

                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledAppbar = styled(Appbar)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <StyledAppbar>
                            <Container
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Box>
                                    <Link
                                        variant="transparent"
                                        href="/"
                                        data-testid="logo-link"
                                    >
                                        <PilotProIcon />
                                    </Link>
                                </Box>
                                <Box
                                    display="flex"
                                    gap="normal"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Box elevation="light">
                                        <Link
                                            href="/contact"
                                            data-testid="contact-us-link"
                                        >
                                            <MailIcon fill="white" />
                                            Outlined Link
                                        </Link>
                                    </Box>
                                </Box>
                            </Container>
                        </StyledAppbar>
                        <Container>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                        </Container>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="appbar"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Appbar style={{ margin: '32px', padding: '32px' }}>
                            <Container
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Box>
                                    <Link
                                        variant="transparent"
                                        href="/"
                                        data-testid="logo-link"
                                    >
                                        <PilotProIcon />
                                    </Link>
                                </Box>
                                <Box
                                    display="flex"
                                    gap="normal"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Box elevation="light">
                                        <Link
                                            href="/contact"
                                            data-testid="contact-us-link"
                                        >
                                            <MailIcon fill="white" />
                                            Outlined Link
                                        </Link>
                                    </Box>
                                </Box>
                            </Container>
                        </Appbar>
                        <Container>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                        </Container>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="appbar"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Appbar className="test">
                            <Container
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Box>
                                    <Link
                                        variant="transparent"
                                        href="/"
                                        data-testid="logo-link"
                                    >
                                        <PilotProIcon />
                                    </Link>
                                </Box>
                                <Box
                                    display="flex"
                                    gap="normal"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Box elevation="light">
                                        <Link
                                            href="/contact"
                                            data-testid="contact-us-link"
                                        >
                                            <MailIcon fill="white" />
                                            Outlined Link
                                        </Link>
                                    </Box>
                                </Box>
                            </Container>
                        </Appbar>
                        <Container>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                        </Container>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="appbar"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
