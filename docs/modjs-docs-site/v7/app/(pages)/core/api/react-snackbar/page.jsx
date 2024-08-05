//core/api/react-snackbar
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
    Pill,
    Section,
    SideNavigation,
    Typography,
    Table,
    TableBody,
    TableData,
    TableHead,
    TableHeader,
    TableRow,
    Tooltip,
    TooltipContent,
} from '@modjs/core'
import { useMediaQuery } from '@modjs/utils'
import {
    GithubIcon,
    LeftArrowIcon,
    ReactIcon,
    RightArrowIcon,
    ForwardSlashIcon,
} from '@modjs/icons'

import Navbar from '../../../../(common)/Navbar'
import ModFooter from '../../../../(common)/Footer'
import SystemPropsTable from '../../../../(shared)/SystemPropsTable'
import CoreNavigation from '../../../../(shared)/CoreNavigation'
import TableOfContents from './TableOfContents'
import ThemeWrapper from '../../../../wrappers/ThemeWrapper'
import TableOfContentsWrapper from '../../../../wrappers/TableOfContentsWrapper'
import systemPropsFragmentsId from '../../../../(shared)/systemPropsFragmentsId'

const MainContent = styled(Main)`
    width: 100%;
`

const LgScreenCoreNav = styled(SideNavigation)`
    @media (max-width: 1280px) {
        display: none;
    }
`

export default function Page() {
    const mdScreen = useMediaQuery({ query: { media: '(max-width: 1280px)' } })
    const smScreen = useMediaQuery({ query: { media: '(max-width: 768px)' } })

    const sections = [
        'snackbar-api',
        'import',
        'snackbar-props',
        'system-props',
        ...systemPropsFragmentsId,
    ]

    return (
        <ThemeWrapper>
            <Layout>
                <Navbar />
                <Box display="flex">
                    {/* Core Navigation */}
                    <LgScreenCoreNav>
                        <Container fluid={true}>
                            <CoreNavigation />
                        </Container>
                    </LgScreenCoreNav>
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
                                        href="/core"
                                        width="auto"
                                    >
                                        core
                                    </Link>
                                    <ForwardSlashIcon />
                                    <Typography variant="body2">api</Typography>
                                    <ForwardSlashIcon />
                                    <Link
                                        variant="transparent"
                                        href="/core/api/react-snackbar"
                                        active={true}
                                        width="auto"
                                    >
                                        react-snackbar
                                    </Link>
                                </Breadcrumbs>
                            </Container>
                        </Box>

                        <Container fluid={false}>
                            <Section id="snackbar-api">
                                <Typography variant="h1">
                                    React Snackbar API
                                </Typography>

                                <Typography variant="body1">
                                    API reference for the React Snackbar
                                    component from Modj.js. Learn about how to
                                    use the Snackbar component and all the valid
                                    props that can be supplied to this
                                    component.
                                </Typography>
                            </Section>

                            <Section id="import">
                                <Typography variant="h2">Import </Typography>
                                <CodeEditor
                                    variant="filled"
                                    notched={true}
                                    type="script"
                                    fileName={
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            gap={4}
                                        >
                                            <ReactIcon
                                                height="2em"
                                                width="1.5em"
                                            />
                                            <Typography variant="small" fs={1}>
                                                App.jsx
                                            </Typography>
                                        </Box>
                                    }
                                    headerContent={
                                        <>
                                            <Tooltip
                                                arrow={true}
                                                el={
                                                    <Link variant="icon">
                                                        <GithubIcon />
                                                    </Link>
                                                }
                                            >
                                                <TooltipContent displayPosition="left">
                                                    <Typography
                                                        variant="small"
                                                        color="white"
                                                    >
                                                        View Source on Github
                                                    </Typography>
                                                </TooltipContent>
                                            </Tooltip>
                                        </>
                                    }
                                >
                                    {`import { Snackbar } from '@modjs/core'`}
                                </CodeEditor>
                            </Section>

                            <Section id="snackbar-props" pb="normal" mt={16}>
                                <Typography variant="h2">
                                    Snackbar Props
                                </Typography>
                                <Typography variant="body1">
                                    The following props are specific to the
                                    Snackbar component and can be applied to
                                    this component.
                                </Typography>

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
                                            <TableData>children</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    node
                                                </Pill>
                                            </TableData>
                                            <TableData>-</TableData>
                                            <TableData>
                                                The content of the Snackbar.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>variant</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "success" "error" "filled"
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "filled"
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                Applies different styles based
                                                on variant.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>notched</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    boolean
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    false
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                If true, the component will have
                                                notched effect.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>visible</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    boolean | string
                                                </Pill>
                                            </TableData>
                                            <TableData>-</TableData>
                                            <TableData>
                                                Control the visibility of the
                                                Snackbar.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>timeout</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    number
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    5000 ms
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                Control the visibility timeout
                                                of the Snackbar.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>
                                                displayPosition
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "topRight" "topLeft"
                                                    "bottomRight" "bottomLeft"
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "topLeft"
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                Display position of the
                                                Snackbar.
                                            </TableData>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Section>
                            {/* System Props Table */}
                            <SystemPropsTable />
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                my={32}
                            >
                                <Link
                                    href="/core/api/react-slideshow-media"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                >
                                    <LeftArrowIcon />
                                    SlideshowMedia API
                                </Link>
                                <Link
                                    href="/core/api/react-snackbar-content"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                >
                                    SnackbarContent API
                                    <RightArrowIcon />
                                </Link>
                            </Box>
                        </Container>
                        <ModFooter />
                    </MainContent>
                    {/* Table of Contents */}
                    <TableOfContentsWrapper
                        defaultFragmentId="#snackbar-api"
                        sections={sections}
                    >
                        <TableOfContents />
                    </TableOfContentsWrapper>
                </Box>
            </Layout>
        </ThemeWrapper>
    )
}
