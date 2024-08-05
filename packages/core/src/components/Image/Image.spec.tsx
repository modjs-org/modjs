import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import Bob from '../../assets/images/bob.jpeg'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import Image from './Image'
import Layout from '../Layout/Layout'

describe('<Image>', () => {
    context('Render', () => {
        it('should render default Image component', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Image src={Bob} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .and('have.css', 'border-radius', '2px')
                .and('have.css', 'height', '240px')
                .and('have.css', 'width', '240px')
                .and('have.css', 'filter', 'brightness(0.6)')
        })
        it('should render custom Image component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Image
                            src={Bob}
                            brightness="dark"
                            size="lg"
                            notched={true}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .and('have.css', 'border-radius', '2px')
                .and('have.css', 'height', '320px')
                .and('have.css', 'width', '320px')
                .and('have.css', 'filter', 'brightness(0.2)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
        })
        it('should render small Image', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Image src={Bob} size="sm" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .and('have.css', 'width', '96px')
                .and('have.css', 'height', '96px')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render medium Image', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Image src={Bob} size="md" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .and('have.css', 'width', '240px')
                .and('have.css', 'height', '240px')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render large Image', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Image src={Bob} size="lg" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .and('have.css', 'width', '320px')
                .and('have.css', 'height', '320px')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render light Image', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Image src={Bob} brightness="light" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .and('have.css', 'filter', 'brightness(0.6)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render normal Image', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Image src={Bob} brightness="normal" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .and('have.css', 'filter', 'brightness(0.4)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render dark Image', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Image src={Bob} brightness="dark" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .and('have.css', 'filter', 'brightness(0.2)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render Image with no brightness', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Image src={Bob} brightness="none" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .and('have.css', 'filter', 'none')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render notched Image', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Image src={Bob} notched={true} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Image
                            src={Bob}
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                            size="lg"
                            brightness="dark"
                            notched={true}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]').should('have.attr', 'class')
            cy.get('[data-test="image"]').should('have.attr', 'style')
            cy.get('[data-test="image"]').should('have.attr', 'data-test')
            cy.get('[data-test="image"]').should('not.have.attr', 'm')
            cy.get('[data-test="image"]').should('not.have.attr', 'p')
            cy.get('[data-test="image"]').should('not.have.attr', 'size')
            cy.get('[data-test="image"]').should('not.have.attr', 'brightness')
            cy.get('[data-test="image"]').should('not.have.attr', 'notched')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Image src={Bob} m={32} p={32} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledImage = styled(Image)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledImage src={Bob} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Image
                            src={Bob}
                            style={{ margin: '32px', padding: '32px' }}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Image src={Bob} className="test" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]')
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
                        <Image
                            src={Bob}
                            size="lg"
                            brightness="none"
                            notched={true}
                        />
                        <Image src={Bob} size="sm" brightness="light" />
                        <Image src={Bob} size="md" brightness="normal" />
                        <Image src={Bob} size="lg" brightness="dark" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="image"]').should('exist')
        })
    })
})
