import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import '../../../cypress/fixtures/style.css'
import TextField from './TextField'
import Layout from '../Layout/Layout'

describe('<TextField>', () => {
    context('Render', () => {
        it('should render TextField with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field"]')
                .should('exist')
                .should('have.attr', 'minlength', '1')
                .should('have.attr', 'maxlength', '200')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'type', 'text')
            cy.get('[data-test="text-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render TextField with custom props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField
                            minLength={6}
                            maxLength={12}
                            autoComplete="on"
                            placeholder="Write your message..."
                            name="message"
                            id="message"
                            variant="outlined"
                            notched={true}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field"]')
                .should('exist')
                .should('have.attr', 'minlength', '6')
                .should('have.attr', 'maxlength', '12')
                .should('have.attr', 'autocomplete', 'on')
                .should('have.attr', 'placeholder', 'Write your message...')
                .should('have.attr', 'name', 'message')
                .should('have.attr', 'id', 'message')
            cy.get('[data-test="text-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($TextFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $TextFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled TextField with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField variant="filled" notched={true} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($TextFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $TextFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled TextField without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField variant="filled" notched={false} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render outlined TextField with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField variant="outlined" notched={true} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($TextFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $TextFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled TextField without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField variant="outlined" notched={false} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render transparent TextField', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField variant="transparent" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and(
                    'have.css',
                    'border-bottom',
                    '1px solid rgb(194, 194, 194)',
                )
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField
                            placeholder="Write your message..."
                            name="message"
                            id="message"
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field"]').should('have.attr', 'minLength')
            cy.get('[data-test="text-field"]').should('have.attr', 'maxLength')
            cy.get('[data-test="text-field"]').should(
                'have.attr',
                'autoComplete',
            )
            cy.get('[data-test="text-field"]').should(
                'have.attr',
                'placeholder',
            )
            cy.get('[data-test="text-field"]').should('have.attr', 'type')
            cy.get('[data-test="text-field"]').should('have.attr', 'name')
            cy.get('[data-test="text-field"]').should('have.attr', 'id')
            cy.get('[data-test="text-field"]').should('not.have.attr', 'active')
            cy.get('[data-test="text-field"]').should('not.have.attr', 'valid')
            cy.get('[data-test="text-field"]').should(
                'not.have.attr',
                'dataValue',
            )
            cy.get('[data-test="text-field"]').should(
                'not.have.attr',
                'variant',
            )
            cy.get('[data-test="text-field"]').should(
                'not.have.attr',
                'notched',
            )

            cy.get('[data-test="text-field-wrapper"]').should(
                'not.have.attr',
                'active',
            )
            cy.get('[data-test="text-field-wrapper"]').should(
                'not.have.attr',
                'valid',
            )
            cy.get('[data-test="text-field-wrapper"]').should(
                'not.have.attr',
                'dataValue',
            )
            cy.get('[data-test="text-field-wrapper"]').should(
                'not.have.attr',
                'variant',
            )
            cy.get('[data-test="text-field-wrapper"]').should(
                'not.have.attr',
                'notched',
            )
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField m={32} p={32} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledTextField = styled(TextField)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledTextField m={32} p={32} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField
                            p={0}
                            m={0}
                            style={{ margin: '32px', padding: '32px' }}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField className="test" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Behavior and Interactions', () => {
        it('should show error if TextField is on focus and empty', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field"]').focus()
            cy.get('[data-testid="text-field-error"]').should('exist')
        })
        it('should not show error if TextField is not on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field"]').focus().blur()
            cy.get('[data-testid="text-field-error"]').should('not.exist')
        })
        it('should display light border when the field is not on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(194, 194, 194)',
            )
        })
        it('should display red border when the field is on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field"]').focus()
            cy.get('[data-test="text-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(202, 60, 31)',
            )
        })
        it('should display red border and error text when the field is on focus and invalid', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <TextField minLength={5} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field"]').focus().type('Pras')
            cy.get('[data-test="text-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(202, 60, 31)',
            )
            cy.get('[data-testid="error-icon"]')
                .should('exist')
                .find('g')
                .should('have.attr', 'fill', '#ca3c1f')
            cy.get('[data-testid="char-length"]')
                .should('exist')
                .and('have.css', 'color', 'rgb(202, 60, 31)')
                .contains(/^4 \/ 200 characters$/)
        })
        it('should display green border and success text when the field is on focus and valid', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <TextField
                            minLength={5}
                            placeholder="Write your message..."
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="text-field"]').focus().type('Prashan')
            cy.get('[data-test="text-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(90, 107, 49)',
            )
            cy.get('[data-testid="success-icon"]')
                .should('exist')
                .find('g')
                .should('have.attr', 'fill', '#5a6b31')
            cy.get('[data-testid="char-length"]')
                .should('exist')
                .and('have.css', 'color', 'rgb(90, 107, 49)')
                .contains(/^7 \/ 200 characters$/)
        })
    })
})
