import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import { QuoteIcon } from '@modjs/icons'
import '../../../cypress/fixtures/style.css'
import Bob from '../../assets/images/bob.jpeg'
import Box from '../Box/Box'
import Carousel from './Carousel'
import CarouselFooter from '../CarouselFooter/CarouselFooter'
import CarouselItem from '../CarouselItem/CarouselItem'
import CarouselExcerpt from '../CarouselExcerpt/CarouselExcerpt'
import CarouselDescription from '../CarouselDescription/CarouselDescription'
import CarouselMedia from '../CarouselMedia/CarouselMedia'
import Avatar from '../Avatar/Avatar'
import Typography from '../Typography/Typography'
import Layout from '../Layout/Layout'

const data = [
    {
        id: 100000,
        count: 0,
        excerpt:
            'Excerpt One: Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description:
            'Description One: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        author: 'Author One',
        avatarSrc: Bob,
        avatarAlt: '',
        role: 'Auther Role',
        org: 'Author Organization',
    },
    {
        id: 100001,
        count: 1,
        excerpt:
            'Excerpt Two: Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description:
            'Description Two: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        author: 'Author Two',
        avatarSrc: Bob,
        avatarAlt: '',
        role: 'Auther Role',
        org: 'Author Organization',
    },
    {
        id: 100002,
        count: 2,
        excerpt:
            'Excerpt Three: Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description:
            'Description Three: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        author: 'Author Three',
        avatarSrc: Bob,
        avatarAlt: '',
        role: 'Auther Role',
        org: 'Author Organization',
    },
]

describe('<Carousel>', () => {
    context('Render', () => {
        it('should render Carousel component', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Carousel data={data}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel"]').should('exist')
        })
        it('should render correct number of items based on the number of items in the array', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Carousel data={data}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselExcerpt>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselExcerpt>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel-items"] > :nth-child(1)').should(
                'exist',
            )
            cy.get('[data-test="carousel-items"] > :nth-child(2)').should(
                'exist',
            )
            cy.get('[data-test="carousel-items"] > :nth-child(3)').should(
                'exist',
            )
            cy.get('[data-test="carousel-items"] > :nth-child(4)').should(
                'not.exist',
            )
        })
        it('should render correct number of button based on the number of items in the array', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Carousel data={data}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="index-0"]').should('exist')
            cy.get('[data-testid="index-1"]').should('exist')
            cy.get('[data-testid="index-2"]').should('exist')
            cy.get('[data-testid="index-3"]').should('not.exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Carousel
                            data={data}
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel"]').should('have.attr', 'class')
            cy.get('[data-test="carousel"]').should('have.attr', 'style')
            cy.get('[data-test="carousel"]').should('have.attr', 'data-test')
            cy.get('[data-test="carousel"]').should('not.have.attr', 'm')
            cy.get('[data-test="carousel"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Carousel m={32} p={32}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledCarousel = styled(Carousel)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledCarousel>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </StyledCarousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Carousel style={{ margin: '32px', padding: '32px' }}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Carousel className="test">
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })

    context('Interactions and Behavior', () => {
        it('should show the first item in the array', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Carousel data={data}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="carousel"]').should('exist')
            cy.get('[data-test="carousel-items"]').should('exist')
            cy.get('[data-test="carousel-items"] > :first-child').contains(
                /One/,
            )
        })
        it('should show next item when the right arrow is clicked', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Carousel data={data}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="next"]').click()
            cy.get('[data-test="carousel-items"] > :nth-child(2)').contains(
                /Two/,
            )
        })
        it('should show previous item when the left arrow is clicked', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Carousel data={data}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="next"]').click()
            cy.get('[data-testid="prev"]').click()
            cy.get('[data-test="carousel-items"] > :nth-child(1)').contains(
                /One/,
            )
        })
        it('should show the exact item when the sqaure button is clicked', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Carousel data={data}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="index-2"]').click()
            cy.get('[data-test="carousel-items"] > :nth-child(3)').contains(
                /Three/,
            )
        })
        it('should disable the clicked square button', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Carousel data={data}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="index-1"]').click()
            cy.get('[data-testid="index-1"]').should('be.disabled')
        })
        it('should disbale the left arrow button if there is no prev item', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Carousel data={data}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="index-0"]').should('be.disabled')
        })
        it('should enable the left arrow button if there are prev items', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Carousel data={data}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="next"]').click()
            cy.get('[data-testid="index-0"]').should('be.enabled')
        })
        it('should disbale the right arrow button if there is no next item', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Carousel data={data}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="next"]').click()
            cy.get('[data-testid="next"]').click()
            cy.get('[data-testid="index-2"]').should('be.disabled')
        })
        it('should enable the right arrow button if there are next items', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Carousel data={data}>
                            {data.map(data => (
                                <CarouselItem key={data.id}>
                                    <CarouselMedia>
                                        <Avatar
                                            src={data.avatarSrc}
                                            alt={data.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </CarouselMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <CarouselDescription>
                                        <Typography variant="body1">
                                            {data.description}
                                        </Typography>
                                    </CarouselDescription>

                                    <CarouselFooter>
                                        <Typography variant="body2">
                                            {data.author} | {data.role} |{' '}
                                            {data.org}
                                        </Typography>
                                    </CarouselFooter>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="next"]').click()
            cy.get('[data-testid="index-2"]').should('be.enabled')
        })

        context('TODO: Swipe', () => {
            it('should swipe right when swipped right with fingers in mobile device', () => {
                cy.mount(
                    <ModThemeProvider theme={ModLightTheme}>
                        <Layout>
                            <Carousel data={data}>
                                {data.map(data => (
                                    <CarouselItem key={data.id}>
                                        <CarouselMedia>
                                            <Avatar
                                                src={data.avatarSrc}
                                                alt={data.avatarAlt}
                                                height="lg"
                                                width="lg"
                                            />
                                        </CarouselMedia>
                                        <Box textAlign="center">
                                            <QuoteIcon
                                                height="2rem"
                                                width="2rem"
                                            />
                                        </Box>
                                        <CarouselDescription>
                                            <Typography variant="body1">
                                                {data.description}
                                            </Typography>
                                        </CarouselDescription>

                                        <CarouselFooter>
                                            <Typography variant="body2">
                                                {data.author} | {data.role} |{' '}
                                                {data.org}
                                            </Typography>
                                        </CarouselFooter>
                                    </CarouselItem>
                                ))}
                            </Carousel>
                        </Layout>
                    </ModThemeProvider>,
                )
                cy.viewport('iphone-6')
            })
        })
    })
})
