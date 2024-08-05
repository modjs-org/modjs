import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import SlideshowDescription from './SlideshowDescription'
import Typography from '../Typography/Typography'
import Layout from '../Layout/Layout'

describe('<SlideshowDescription>', () => {
    context('Render', () => {
        it('should render default SlideshowDescription component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SlideshowDescription>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                        </SlideshowDescription>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow-description"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <SlideshowDescription
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                        </SlideshowDescription>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow-description"]').should(
                'have.attr',
                'class',
            )
            cy.get('[data-test="slideshow-description"]').should(
                'have.attr',
                'style',
            )
            cy.get('[data-test="slideshow-description"]').should(
                'have.attr',
                'data-test',
            )
            cy.get('[data-test="slideshow-description"]').should(
                'not.have.attr',
                'm',
            )
            cy.get('[data-test="slideshow-description"]').should(
                'not.have.attr',
                'p',
            )
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SlideshowDescription m={32} p={32}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                        </SlideshowDescription>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow-description"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledSlideshowDescription = styled(SlideshowDescription)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledSlideshowDescription>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                        </StyledSlideshowDescription>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow-description"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SlideshowDescription
                            style={{ margin: '32px', padding: '32px' }}
                        >
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                        </SlideshowDescription>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow-description"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SlideshowDescription className="test">
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Typography>
                        </SlideshowDescription>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow-description"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
