import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import Layout from '../Layout/Layout'
import LinearProgress from './LinearProgress'

describe('<LinearProgress>', () => {
    context('Render', () => {
        it('should render LinearProgress component with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <LinearProgress />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="linear-progress"]')
                .should('exist')
                .should('have.css', 'display', 'block')
                .and('have.css', 'background-color', 'rgb(31, 142, 255)')
        })
        it('should render LinearProgress component with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <LinearProgress variant="success" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="linear-progress"]')
                .should('exist')
                .should('have.css', 'display', 'block')
                .and('have.css', 'background-color', 'rgb(90, 107, 49)')
        })
        it('should render success linear-progress bar', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <LinearProgress variant="success" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="linear-progress"]')
                .should('exist')
                .should('have.css', 'display', 'block')
                .and('have.css', 'background-color', 'rgb(90, 107, 49)')
        })
        it('should render error linear-progress bar', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <LinearProgress variant="error" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="linear-progress"]')
                .should('exist')
                .should('have.css', 'display', 'block')
                .and('have.css', 'background-color', 'rgb(202, 60, 31)')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <LinearProgress
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="linear-progress"]').should('have.attr', 'class')
            cy.get('[data-test="linear-progress"]').should('have.attr', 'style')
            cy.get('[data-test="linear-progress"]').should(
                'have.attr',
                'data-test',
            )
            cy.get('[data-test="linear-progress"]').should('not.have.attr', 'm')
            cy.get('[data-test="linear-progress"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <LinearProgress m={32} p={32} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="linear-progress"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledLinearProgress = styled(LinearProgress)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledLinearProgress />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="linear-progress"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <LinearProgress
                            style={{ margin: '32px', padding: '32px' }}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="linear-progress"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <LinearProgress className="test" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="linear-progress"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })

    context('Interactions and Behavior', () => {
        it('should not show linear-progress if not loading', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <LinearProgress isLoading={false} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="linear-progress"]')
                .should('exist')
                .should('have.css', 'display', 'none')
        })
        it('should show linear-progress if loading', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <LinearProgress isLoading={true} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="linear-progress"]')
                .should('exist')
                .should('have.css', 'display', 'block')
                .and('have.css', 'background-color', 'rgb(31, 142, 255)')
        })
    })
})
