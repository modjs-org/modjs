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
                <Navbar currentPage="root/core" />
                <Section id="intro">
                    <Container>
                        <Box pt={30} pb={64}>
                            <Grid columns={2} gap={32}>
                                <Box>
                                    <Typography variant="h1">
                                        Production-Ready React UI Components
                                    </Typography>
                                    <Typography variant="body1">
                                        Explore a robust collection of
                                        meticulously crafted React UI components
                                        with @modjs/core. Designed for
                                        performance and versatility, the core
                                        library offers a range of customizable,
                                        high-quality components to streamline
                                        your development process and enhance
                                        user experience. Whether you're building
                                        a complex application or a simple
                                        interface, our components are engineered
                                        to meet the demands of modern web
                                        development.
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
                                        Getting started with the core library is
                                        extremely easy. Learn more about the
                                        prerequisites and dependencies needed to
                                        integrate the core library into your
                                        app.
                                    </Typography>
                                    <Link
                                        variant="transparent"
                                        href="/core/installation"
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
                                        Every components from @modjs/core are
                                        designed to be immensely customizable.
                                        Learn about various ways to customize
                                        the core components to fit your needs.
                                    </Typography>
                                    <Link
                                        variant="transparent"
                                        href="/core/customization"
                                        ml={-8}
                                        data-testid="customization_learn_more"
                                    >
                                        Learn More
                                        <RightChevronIcon />
                                    </Link>
                                </Box>
                                <Box>
                                    <Typography variant="h3">API</Typography>
                                    <Typography variant="body2">
                                        Designed for flexibility and
                                        scalability, @modjs/core streamlines
                                        development workflows and enhances code
                                        maintainability with its intuitive API
                                        and powerful features.
                                    </Typography>
                                    <Link
                                        variant="transparent"
                                        href="/core/api/react-accordion"
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
                                        The core library is an open-source
                                        project in progress. Source code for all
                                        Mod.js packages are hosted on GitHub.
                                        View our GitHub repository to review
                                        source code and report issues.
                                    </Typography>
                                    <Link
                                        variant="transparent"
                                        href="https://github.com/modjs-org/modjs/tree/main/packages/core"
                                        target="_blank"
                                        ml={-8}
                                        data-testid="github_repository"
                                    >
                                        Github Repository <NewTabIcon />
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
