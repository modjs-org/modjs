//core
'use client'
import React from 'react'
import {
    Layout,
    Box,
    CodeEditor,
    Container,
    Carousel,
    CarouselDescription,
    CarouselItem,
    Grid,
    Section,
    Link,
    Typography,
} from '@modjs/core'
import {
    RightChevronIcon,
    ReactIcon,
    TerminalIcon,
    NewTabIcon,
} from '@modjs/icons'
import ThemeWrapper from '../wrappers/ThemeWrapper'
import ModFooter from '../(common)/Footer'
import Navbar from '../(common)/Navbar'

const exampleCode = [
    {
        id: 0,
        count: 0,
        description: (
            <CodeEditor
                variant="filled"
                notched={true}
                textAlign="left"
                fileName={
                    <Typography
                        variant="small"
                        fs={1}
                        display="flex"
                        alignItems="center"
                    >
                        <ReactIcon height="1.2rem" width="1.5rem" /> Example.jsx
                    </Typography>
                }
            >
                {`import React from 'react' 
import { CodeEditor, Layout } from '@modjs/core'
import { ModThemeProvider } from '@modjs/utils'

const App = () => {
    return (
         <ModThemeProvider theme={theme}>
            <Layout>
                <CodeEditor>
                    {codeEditorContent}
                </CodeEditor>
            </Layout>
        </ModThemeProvider>
    )
}
export default App`}
            </CodeEditor>
        ),
    },
]

export default function Page() {
    return (
        <ThemeWrapper>
            <Layout>
                <Navbar currentPage="root" />
                <Section id="intro">
                    <Container>
                        <Box pt={30} pb={64}>
                            <Grid columns={2} gap={32}>
                                <Box>
                                    <Typography variant="h1">
                                        Production-Ready React Component Library
                                    </Typography>
                                    <Typography variant="body1">
                                        Create scalable and polished user
                                        interfaces with a Production-Ready React
                                        Component Library by Mod.js. Elevate
                                        your projects with robust, customizable
                                        components designed for seamless
                                        integration and optimal performance.
                                    </Typography>
                                    <CodeEditor
                                        notched={true}
                                        type="script"
                                        fileName={
                                            <>
                                                <Typography
                                                    variant="small"
                                                    fs={1}
                                                    display="flex"
                                                    alignItems="center"
                                                >
                                                    <TerminalIcon fill="#5a6b31" />
                                                    Terminal
                                                </Typography>
                                            </>
                                        }
                                    >
                                        {`npm install @modjs/core @modjs/icons @modjs/utils @modjs/helpers`}
                                    </CodeEditor>
                                    <Box display="flex" gap={8} mt={16} mb={64}>
                                        <Link
                                            variant="filled"
                                            notched={true}
                                            href="/core/installation"
                                            data-testid="getting_started"
                                        >
                                            Getting Started
                                            <RightChevronIcon fill="#ffffff" />
                                        </Link>
                                        <Link
                                            variant="outlined"
                                            notched={true}
                                            href="/core/api/react-accordion"
                                            data-testid="view_core_components_api"
                                        >
                                            View Core Components API
                                            <RightChevronIcon />
                                        </Link>
                                    </Box>
                                </Box>

                                <Carousel data={exampleCode}>
                                    {exampleCode.map(example => (
                                        <CarouselItem key={example.id}>
                                            <CarouselDescription>
                                                {example.description}
                                            </CarouselDescription>
                                        </CarouselItem>
                                    ))}
                                </Carousel>
                            </Grid>

                            <Grid columns={4} gap={16}>
                                <Box>
                                    <Typography variant="h3">
                                        @modjs/core
                                    </Typography>
                                    <Typography variant="body2" color="light">
                                        @modjs/core offers a suite of essential
                                        UI components designed for seamless
                                        integration and high customization.
                                        Perfect for building modern, interactive
                                        interfaces with ease and consistency.
                                    </Typography>
                                    <Link
                                        variant="transparent"
                                        href="/core"
                                        ml={-8}
                                        data-testid="core_learn_more"
                                    >
                                        Learn More
                                        <RightChevronIcon />
                                    </Link>
                                </Box>
                                <Box>
                                    <Typography variant="h3">
                                        @modjs/icons
                                    </Typography>
                                    <Typography variant="body2">
                                        @modjs/icons provides a comprehensive
                                        collection of versatile SVG icons,
                                        designed to integrate effortlessly into
                                        your projects. Enhance your UI with a
                                        wide range of customizable SVG icons to
                                        fit any design need.
                                    </Typography>
                                    <Link
                                        variant="transparent"
                                        href="/icons"
                                        ml={-8}
                                        data-testid="icons_learn_more"
                                    >
                                        Learn More
                                        <RightChevronIcon />
                                    </Link>
                                </Box>
                                <Box>
                                    <Typography variant="h3">
                                        @modjs/utils
                                    </Typography>
                                    <Typography variant="body2">
                                        @modjs/utils delivers a set of powerful
                                        utilities for managing themes, and
                                        global styles. Streamline your
                                        development with tools that ensure
                                        consistent design and efficient styling
                                        across your application.
                                    </Typography>
                                    <Link
                                        variant="transparent"
                                        href="https://github.com/modjs-org/modjs/tree/main/packages/utils"
                                        target="_blank"
                                        ml={-8}
                                        data-testid="utils_github_repository"
                                    >
                                        Github Repository
                                        <NewTabIcon />
                                    </Link>
                                </Box>
                                <Box>
                                    <Typography variant="h3">
                                        @modjs/helpers
                                    </Typography>
                                    <Typography variant="body2">
                                        @modjs/helpers offers a collection of
                                        useful utility functions. Simplify your
                                        code and enhance functionality with
                                        these essential tools for common tasks
                                        and data formatting.
                                    </Typography>
                                    <Link
                                        variant="transparent"
                                        href="https://github.com/modjs-org/modjs/tree/main/packages/helpers"
                                        target="_blank"
                                        ml={-8}
                                        data-testid="helpers_github_repository"
                                    >
                                        Github Repository
                                        <NewTabIcon />
                                    </Link>
                                </Box>
                            </Grid>
                        </Box>
                    </Container>
                </Section>
                <ModFooter />
            </Layout>
        </ThemeWrapper>
    )
}
