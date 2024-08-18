import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import '../../../cypress/fixtures/style.css'
import ConfirmPasswordField from './ConfirmPasswordField'
import Layout from '../Layout/Layout'

describe('<ConfirmPasswordField>', () => {
    context('Render', () => {
        it('should render ConfirmPasswordField with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]')
                .should('exist')
                .should('have.attr', 'minlength', '8')
                .should('have.attr', 'maxlength', '32')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'placeholder', 'Confirm Password *')
                .should('have.attr', 'type', 'password')
                .should('have.attr', 'name', 'confirm-password')
                .should('have.attr', 'id', 'confirm-password')
                .should('have.attr', 'value', '')
            cy.get('[data-test="confirm-password-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render ConfirmPasswordField with custom props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField
                            minLength={6}
                            maxLength={12}
                            autoComplete="on"
                            placeholder="Confirm Password"
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            variant="outlined"
                            notched={true}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]')
                .should('exist')
                .should('have.attr', 'minlength', '6')
                .should('have.attr', 'maxlength', '12')
                .should('have.attr', 'autocomplete', 'on')
                .should('have.attr', 'placeholder', 'Confirm Password')
                .should('have.attr', 'type', 'password')
                .should('have.attr', 'name', 'confirm-password')
                .should('have.attr', 'id', 'confirm-password')
            cy.get('[data-test="confirm-password-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($ConfirmPasswordFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $ConfirmPasswordFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled ConfirmPasswordField with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField variant="filled" notched={true} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($ConfirmPasswordFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $ConfirmPasswordFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled ConfirmPasswordField without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField
                            variant="filled"
                            notched={false}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render outlined ConfirmPasswordField with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField
                            variant="outlined"
                            notched={true}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($ConfirmPasswordFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $ConfirmPasswordFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled ConfirmPasswordField without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField
                            variant="outlined"
                            notched={false}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render transparent ConfirmPasswordField', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField variant="transparent" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field-wrapper"]')
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
                        <ConfirmPasswordField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]').should(
                'have.attr',
                'minLength',
            )
            cy.get('[data-test="confirm-password-field"]').should(
                'have.attr',
                'maxLength',
            )
            cy.get('[data-test="confirm-password-field"]').should(
                'have.attr',
                'autoComplete',
            )
            cy.get('[data-test="confirm-password-field"]').should(
                'have.attr',
                'placeholder',
            )
            cy.get('[data-test="confirm-password-field"]').should(
                'have.attr',
                'type',
            )
            cy.get('[data-test="confirm-password-field"]').should(
                'have.attr',
                'name',
            )
            cy.get('[data-test="confirm-password-field"]').should(
                'have.attr',
                'id',
            )
            cy.get('[data-test="confirm-password-field"]').should(
                'have.attr',
                'value',
            )
            cy.get('[data-test="confirm-password-field"]').should(
                'not.have.attr',
                'active',
            )
            cy.get('[data-test="confirm-password-field"]').should(
                'not.have.attr',
                'valid',
            )
            cy.get('[data-test="confirm-password-field"]').should(
                'not.have.attr',
                'dataValue',
            )
            cy.get('[data-test="confirm-password-field"]').should(
                'not.have.attr',
                'variant',
            )
            cy.get('[data-test="confirm-password-field"]').should(
                'not.have.attr',
                'notched',
            )

            cy.get('[data-test="confirm-password-field-wrapper"]').should(
                'not.have.attr',
                'active',
            )
            cy.get('[data-test="confirm-password-field-wrapper"]').should(
                'not.have.attr',
                'valid',
            )
            cy.get('[data-test="confirm-password-field-wrapper"]').should(
                'not.have.attr',
                'compareWith',
            )
            cy.get('[data-test="confirm-password-field-wrapper"]').should(
                'not.have.attr',
                'dataValue',
            )
            cy.get('[data-test="confirm-password-field-wrapper"]').should(
                'not.have.attr',
                'variant',
            )
            cy.get('[data-test="confirm-password-field-wrapper"]').should(
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
                        <ConfirmPasswordField m={32} p={32} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledConfirmPasswordField = styled(ConfirmPasswordField)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledConfirmPasswordField m={32} p={32} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField
                            p={0}
                            m={0}
                            style={{ margin: '32px', padding: '32px' }}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField className="test" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Behavior and Interactions', () => {
        it('should not show error if the confirm password is valid', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField minLength="2" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]').type('Testing1234!')
            cy.get('[data-testid="confirm-password-field-error"]').should(
                'not.exist',
            )
        })
        it('should show error if the confirm password is not valid', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]').type('Testing')
            cy.get('[data-testid="confirm-password-field-error"]').should(
                'exist',
            )
        })
        it('should show error if ConfirmPasswordField is on focus and empty', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]').focus()
            cy.get('[data-testid="confirm-password-field-error"]').should(
                'exist',
            )
        })
        it('should not show error if ConfirmPasswordField is not on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]').focus().blur()
            cy.get('[data-testid="confirm-password-field-error"]').should(
                'not.exist',
            )
        })
        it('should not allow leading whitespaces', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]')
                .type(' ')
                .should('have.attr', 'value', '')
        })
        it('should not allow internal whitespaces', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]')
                .type('test@     example.    com')
                .should('have.attr', 'value', 'test@example.com')
        })
        it('should display light border when the field is not on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(194, 194, 194)',
            )
        })
        it('should display red border when the field is on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]').focus()
            cy.get('[data-test="confirm-password-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(202, 60, 31)',
            )
        })
        it('should display red border when the field is on focus and invalid', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField minLength={5} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]')
                .focus()
                .type('Testing')
            cy.get('[data-test="confirm-password-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(202, 60, 31)',
            )
        })
        it('should display green border when the field is on focus and valid', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField minLength={5} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]')
                .focus()
                .type('Testing1234!')
            cy.get('[data-test="confirm-password-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(90, 107, 49)',
            )
        })

        it('should display light icon when the field is not on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="password-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#8e8e8e')
        })
        it('should display red icon when the field is on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]').focus()
            cy.get('[data-testid="password-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#ca3c1f')
        })
        it('should display red icon when the field is on focus and invalid', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField minLength={5} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]').focus()
            cy.get('[data-testid="password-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#ca3c1f')
        })
        it('should display green icon when the field is on focus and valid', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField minLength={5} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]')
                .focus()
                .type('Testing1234!')
            cy.get('[data-testid="password-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#5a6b31')
        })
        it('should display error if the compareWith value does not match the typed value', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField compareWith="Testing1234!" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]')
                .focus()
                .type('Testing1234')
            cy.get('[data-testid="confirm-password-field-error"]').should(
                'exist',
            )
            cy.get('[data-testid="password-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#ca3c1f')
        })
        it('should not display error if the compareWith value matches the typed value', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField compareWith="Testing1234!" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]')
                .focus()
                .type('Testing1234!')
            cy.get('[data-testid="confirm-password-field-error"]').should(
                'not.exist',
            )
            cy.get('[data-testid="password-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#5a6b31')
        })
        it('should toggle password visibility', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <ConfirmPasswordField compareWith="Testing1234!" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="confirm-password-field"]').type('Testing1234!')
            cy.get('[data-testid="toggle-visibility"]').click()
            cy.get('[data-test="confirm-password-field"]').should(
                'have.attr',
                'type',
                'text',
            )
            cy.get('[data-testid="toggle-visibility"]').click()
            cy.get('[data-test="confirm-password-field"]').should(
                'have.attr',
                'type',
                'password',
            )
        })
    })
})
