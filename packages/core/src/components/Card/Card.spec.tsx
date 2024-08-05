import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import { RightChevronIcon } from '@modjs/icons'
import '../../../cypress/fixtures/style.css'
import Bob from '../../assets/images/bob.jpeg'
import Typography from '../Typography/Typography'
import Card from './Card'
import CardMeta from '../CardMeta/CardMeta'
import CardMedia from '../CardMedia/CardMedia'
import CardHeader from '../CardHeader/CardHeader'
import CardContent from '../CardContent/CardContent'
import Image from '../Image/Image'
import Layout from '../Layout/Layout'
import CardFooter from '../CardFooter/CardFooter'
import Link from '../Link/Link'

describe('<Card>', () => {
    context('Render', () => {
        it('should render default Card component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Card>
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="card"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'margin', '8px 0px')
                .and('have.css', 'padding', '4px 8px')
        })
        it('should render custom Card componnent', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Card variant="outlined" notched={true}>
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="card"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(255, 255, 255)')
                .and('have.css', 'margin', '8px 0px')
                .and('have.css', 'padding', '4px 8px')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($Card => {
                    const beforeEl = window.getComputedStyle(
                        $Card[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled Card without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Card variant="filled" notched={false}>
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="card"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'margin', '8px 0px')
                .and('have.css', 'padding', '4px 8px')
        })
        it('should render filled Card with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Card variant="filled" notched={true}>
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="card"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'margin', '8px 0px')
                .and('have.css', 'padding', '4px 8px')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($Card => {
                    const beforeEl = window.getComputedStyle(
                        $Card[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render outlined Card without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Card variant="outlined" notched={false}>
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="card"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(255, 255, 255)')
                .and('have.css', 'margin', '8px 0px')
                .and('have.css', 'padding', '4px 8px')
        })
        it('should render outlined Card with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Card variant="outlined" notched={true}>
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="card"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(255, 255, 255)')
                .and('have.css', 'margin', '8px 0px')
                .and('have.css', 'padding', '4px 8px')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($Card => {
                    const beforeEl = window.getComputedStyle(
                        $Card[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render transparent Card', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Card variant="transparent" notched={false}>
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="card"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(255, 255, 255)')
                .and('have.css', 'margin', '4px 0px')
                .and('have.css', 'padding', '0px')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Card
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                            variant="filled"
                            notched={true}
                        >
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="card"]').should('have.attr', 'class')
            cy.get('[data-test="card"]').should('have.attr', 'style')
            cy.get('[data-test="card"]').should('have.attr', 'data-test')
            cy.get('[data-test="card"]').should('not.have.attr', 'm')
            cy.get('[data-test="card"]').should('not.have.attr', 'p')
            cy.get('[data-test="card"]').should('not.have.attr', 'variant')
            cy.get('[data-test="card"]').should('not.have.attr', 'notched')
        })
    })

    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withLayout HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Card p={32} m={32}>
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="card"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledCard = styled(Card)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledCard>
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </StyledCard>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="card"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Card
                            p={0}
                            m={0}
                            style={{ margin: '32px', padding: '32px' }}
                        >
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="card"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Card className="test">
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="card"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Integrations', () => {
        it('should integrate with other Card components', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Card variant="filled" notched={true}>
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card variant="filled" notched={false}>
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card variant="outlined" notched={true}>
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card variant="outlined" notched={false}>
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card variant="transparent">
                            <CardHeader>
                                <Typography variant="h3">Card Title</Typography>
                            </CardHeader>
                            <CardMeta>
                                <Typography variant="small">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Typography>
                            </CardMeta>
                            <CardContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardMedia>
                                <Image src={Bob} notched={true} size="md" />
                            </CardMedia>
                            <CardFooter>
                                <Link variant="filled" notched={true}>
                                    Card Footer{' '}
                                    <RightChevronIcon fill="white" />
                                </Link>
                            </CardFooter>
                        </Card>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="card"]').should('exist')
            cy.get('[data-test="card-header"]').should('exist')
            cy.get('[data-test="card-meta"]').should('exist')
            cy.get('[data-test="card-content"]').should('exist')
            cy.get('[data-test="card-media"]').should('exist')
            cy.get('[data-test="card-footer"]').should('exist')
        })
    })
})
