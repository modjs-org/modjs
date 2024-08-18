import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import { QuoteIcon } from '@modjs/icons'
import '../../../cypress/fixtures/style.css'
import Bob from '../../assets/images/bob.jpeg'
import Box from '../Box/Box'
import Slideshow from './Slideshow'
import SlideshowFooter from '../SlideshowFooter/SlideshowFooter'
import SlideshowItem from '../SlideshowItem/SlideshowItem'
import SlideshowExcerpt from '../SlideshowExcerpt/SlideshowExcerpt'
import SlideshowDescription from '../SlideshowDescription/SlideshowDescription'
import SlideshowMedia from '../SlideshowMedia/SlideshowMedia'
import Avatar from '../Avatar/Avatar'
import Typography from '../Typography/Typography'
import Layout from '../Layout/Layout'

const slides = [
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

describe('<Slideshow>', () => {
    context('Render', () => {
        it('should render Slideshow component', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout>
                        <Slideshow slides={slides}>
                            {slides.map(slide => (
                                <SlideshowItem key={slide.id}>
                                    <SlideshowMedia>
                                        <Avatar
                                            src={slide.avatarSrc}
                                            alt={slide.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </SlideshowMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <SlideshowDescription>
                                        <Typography variant="body1">
                                            {slide.description}
                                        </Typography>
                                    </SlideshowDescription>

                                    <SlideshowFooter>
                                        <Typography variant="body2">
                                            {slide.author} | {slide.role} |{' '}
                                            {slide.org}
                                        </Typography>
                                    </SlideshowFooter>
                                </SlideshowItem>
                            ))}
                        </Slideshow>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow"]').should('exist')
        })
        it('should render correct number of items based on the number of items in the array', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Slideshow slides={slides}>
                            {slides.map(slide => (
                                <SlideshowItem key={slide.id}>
                                    <SlideshowMedia>
                                        <Avatar
                                            src={slide.avatarSrc}
                                            alt={slide.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </SlideshowMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <SlideshowExcerpt>
                                        <Typography variant="body1">
                                            {slide.description}
                                        </Typography>
                                    </SlideshowExcerpt>

                                    <SlideshowFooter>
                                        <Typography variant="body2">
                                            {slide.author} | {slide.role} |{' '}
                                            {slide.org}
                                        </Typography>
                                    </SlideshowFooter>
                                </SlideshowItem>
                            ))}
                        </Slideshow>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow-items"] > :nth-child(1)').should(
                'exist',
            )
            cy.get('[data-test="slideshow-items"] > :nth-child(2)').should(
                'exist',
            )
            cy.get('[data-test="slideshow-items"] > :nth-child(3)').should(
                'exist',
            )
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout>
                        <Slideshow
                            slides={slides}
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            {slides.map(slide => (
                                <SlideshowItem key={slide.id}>
                                    <SlideshowMedia>
                                        <Avatar
                                            src={slide.avatarSrc}
                                            alt={slide.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </SlideshowMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <SlideshowDescription>
                                        <Typography variant="body1">
                                            {slide.description}
                                        </Typography>
                                    </SlideshowDescription>

                                    <SlideshowFooter>
                                        <Typography variant="body2">
                                            {slide.author} | {slide.role} |{' '}
                                            {slide.org}
                                        </Typography>
                                    </SlideshowFooter>
                                </SlideshowItem>
                            ))}
                        </Slideshow>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow"]').should('have.attr', 'class')
            cy.get('[data-test="slideshow"]').should('have.attr', 'style')
            cy.get('[data-test="slideshow"]').should('have.attr', 'data-test')
            cy.get('[data-test="slideshow"]').should('not.have.attr', 'm')
            cy.get('[data-test="slideshow"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Slideshow m={32} p={32}>
                            {slides.map(slide => (
                                <SlideshowItem key={slide.id}>
                                    <SlideshowMedia>
                                        <Avatar
                                            src={slide.avatarSrc}
                                            alt={slide.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </SlideshowMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <SlideshowDescription>
                                        <Typography variant="body1">
                                            {slide.description}
                                        </Typography>
                                    </SlideshowDescription>

                                    <SlideshowFooter>
                                        <Typography variant="body2">
                                            {slide.author} | {slide.role} |{' '}
                                            {slide.org}
                                        </Typography>
                                    </SlideshowFooter>
                                </SlideshowItem>
                            ))}
                        </Slideshow>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledSlideshow = styled(Slideshow)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledSlideshow>
                            {slides.map(slide => (
                                <SlideshowItem key={slide.id}>
                                    <SlideshowMedia>
                                        <Avatar
                                            src={slide.avatarSrc}
                                            alt={slide.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </SlideshowMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <SlideshowDescription>
                                        <Typography variant="body1">
                                            {slide.description}
                                        </Typography>
                                    </SlideshowDescription>

                                    <SlideshowFooter>
                                        <Typography variant="body2">
                                            {slide.author} | {slide.role} |{' '}
                                            {slide.org}
                                        </Typography>
                                    </SlideshowFooter>
                                </SlideshowItem>
                            ))}
                        </StyledSlideshow>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Slideshow style={{ margin: '32px', padding: '32px' }}>
                            {slides.map(slide => (
                                <SlideshowItem key={slide.id}>
                                    <SlideshowMedia>
                                        <Avatar
                                            src={slide.avatarSrc}
                                            alt={slide.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </SlideshowMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <SlideshowDescription>
                                        <Typography variant="body1">
                                            {slide.description}
                                        </Typography>
                                    </SlideshowDescription>

                                    <SlideshowFooter>
                                        <Typography variant="body2">
                                            {slide.author} | {slide.role} |{' '}
                                            {slide.org}
                                        </Typography>
                                    </SlideshowFooter>
                                </SlideshowItem>
                            ))}
                        </Slideshow>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Slideshow className="test">
                            {slides.map(slide => (
                                <SlideshowItem key={slide.id}>
                                    <SlideshowMedia>
                                        <Avatar
                                            src={slide.avatarSrc}
                                            alt={slide.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </SlideshowMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <SlideshowDescription>
                                        <Typography variant="body1">
                                            {slide.description}
                                        </Typography>
                                    </SlideshowDescription>

                                    <SlideshowFooter>
                                        <Typography variant="body2">
                                            {slide.author} | {slide.role} |{' '}
                                            {slide.org}
                                        </Typography>
                                    </SlideshowFooter>
                                </SlideshowItem>
                            ))}
                        </Slideshow>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow"]')
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
                        <Slideshow slides={slides}>
                            {slides.map(slide => (
                                <SlideshowItem key={slide.id}>
                                    <SlideshowMedia>
                                        <Avatar
                                            src={slide.avatarSrc}
                                            alt={slide.avatarAlt}
                                            height="lg"
                                            width="lg"
                                        />
                                    </SlideshowMedia>
                                    <Box textAlign="center">
                                        <QuoteIcon height="2rem" width="2rem" />
                                    </Box>
                                    <SlideshowDescription>
                                        <Typography variant="body1">
                                            {slide.description}
                                        </Typography>
                                    </SlideshowDescription>

                                    <SlideshowFooter>
                                        <Typography variant="body2">
                                            {slide.author} | {slide.role} |{' '}
                                            {slide.org}
                                        </Typography>
                                    </SlideshowFooter>
                                </SlideshowItem>
                            ))}
                        </Slideshow>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="slideshow"]').should('exist')
            cy.get('[data-test="slideshow-items"]').should('exist')
            cy.get('[data-test="slideshow-items"] > :first-child').contains(
                /One/,
            )
        })

        context('TODO: Swipe', () => {
            it('should swipe right when swipped right with fingers in mobile device', () => {
                cy.mount(
                    <ModThemeProvider theme={ModLightTheme}>
                        <Layout>
                            <Slideshow slides={slides}>
                                {slides.map(slide => (
                                    <SlideshowItem key={slide.id}>
                                        <SlideshowMedia>
                                            <Avatar
                                                src={slide.avatarSrc}
                                                alt={slide.avatarAlt}
                                                height="lg"
                                                width="lg"
                                            />
                                        </SlideshowMedia>
                                        <Box textAlign="center">
                                            <QuoteIcon
                                                height="2rem"
                                                width="2rem"
                                            />
                                        </Box>
                                        <SlideshowDescription>
                                            <Typography variant="body1">
                                                {slide.description}
                                            </Typography>
                                        </SlideshowDescription>

                                        <SlideshowFooter>
                                            <Typography variant="body2">
                                                {slide.author} | {slide.role} |{' '}
                                                {slide.org}
                                            </Typography>
                                        </SlideshowFooter>
                                    </SlideshowItem>
                                ))}
                            </Slideshow>
                        </Layout>
                    </ModThemeProvider>,
                )
                cy.viewport('iphone-6')
            })
        })
    })
})
