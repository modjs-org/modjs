import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import Layout from '../Layout/Layout'
import Snackbar from '../Snackbar/Snackbar'
import SnackbarHeader from './SnackbarHeader'
import SnackbarContent from '../SnackbarContent/SnackbarContent'
import Typography from '../Typography/Typography'

describe('<SnackbarHeader>', () => {
    context('Render', () => {
        it('should render SnackbarHeader component correctly', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Snackbar visible={true}>
                            <SnackbarHeader>
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar-header"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Snackbar visible={true}>
                            <SnackbarHeader
                                m={32}
                                p={32}
                                className="test-class"
                                style={{ margin: '32px', padding: '32px' }}
                                data-test="test"
                            >
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar-header"]').should('have.attr', 'class')
            cy.get('[data-test="snackbar-header"]').should('have.attr', 'style')
            cy.get('[data-test="snackbar-header"]').should(
                'have.attr',
                'data-test',
            )
            cy.get('[data-test="snackbar-header"]').should('not.have.attr', 'm')
            cy.get('[data-test="snackbar-header"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Snackbar visible={true}>
                            <SnackbarHeader p={32} m={32}>
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar-header"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledSnackbarHeader = styled(SnackbarHeader)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Snackbar visible={true}>
                            <StyledSnackbarHeader p={32} m={32}>
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </StyledSnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar-header"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Snackbar visible={true}>
                            <SnackbarHeader
                                p={0}
                                m={0}
                                style={{ margin: '32px', padding: '32px' }}
                            >
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar-header"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Snackbar visible={true}>
                            <SnackbarHeader className="test">
                                <Typography variant="body2">
                                    Snackbar Header goes here.
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="body2">
                                    Snackbar content goes here
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="snackbar-header"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
