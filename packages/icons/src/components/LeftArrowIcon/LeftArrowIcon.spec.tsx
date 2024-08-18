import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'

import LeftArrowIcon from './LeftArrowIcon'

describe('<LeftArrowIcon>', () => {
    context('Render', () => {
        it('should render default LeftArrowIcon component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <LeftArrowIcon />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <LeftArrowIcon
                        m={32}
                        p={32}
                        className="test-class"
                        style={{ margin: '32px', padding: '32px' }}
                        data-testid="test"
                    />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]').should('have.attr', 'class')
            cy.get('[data-test="left-arrow-icon"]').should('have.attr', 'style')
            cy.get('[data-test="left-arrow-icon"]').should(
                'have.attr',
                'data-testid',
            )
            cy.get('[data-test="left-arrow-icon"]').should('not.have.attr', 'm')
            cy.get('[data-test="left-arrow-icon"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <LeftArrowIcon m={32} p={32} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledLeftArrowIcon = styled(LeftArrowIcon)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <StyledLeftArrowIcon m={32} p={32} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <LeftArrowIcon
                        style={{ margin: '32px', padding: '32px' }}
                    />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <LeftArrowIcon className="test" />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Interactions and Behavior', () => {
        it('should apply default fill property', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <LeftArrowIcon />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]')
                .find('g')
                .should('exist')
                .and('have.css', 'fill', 'rgb(31, 142, 255)')
        })
        it('should apply hardcoded fill property', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <LeftArrowIcon fill="#000000" />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]')
                .find('g')
                .should('exist')
                .and('have.css', 'fill', 'rgb(0, 0, 0)')
        })
        it('should apply fill property from current theme', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <LeftArrowIcon fill={ModLightTheme.color.success} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]')
                .should('exist')
                .find('g')
                .and('have.css', 'fill', 'rgb(90, 107, 49)')
        })
        it('should apply default height', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <LeftArrowIcon />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]')
                .should('exist')
                .and('have.css', 'height', '16px')
        })
        it('should apply hardcoded height', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <LeftArrowIcon height="32px" />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]')
                .should('exist')
                .and('have.css', 'height', '32px')
        })
        it('should apply height property from current theme', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <LeftArrowIcon height={ModLightTheme.icons.height.lg} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]')
                .should('exist')
                .and('have.css', 'height', '64px')
        })
        it('should apply default width', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <LeftArrowIcon />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]')
                .should('exist')
                .and('have.css', 'width', '24px')
        })
        it('should apply hardcoded width', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <LeftArrowIcon width="32px" />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]')
                .should('exist')
                .and('have.css', 'width', '32px')
        })
        it('should apply width property from current theme', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <LeftArrowIcon width={ModLightTheme.icons.height.lg} />
                </ModThemeProvider>,
            )
            cy.get('[data-test="left-arrow-icon"]')
                .should('exist')
                .and('have.css', 'width', '64px')
        })
    })
})
