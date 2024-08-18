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
    NewTabIcon,
    RightChevronIcon,
    ReactIcon,
    TerminalIcon,
} from '@modjs/icons'
import ThemeWrapper from '../../wrappers/ThemeWrapper'
import ModFooter from '../../(common)/Footer'
import Navbar from '../../(common)/Navbar'

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
import { MailIcon, MenuIcon, NpmIcon, ReactIcon, TypeScriptIcon  } from '@modjs/icons'
import { ModThemeProvider } from '@modjs/utils'

const App = () => {
    return (
         <ModThemeProvider theme={theme}>
            <Layout>
                <ReactIcon />
                <NpmIcon />
                <MailIcon />
                <MenuIcon />
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
                <Navbar currentPage="root/icons" />
                <Section id="intro">
                    <Container>
                        <Box pt={30} pb={64}>
                            <Grid columns={2} gap={32}>
                                <Box>
                                    <Typography variant="h1">
                                        Production-Ready React UI Icons
                                    </Typography>
                                    <Typography variant="body1">
                                        Elevate your React applications with
                                        @modjs/icons. Designed with modern
                                        aesthetics and functionality in mind,
                                        our collection offers a wide range of
                                        icons that seamlessly integrate with
                                        your projects. Each icon is optimized
                                        for performance, ensuring fast load
                                        times and smooth interactions. Enhance
                                        your user interface with intuitive and
                                        visually appealing icons that are easy
                                        to customize and implement.
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
                                        {`npm install @modjs/icons @modjs/utils`}
                                    </CodeEditor>
                                    <Box display="flex" gap={8} mt={16} mb={64}>
                                        <Link
                                            variant="filled"
                                            notched={true}
                                            href="/icons/installation"
                                            data-testid="getting_started"
                                        >
                                            Getting Started
                                            <RightChevronIcon fill="#ffffff" />
                                        </Link>
                                        <Link
                                            variant="outlined"
                                            notched={true}
                                            href="/icons/api"
                                            data-testid="view_components_api"
                                        >
                                            View Components API
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
                                        Installation
                                    </Typography>
                                    <Typography variant="body2" color="light">
                                        Learn more about the prerequisites and
                                        dependencies needed to integrate the
                                        icons library into your app.
                                    </Typography>
                                    <Link
                                        variant="transparent"
                                        href="/icons/installation"
                                        ml={-8}
                                        data-testid="installation_learn_more"
                                    >
                                        Learn More
                                        <RightChevronIcon />
                                    </Link>
                                </Box>
                                <Box>
                                    <Typography variant="h3">
                                        Customization
                                    </Typography>
                                    <Typography variant="body2">
                                        Learn about various ways to customize
                                        the icons components to fit your needs.
                                    </Typography>
                                    <Link
                                        variant="transparent"
                                        href="/icons/customization"
                                        data-testid="customization_learn_more"
                                        ml={-8}
                                    >
                                        Learn More
                                        <RightChevronIcon />
                                    </Link>
                                </Box>
                                <Box>
                                    <Typography variant="h3">API</Typography>
                                    <Typography variant="body2">
                                        Designed for flexibility and
                                        scalability, @modjs/icons streamlines
                                        development workflows and enhances code
                                        maintainability with its intuitive API
                                        and powerful features.
                                    </Typography>
                                    <Link
                                        variant="transparent"
                                        href="/icons/api/"
                                        ml={-8}
                                        data-testid="api_learn_more"
                                    >
                                        Learn More
                                        <RightChevronIcon />
                                    </Link>
                                </Box>
                                <Box>
                                    <Typography variant="h3">
                                        GitHub Repository
                                    </Typography>
                                    <Typography variant="body2">
                                        The icons library is an open-source
                                        project in progress. Source code for all
                                        Mod.js packages are hosted on GitHub.
                                        View our GitHub repository to review
                                        source code and report issues.
                                    </Typography>
                                    <Link
                                        variant="transparent"
                                        href="https://github.com/modjs-org/modjs/tree/main/packages/icons"
                                        target="_blank"
                                        ml={-8}
                                        data-testid="github_repository"
                                    >
                                        View Repository
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
