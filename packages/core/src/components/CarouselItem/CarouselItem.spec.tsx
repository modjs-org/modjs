import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import Bob from '../../assets/images/bob.jpeg'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import CarouselItem from './CarouselItem'
import Avatar from '../Avatar/Avatar'
import Layout from '../Layout/Layout'

describe('<CarouselItem>', () => {
    context('Render', () => {
        it('should render default CarouselItem component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <CarouselItem>
                            <Avatar src={Bob} size="md" />
                        </CarouselItem>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel-item"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <CarouselItem
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            <Avatar src={Bob} size="md" />
                        </CarouselItem>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel-item"]').should('have.attr', 'class')
            cy.get('[data-test="carousel-item"]').should('have.attr', 'style')
            cy.get('[data-test="carousel-item"]').should(
                'have.attr',
                'data-test',
            )
            cy.get('[data-test="carousel-item"]').should('not.have.attr', 'm')
            cy.get('[data-test="carousel-item"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <CarouselItem m={32} p={32}>
                            <Avatar src={Bob} size="md" />
                        </CarouselItem>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel-item"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledCarouselItem = styled(CarouselItem)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledCarouselItem>
                            <Avatar src={Bob} size="md" />
                        </StyledCarouselItem>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel-item"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <CarouselItem
                            style={{ margin: '32px', padding: '32px' }}
                        >
                            <Avatar src={Bob} size="md" />
                        </CarouselItem>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel-item"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <CarouselItem className="test">
                            <Avatar src={Bob} size="md" />
                        </CarouselItem>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel-item"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
