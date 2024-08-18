import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import Table from '../Table/Table'
import TableHeader from '../TableHeader/TableHeader'
import TableHead from '../TableHead/TableHead'
import TableRow from '../TableRow/TableRow'
import TableData from '../TableData/TableData'
import Pill from '../Pill/Pill'
import Layout from '../Layout/Layout'
import TableBody from '../TableBody/TableBody'

describe('<TableHead>', () => {
    context('Render', () => {
        it('should render default Table component', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Default</TableHead>
                                    <TableHead>Description</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableData>m</TableData>
                                    <TableData>
                                        <Pill>number</Pill>
                                    </TableData>
                                    <TableData>-</TableData>
                                    <TableData>
                                        Applies margin in px to the component.
                                    </TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>mt</TableData>
                                    <TableData>
                                        <Pill>number</Pill>
                                    </TableData>
                                    <TableData>-</TableData>
                                    <TableData>
                                        Applies margin top in px to the
                                        component
                                    </TableData>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="tableHead"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead
                                        m={32}
                                        p={32}
                                        className="test"
                                        style={{ padding: '32px' }}
                                        data-test="test"
                                    >
                                        Name
                                    </TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Default</TableHead>
                                    <TableHead>Description</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableData>m</TableData>
                                    <TableData>
                                        <Pill>number</Pill>
                                    </TableData>
                                    <TableData>-</TableData>
                                    <TableData>
                                        Applies margin in px to the component.
                                    </TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>mt</TableData>
                                    <TableData>
                                        <Pill>number</Pill>
                                    </TableData>
                                    <TableData>-</TableData>
                                    <TableData>
                                        Applies margin top in px to the
                                        component
                                    </TableData>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="tableHead"]').should('have.attr', 'class')
            cy.get('[data-test="tableHead"]').should('have.attr', 'style')
            cy.get('[data-test="tableHead"]').should('have.attr', 'data-test')
            cy.get('[data-test="tableHead"]').should('not.have.attr', 'p')
            cy.get('[data-test="tableHead"]').should('not.have.attr', 'm')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead
                                        m={32}
                                        p={32}
                                        className="test"
                                        style={{ padding: '32px' }}
                                        data-test="test"
                                    >
                                        Name
                                    </TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Default</TableHead>
                                    <TableHead>Description</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableData>m</TableData>
                                    <TableData>
                                        <Pill>number</Pill>
                                    </TableData>
                                    <TableData>-</TableData>
                                    <TableData>
                                        Applies margin in px to the component.
                                    </TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>mt</TableData>
                                    <TableData>
                                        <Pill>number</Pill>
                                    </TableData>
                                    <TableData>-</TableData>
                                    <TableData>
                                        Applies margin top in px to the
                                        component
                                    </TableData>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="tableHead"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledTableHead = styled(TableHead)`
                padding: 32px;
                margin: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <StyledTableHead>Name</StyledTableHead>
                                    <StyledTableHead>Type</StyledTableHead>
                                    <StyledTableHead>Default</StyledTableHead>
                                    <StyledTableHead>
                                        Description
                                    </StyledTableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableData>m</TableData>
                                    <TableData>
                                        <Pill>number</Pill>
                                    </TableData>
                                    <TableData>-</TableData>
                                    <TableData>
                                        Applies margin in px to the component.
                                    </TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>mt</TableData>
                                    <TableData>
                                        <Pill>number</Pill>
                                    </TableData>
                                    <TableData>-</TableData>
                                    <TableData>
                                        Applies margin top in px to the
                                        component
                                    </TableData>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="tableHead"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead
                                        style={{
                                            padding: '32px',
                                            margin: '32px',
                                        }}
                                    >
                                        Name
                                    </TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Default</TableHead>
                                    <TableHead>Description</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableData>m</TableData>
                                    <TableData>
                                        <Pill>number</Pill>
                                    </TableData>
                                    <TableData>-</TableData>
                                    <TableData>
                                        Applies margin in px to the component.
                                    </TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>mt</TableData>
                                    <TableData>
                                        <Pill>number</Pill>
                                    </TableData>
                                    <TableData>-</TableData>
                                    <TableData>
                                        Applies margin top in px to the
                                        component
                                    </TableData>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="tableHead"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="test">Name</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Default</TableHead>
                                    <TableHead>Description</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableData>m</TableData>
                                    <TableData>
                                        <Pill>number</Pill>
                                    </TableData>
                                    <TableData>-</TableData>
                                    <TableData>
                                        Applies margin in px to the component.
                                    </TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>mt</TableData>
                                    <TableData>
                                        <Pill>number</Pill>
                                    </TableData>
                                    <TableData>-</TableData>
                                    <TableData>
                                        Applies margin top in px to the
                                        component
                                    </TableData>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="tableHead"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
