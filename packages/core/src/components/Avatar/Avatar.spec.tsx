import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import Bob from '../../assets/images/bob.jpeg'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import Avatar from './Avatar'
import Layout from '../Layout/Layout'

describe('<Avatar>', () => {
    context('Render', () => {
        it('should render default Avatar component', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Avatar src={Bob} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .and('have.css', 'border-radius', '100%')
                .and('have.css', 'height', '64px')
                .and('have.css', 'width', '64px')
                .and('have.css', 'filter', 'brightness(0.6)')
        })
        it('should render custom Avatar component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Avatar src={Bob} brightness="dark" size="lg" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .and('have.css', 'border-radius', '100%')
                .and('have.css', 'height', '96px')
                .and('have.css', 'width', '96px')
                .and('have.css', 'filter', 'brightness(0.2)')
        })
        it('should render small avatar', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Avatar src={Bob} size="sm" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .and('have.css', 'width', '32px')
                .and('have.css', 'height', '32px')
                .and('have.css', 'border-radius', '100%')
        })
        it('should render medium avatar', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Avatar src={Bob} size="md" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .and('have.css', 'width', '64px')
                .and('have.css', 'height', '64px')
                .and('have.css', 'border-radius', '100%')
        })
        it('should render large avatar', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Avatar src={Bob} size="lg" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .and('have.css', 'width', '96px')
                .and('have.css', 'height', '96px')
                .and('have.css', 'border-radius', '100%')
        })
        it('should render light avatar', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Avatar src={Bob} brightness="light" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .and('have.css', 'filter', 'brightness(0.6)')
                .and('have.css', 'border-radius', '100%')
        })
        it('should render normal avatar', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Avatar src={Bob} brightness="normal" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .and('have.css', 'filter', 'brightness(0.4)')
                .and('have.css', 'border-radius', '100%')
        })
        it('should render dark avatar', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Avatar src={Bob} brightness="dark" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .and('have.css', 'filter', 'brightness(0.2)')
                .and('have.css', 'border-radius', '100%')
        })
        it('should render avatar with no brightness', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Avatar src={Bob} brightness="none" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .and('have.css', 'filter', 'none')
                .and('have.css', 'border-radius', '100%')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Avatar
                            src={Bob}
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                            size="lg"
                            brightness="dark"
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]').should('have.attr', 'class')
            cy.get('[data-test="avatar"]').should('have.attr', 'style')
            cy.get('[data-test="avatar"]').should('have.attr', 'data-test')
            cy.get('[data-test="avatar"]').should('not.have.attr', 'm')
            cy.get('[data-test="avatar"]').should('not.have.attr', 'p')
            cy.get('[data-test="avatar"]').should('not.have.attr', 'size')
            cy.get('[data-test="avatar"]').should('not.have.attr', 'brightness')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Avatar src={Bob} m={32} p={32} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledAvatar = styled(Avatar)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledAvatar src={Bob} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Avatar
                            src={Bob}
                            style={{ margin: '32px', padding: '32px' }}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Avatar src={Bob} className="test" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Integrations', () => {
        it('should integrate well with other components', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Avatar src={Bob} size="lg" brightness="none" />
                        <Avatar src={Bob} size="sm" brightness="light" />
                        <Avatar src={Bob} size="md" brightness="normal" />
                        <Avatar src={Bob} size="lg" brightness="dark" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="avatar"]').should('exist')
        })
    })
})
