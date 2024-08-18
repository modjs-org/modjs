import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import { ForwardSlashIcon } from '@modjs/icons'
import Breadcrumbs from './Breadcrumbs'
import Layout from '../Layout/Layout'
import Link from '../Link/Link'
import Typography from '../Typography/Typography'

describe('<Breadcrumbs>', () => {
    context('Render', () => {
        it('should render default Breadcrumbs component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Breadcrumbs>
                            <Link variant="inline">core</Link>
                            <ForwardSlashIcon />
                            <Typography variant="body1"></Typography>
                            <Typography variant="body1">api</Typography>
                            <ForwardSlashIcon />
                            <Link variant="inline">typography</Link>
                        </Breadcrumbs>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Breadcrumbs"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Breadcrumbs
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            <Link variant="inline">core</Link>
                            <ForwardSlashIcon />
                            <Typography variant="body1"></Typography>
                            <Typography variant="body1">api</Typography>
                            <ForwardSlashIcon />
                            <Link variant="inline">typography</Link>
                        </Breadcrumbs>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Breadcrumbs"]').should('have.attr', 'class')
            cy.get('[data-test="Breadcrumbs"]').should('have.attr', 'style')
            cy.get('[data-test="Breadcrumbs"]').should('have.attr', 'data-test')
            cy.get('[data-test="Breadcrumbs"]').should('not.have.attr', 'm')
            cy.get('[data-test="Breadcrumbs"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Breadcrumbs m={32} p={32}>
                            <Link variant="inline">core</Link>
                            <ForwardSlashIcon />
                            <Typography variant="body1"></Typography>
                            <Typography variant="body1">api</Typography>
                            <ForwardSlashIcon />
                            <Link variant="inline">typography</Link>
                        </Breadcrumbs>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Breadcrumbs"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledBreadcrumbs = styled(Breadcrumbs)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledBreadcrumbs>
                            <Link variant="inline">core</Link>
                            <ForwardSlashIcon />
                            <Typography variant="body1"></Typography>
                            <Typography variant="body1">api</Typography>
                            <ForwardSlashIcon />
                            <Link variant="inline">typography</Link>
                        </StyledBreadcrumbs>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Breadcrumbs"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Breadcrumbs
                            style={{ margin: '32px', padding: '32px' }}
                        >
                            <Link variant="inline">core</Link>
                            <ForwardSlashIcon />
                            <Typography variant="body1"></Typography>
                            <Typography variant="body1">api</Typography>
                            <ForwardSlashIcon />
                            <Link variant="inline">typography</Link>
                        </Breadcrumbs>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Breadcrumbs"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Breadcrumbs className="test">
                            <Link variant="inline">core</Link>
                            <ForwardSlashIcon />
                            <Typography variant="body1"></Typography>
                            <Typography variant="body1">api</Typography>
                            <ForwardSlashIcon />
                            <Link variant="inline">typography</Link>
                        </Breadcrumbs>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Breadcrumbs"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
