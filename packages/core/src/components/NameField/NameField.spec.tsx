import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import '../../../cypress/fixtures/style.css'
import NameField from './NameField'
import Layout from '../Layout/Layout'

describe('<NameField>', () => {
    context('Render', () => {
        it('should render NameField with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]')
                .should('exist')
                .should('have.attr', 'minlength', '2')
                .should('have.attr', 'maxlength', '64')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'placeholder', 'Your Full Name *')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'name', 'name')
                .should('have.attr', 'id', 'name')
                .should('have.attr', 'value', '')
            cy.get('[data-test="name-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render NameField with custom props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField
                            minLength={6}
                            maxLength={12}
                            autoComplete="on"
                            placeholder="name"
                            name="name"
                            id="name"
                            variant="outlined"
                            notched={true}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]')
                .should('exist')
                .should('have.attr', 'minlength', '6')
                .should('have.attr', 'maxlength', '12')
                .should('have.attr', 'autocomplete', 'on')
                .should('have.attr', 'placeholder', 'name')
                .should('have.attr', 'name', 'name')
                .should('have.attr', 'id', 'name')
            cy.get('[data-test="name-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($NameFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $NameFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled NameField with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField variant="filled" notched={true} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($NameFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $NameFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled NameField without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField variant="filled" notched={false} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render outlined NameField with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField variant="outlined" notched={true} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($NameFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $NameFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled NameField without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField variant="outlined" notched={false} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render transparent NameField', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField variant="transparent" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field-wrapper"]')
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
                        <NameField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]').should('have.attr', 'minLength')
            cy.get('[data-test="name-field"]').should('have.attr', 'maxLength')
            cy.get('[data-test="name-field"]').should(
                'have.attr',
                'autoComplete',
            )
            cy.get('[data-test="name-field"]').should(
                'have.attr',
                'placeholder',
            )
            cy.get('[data-test="name-field"]').should('have.attr', 'type')
            cy.get('[data-test="name-field"]').should('have.attr', 'name')
            cy.get('[data-test="name-field"]').should('have.attr', 'id')
            cy.get('[data-test="name-field"]').should('have.attr', 'value')
            cy.get('[data-test="name-field"]').should('not.have.attr', 'active')
            cy.get('[data-test="name-field"]').should('not.have.attr', 'valid')
            cy.get('[data-test="name-field"]').should(
                'not.have.attr',
                'dataValue',
            )
            cy.get('[data-test="name-field"]').should(
                'not.have.attr',
                'variant',
            )
            cy.get('[data-test="name-field"]').should(
                'not.have.attr',
                'notched',
            )

            cy.get('[data-test="name-field-wrapper"]').should(
                'not.have.attr',
                'active',
            )
            cy.get('[data-test="name-field-wrapper"]').should(
                'not.have.attr',
                'valid',
            )
            cy.get('[data-test="name-field-wrapper"]').should(
                'not.have.attr',
                'dataValue',
            )
            cy.get('[data-test="name-field-wrapper"]').should(
                'not.have.attr',
                'variant',
            )
            cy.get('[data-test="name-field-wrapper"]').should(
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
                        <NameField m={32} p={32} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledNameField = styled(NameField)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledNameField m={32} p={32} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField
                            p={0}
                            m={0}
                            style={{ margin: '32px', padding: '32px' }}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField className="test" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Behavior and Interactions', () => {
        it('should not show error if the name is valid', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]').type('Prashan Pudasaini')
            cy.get('[data-testid="name-field-error"]').should('not.exist')
        })
        it('should show error if the name is not of valid length', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField minLength={10} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]').type('Prashan')
            cy.get('[data-testid="name-field-error"]').should('exist')
        })
        it('should show error if NameField is on focus and empty', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]').focus()
            cy.get('[data-testid="name-field-error"]').should('exist')
        })
        it('should not show error if NameField is not on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]').focus().blur()
            cy.get('[data-testid="name-field-error"]').should('not.exist')
        })
        it('should not allow leading whitespaces', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]')
                .type(' ')
                .should('have.attr', 'value', '')
        })
        it('should display light border when the field is not on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(194, 194, 194)',
            )
        })
        it('should display red border when the field is on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]').focus()
            cy.get('[data-test="name-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(202, 60, 31)',
            )
        })
        it('should display red border when the field is on focus and invalid', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField minLength={5} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]').focus().type('P')
            cy.get('[data-test="name-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(202, 60, 31)',
            )
        })
        it('should display green border when the field is on focus and valid', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]').focus().type('Prashan Pudasaini')
            cy.get('[data-test="name-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(90, 107, 49)',
            )
        })

        it('should display light icon when the field is not on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="account-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#8e8e8e')
        })
        it('should display red icon when the field is on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]').focus()
            cy.get('[data-testid="account-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#ca3c1f')
        })
        it('should display red icon when the field is on focus and invalid', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <NameField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]').focus()
            cy.get('[data-testid="account-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#ca3c1f')
        })
        it('should display green icon when the field is on focus and valid', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <NameField variant="filled" notched={true} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="name-field"]').focus().type('Prashan Pudasaini')
            cy.get('[data-testid="account-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#5a6b31')
        })
    })
})
