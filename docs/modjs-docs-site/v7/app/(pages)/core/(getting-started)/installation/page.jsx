//core/installation
'use client'
import React from 'react'
import { styled } from 'styled-components'
import {
    Layout,
    Breadcrumbs,
    Box,
    CodeEditor,
    Container,
    Link,
    Main,
    Section,
    SideNavigation,
    Typography,
    UnorderedList,
    List,
} from '@modjs/core'
import { useMediaQuery } from '@modjs/utils'
import {
    ForwardSlashIcon,
    RightArrowIcon,
    LeftArrowIcon,
    NewTabIcon,
    TerminalIcon,
} from '@modjs/icons'

import Navbar from '../../../../(common)/Navbar'
import ModFooter from '../../../../(common)/Footer'
import CoreNavigation from '../../../../(shared)/CoreNavigation'
import TableOfContents from './TableOfContents'
import ThemeWrapper from '../../../../wrappers/ThemeWrapper'
import TableOfContentsWrapper from '../../../../wrappers/TableOfContentsWrapper'

const MainContent = styled(Main)`
    width: 100%;
`

export default function Page() {
    const lgScreen = useMediaQuery({ query: { media: '(min-width: 1281px)' } })
    const mdScreen = useMediaQuery({ query: { media: '(max-width: 1280px)' } })
    const smScreen = useMediaQuery({ query: { media: '(max-width: 768px)' } })

    const sections = [
        'installation',
        'prerequisites',
        'peer-dependencies',
        'dependencies',
        'quick-install',
    ]

    return (
        <ThemeWrapper>
            <Layout>
                <Navbar currentPage="root/core/children" />
                <Box display="flex">
                    {/* Core Navigation */}

                    {lgScreen && (
                        <SideNavigation>
                            <Container fluid={true}>
                                <CoreNavigation />
                            </Container>
                        </SideNavigation>
                    )}

                    {/* Main Content */}
                    <MainContent
                        borderLeft={
                            smScreen ? 'none' : mdScreen ? 'none' : 'dark'
                        }
                        borderRight={smScreen ? 'none' : 'dark'}
                    >
                        <Box borderBottom="dark">
                            <Container>
                                <Breadcrumbs>
                                    <Link
                                        variant="transparent"
                                        href="/"
                                        width="auto"
                                        data-testid="breadcrumbs_core"
                                    >
                                        core
                                    </Link>
                                    <ForwardSlashIcon />
                                    <Link
                                        variant="transparent"
                                        href="/core/installation"
                                        active={true}
                                        width="auto"
                                        data-testid="breadcrumbs_installation"
                                    >
                                        installation
                                    </Link>
                                </Breadcrumbs>
                            </Container>
                        </Box>

                        <Container fluid={false}>
                            <Section id="installation">
                                <Typography variant="h1">
                                    Installation
                                </Typography>

                                <Typography variant="body1">
                                    This installation guide will help you get
                                    started with installing and using the core
                                    library in your React projects.
                                </Typography>
                            </Section>

                            <Section id="prerequisites">
                                <Typography variant="h2">
                                    Prerequisites
                                </Typography>
                                <Typography variant="body1">
                                    Before you begin, ensure you have met the
                                    following requirements:
                                </Typography>
                                <UnorderedList indent={true}>
                                    <List listStyle="square">
                                        <Typography variant="body1">
                                            <Typography variant="strong">
                                                Node.js: {` `}
                                            </Typography>
                                            Make sure you have Node.js
                                            installed. You can download it from
                                            <Link
                                                variant="inline"
                                                href="https://nodejs.org/en"
                                                target="_blank"
                                                data-testid="prerequisites_here"
                                            >
                                                here. <NewTabIcon />
                                            </Link>
                                            Verify that you have Node.js
                                            installed by running:
                                        </Typography>
                                        <CodeEditor
                                            variant="filled"
                                            notched={true}
                                            type="script"
                                            className="no-highlight"
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
                                            {`node -v`}
                                        </CodeEditor>
                                    </List>
                                    <List listStyle="square">
                                        <Typography variant="body1">
                                            <Typography variant="strong">
                                                npm or yarn:
                                            </Typography>{' '}
                                            npm is included with Node.js, but
                                            ensure you have the latest version
                                            by running:
                                        </Typography>
                                        <CodeEditor
                                            variant="filled"
                                            notched={true}
                                            type="script"
                                            className="no-highlight"
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
                                            {`npm -v`}
                                        </CodeEditor>
                                    </List>
                                    <List listStyle="square">
                                        <Typography variant="body1">
                                            <Typography variant="strong">
                                                React:{' '}
                                            </Typography>
                                            The core library is designed to work
                                            with
                                            <Link
                                                variant="inline"
                                                href="https://react.dev/"
                                                target="_blank"
                                                data-testid="prerequisites_react"
                                            >
                                                React. <NewTabIcon />
                                            </Link>
                                            Ensure you have a React project set
                                            up. You can create a new React
                                            project using Create React App
                                            (CRA):
                                        </Typography>
                                        <CodeEditor
                                            variant="filled"
                                            notched={true}
                                            type="script"
                                            className="no-highlight"
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
                                            {`npx create-react-app my-app
cd my-app`}
                                        </CodeEditor>
                                    </List>
                                </UnorderedList>
                            </Section>
                            <Section id="peer-dependencies">
                                <Typography variant="h2">
                                    Peer Dependencies
                                </Typography>
                                <Typography variant="body1">
                                    The core library has peer dependencies that
                                    you need to include in your project. All
                                    components under @modjs/core has been
                                    thoroughly tested with the following
                                    versions of peerDependencies. The library
                                    will then use the version of the following
                                    peerDependencies that you install in your
                                    project.
                                </Typography>
                                <UnorderedList indent={true}>
                                    <List listStyle="square">
                                        <Typography variant="body1">
                                            <Typography variant="strong">
                                                React:{' '}
                                            </Typography>
                                            {'>=18.3.1'}
                                        </Typography>
                                    </List>
                                    <List listStyle="square">
                                        <Typography variant="body1">
                                            <Typography variant="strong">
                                                React DOM:{' '}
                                            </Typography>{' '}
                                            {'>=18.3.1'}
                                        </Typography>
                                    </List>
                                    <List listStyle="square">
                                        <Typography variant="body1">
                                            <Typography variant="strong">
                                                Styled Components:{' '}
                                            </Typography>{' '}
                                            {'>=6.1.11'}
                                        </Typography>
                                    </List>
                                </UnorderedList>
                                <CodeEditor
                                    variant="filled"
                                    notched={true}
                                    type="script"
                                    className="no-highlight"
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
                                    {`npm install react react-dom styled-components`}
                                </CodeEditor>
                            </Section>
                            <Section id="dependencies">
                                <Typography variant="h2">
                                    Dependencies
                                </Typography>
                                <Typography variant="body1">
                                    The core library itself is dependent on
                                    <Link
                                        variant="inline"
                                        href="https://github.com/modjs-org/modjs/tree/main/packages/utils"
                                        target="_blank"
                                        data-testid="dependencies_utils"
                                    >
                                        utils <NewTabIcon />
                                    </Link>
                                    and
                                    <Link
                                        variant="inline"
                                        href="https://github.com/modjs-org/modjs/tree/main/packages/helpers"
                                        target="_blank"
                                        data-testid="dependencies_helpers"
                                    >
                                        helpers <NewTabIcon />
                                    </Link>
                                    package from Mod.js. To install these
                                    dependencies, run the following command:
                                </Typography>
                                <CodeEditor
                                    variant="filled"
                                    notched={true}
                                    type="script"
                                    className="no-highlight"
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
                                    {`npm install  @modjs/utils @modjs/helpers`}
                                </CodeEditor>
                            </Section>
                            <Section id="quick-install">
                                <Typography variant="h2">
                                    Quick Install
                                </Typography>
                                <Typography variant="body1">
                                    After you have Node.js and npm installed and
                                    have React app configured and running, you
                                    can run the following command to install all
                                    dependencies for @modjs/core.
                                </Typography>
                                <CodeEditor
                                    variant="filled"
                                    notched={true}
                                    type="script"
                                    className="no-highlight"
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
                                    {`npm install @modjs/core @modjs/utils @modjs/helpers styled-components`}
                                </CodeEditor>
                            </Section>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                my={32}
                            >
                                <Link
                                    href="/core"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                    data-testid="prev_core"
                                >
                                    <LeftArrowIcon />
                                    Core
                                </Link>
                                <Link
                                    href="/core/customization"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                    data-testid="next_customization"
                                >
                                    Customization
                                    <RightArrowIcon />
                                </Link>
                            </Box>
                        </Container>
                        <ModFooter />
                    </MainContent>
                    {/* Table of Contents */}
                    <TableOfContentsWrapper
                        defaultFragmentId="#installation"
                        sections={sections}
                    >
                        <TableOfContents />
                    </TableOfContentsWrapper>
                </Box>
            </Layout>
        </ThemeWrapper>
    )
}
