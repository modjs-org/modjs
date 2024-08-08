//core/api/react-dropdown-content
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

export default function Page() {
    const lgScreen = useMediaQuery({ query: { media: '(min-width: 1281px)' } })

    const mdScreen = useMediaQuery({ query: { media: '(max-width: 1280px)' } })
    const smScreen = useMediaQuery({ query: { media: '(max-width: 768px)' } })

    const sections = [
        'dropdown-content-api',
        'import',
        'dropdown-content-props',
        'system-props',
        ...systemPropsFragmentsId,
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
                                        href="/core"
                                        width="auto"
                                        data-testid="breadcrumbs_core"
                                    >
                                        core
                                    </Link>
                                    <ForwardSlashIcon />
                                    <Typography variant="body2">api</Typography>
                                    <ForwardSlashIcon />
                                    <Link
                                        variant="transparent"
                                        href="/core/api/react-dropdown-content"
                                        active={true}
                                        width="auto"
                                        data-testid="breadcrumbs_react_dropdown_content"
                                    >
                                        react-dropdown-content
                                    </Link>
                                </Breadcrumbs>
                            </Container>
                        </Box>

                        <Container fluid={false}>
                            <Section id="dropdown-content-api">
                                <Typography variant="h1">
                                    React DropdownContent API
                                </Typography>

                                <Typography variant="body1">
                                    API reference for the React DropdownContent
                                    component from Modj.js. Learn about how to
                                    use the DropdownContent component and all
                                    the valid props that can be supplied to this
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
                                                    <Link
                                                        variant="icon"
                                                        href="https://github.com/modjs-org/modjs/tree/main/packages/core/src/components/DropdownContent"
                                                        target="_blank"
                                                        data-testid="import_github"
                                                    >
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
                                    {`import { DropdownContent } from '@modjs/core'`}
                                </CodeEditor>
                            </Section>

                            <Section
                                id="dropdown-content-props"
                                pb="normal"
                                mt={16}
                            >
                                <Typography variant="h2">
                                    DropdownContent Props
                                </Typography>
                                <Typography variant="body1">
                                    The following props are specific to the
                                    DropdownContent component and can be applied
                                    to this component.
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
                                                The content of the component
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
                                    href="/core/api/react-dropdown"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                    data-testid="prev_dropdown_api"
                                >
                                    <LeftArrowIcon />
                                    Dropdown API
                                </Link>
                                <Link
                                    href="/core/api/react-email-field"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                    data-testid="next_email_field_api"
                                >
                                    EmailField API
                                    <RightArrowIcon />
                                </Link>
                            </Box>
                        </Container>
                        <ModFooter />
                    </MainContent>
                    {/* Table of Contents */}
                    <TableOfContentsWrapper
                        defaultFragmentId="#dropdown-content-api"
                        sections={sections}
                    >
                        <TableOfContents />
                    </TableOfContentsWrapper>
                </Box>
            </Layout>
        </ThemeWrapper>
    )
}
