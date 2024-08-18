import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import '../../../cypress/fixtures/style.css'
import { LoginIcon } from '@modjs/icons'
import Link from './Link'
import Layout from '../Layout/Layout'

describe('<Link>', () => {
    context('Render', () => {
        it('should render Link with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Link>Link with default props</Link>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(31, 142, 255)')
                .and('have.css', 'color', 'rgb(255, 255, 255)')
                .and('have.css', 'font-size', '12px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'uppercase')
                .and('have.css', 'padding', '10px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'left')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render Link with custom props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Link variant="outlined" notched={true} disabled={true}>
                            Link with default props
                        </Link>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'color', 'rgb(71, 71, 71)')
                .and('have.css', 'font-size', '12px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'uppercase')
                .and('have.css', 'padding', '12px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'center')
                .then($Link => {
                    const beforeEl = window.getComputedStyle(
                        $Link[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled Link without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Link variant="filled" notched={false}>
                            Filled Link without Notch
                        </Link>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(31, 142, 255)')
                .and('have.css', 'color', 'rgb(255, 255, 255)')
                .and('have.css', 'font-size', '12px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'uppercase')
                .and('have.css', 'padding', '10px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'left')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render filled Link with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Link variant="filled" notched={true}>
                            Filled Link with Notch
                        </Link>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(31, 142, 255)')
                .and('have.css', 'color', 'rgb(255, 255, 255)')
                .and('have.css', 'font-size', '12px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'uppercase')
                .and('have.css', 'padding', '10px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'left')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
        })
        it('should render outlined Link without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Link variant="outlined" notched={false}>
                            Outlined Link without Notch
                        </Link>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'color', 'rgb(71, 71, 71)')
                .and('have.css', 'font-size', '12px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'uppercase')
                .and('have.css', 'padding', '12px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'center')
        })
        it('should render outlined Link with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Link variant="outlined" notched={true}>
                            Outlined Link with Notch
                        </Link>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'color', 'rgb(71, 71, 71)')
                .and('have.css', 'font-size', '12px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'uppercase')
                .and('have.css', 'padding', '12px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'center')
                .then($Link => {
                    const beforeEl = window.getComputedStyle(
                        $Link[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render transparent Link', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Link variant="transparent">Transparent Link</Link>
                        <Link variant="transparent">Transparent Link</Link>
                        <Link variant="transparent">Transparent Link</Link>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'color', 'rgb(71, 71, 71)')
                .and('have.css', 'font-size', '14px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'padding', '8px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'width', '721px')
                .and('have.css', 'max-width', '100%')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'left')
        })
        it('should render icon Link', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Link variant="icon">
                            <LoginIcon /> Icon Link
                        </Link>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'color', 'rgb(71, 71, 71)')
                .and('have.css', 'font-size', '14px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'none')
                .and('have.css', 'padding', '10px')
                .and('have.css', 'display', 'flex')
                .and('have.css', 'gap', '4px')
                .and('have.css', 'align-items', 'center')
                .and('have.css', 'justify-content', 'left')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
        })
        it('should render inline Link', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Link variant="inline">Inline Link</Link>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'color', 'rgb(31, 142, 255)')
                .and('have.css', 'font-size', '16px')
                .and('have.css', 'font-weight', '600')
                .and('have.css', 'text-transform', 'none')
                .and('have.css', 'padding', '0px 4px')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Link
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                            variant="outlined"
                            notched={true}
                        >
                            Link with custom props
                        </Link>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]').should('have.attr', 'class')
            cy.get('[data-test="link"]').should('have.attr', 'style')
            cy.get('[data-test="link"]').should('have.attr', 'data-test')
            cy.get('[data-test="link"]').should('not.have.attr', 'm')
            cy.get('[data-test="link"]').should('not.have.attr', 'p')
            cy.get('[data-test="link"]').should('not.have.attr', 'variant')
            cy.get('[data-test="link"]').should('not.have.attr', 'notched')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Link p={32} m={32}>
                            Link
                        </Link>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledLink = styled(Link)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <StyledLink p={32} m={32}>
                            Link
                        </StyledLink>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Link style={{ margin: '32px', padding: '32px' }}>
                            Link
                        </Link>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Link className="test">Link</Link>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Integration', () => {
        it('should integrate well when displaying multiple Links', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Link variant="filled" notched={false} mb={8}>
                            Filled Link without Notch
                        </Link>
                        <Link variant="filled" notched={true} mb={8}>
                            Filled Link with Notch
                        </Link>
                        <Link variant="outlined" notched={false} mb={8}>
                            Outlined Link without Notch
                        </Link>
                        <Link variant="outlined" notched={true} mb={8}>
                            Outlined Link with Notch
                        </Link>
                        <Link variant="transparent" mb={8}>
                            Transparent Link
                        </Link>
                        <Link variant="icon" mb={8}>
                            <LoginIcon />
                            Icon Link
                        </Link>
                        <Link variant="inline" mb={8}>
                            Inline Link
                        </Link>
                    </Layout>
                </ModThemeProvider>,
            )
        })
    })
})
