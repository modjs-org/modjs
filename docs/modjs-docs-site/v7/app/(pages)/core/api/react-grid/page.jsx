//core/api/react-grid
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
        'grid-api',
        'import',
        'grid-props',
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
                                        href="/core/api/react-grid"
                                        active={true}
                                        width="auto"
                                    >
                                        react-grid
                                    </Link>
                                </Breadcrumbs>
                            </Container>
                        </Box>

                        <Container fluid={false}>
                            <Section id="grid-api">
                                <Typography variant="h1">
                                    React Grid API
                                </Typography>

                                <Typography variant="body1">
                                    API reference for the React Grid component
                                    from Modj.js. Learn about how to use the
                                    Grid component and all the valid props that
                                    can be supplied to this component.
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
                                    {`import { Grid } from '@modjs/core'`}
                                </CodeEditor>
                            </Section>

                            <Section id="grid-props" pb="normal" mt={16}>
                                <Typography variant="h2">Grid Props</Typography>
                                <Typography variant="body1">
                                    The following props are specific to the Grid
                                    component and can be applied to this
                                    component.
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
                                                The content of the component.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>columns</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    number
                                                </Pill>
                                            </TableData>
                                            <TableData>-</TableData>
                                            <TableData>
                                                Number of columns of the
                                                component.
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
                                    href="/core/api/react-form"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                >
                                    <LeftArrowIcon />
                                    Form API
                                </Link>
                                <Link
                                    href="/core/api/react-header"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                >
                                    Header API
                                    <RightArrowIcon />
                                </Link>
                            </Box>
                        </Container>
                        <ModFooter />
                    </MainContent>
                    {/* Table of Contents */}
                    <TableOfContentsWrapper
                        defaultFragmentId="#grid-api"
                        sections={sections}
                    >
                        <TableOfContents />
                    </TableOfContentsWrapper>
                </Box>
            </Layout>
        </ThemeWrapper>
    )
}
