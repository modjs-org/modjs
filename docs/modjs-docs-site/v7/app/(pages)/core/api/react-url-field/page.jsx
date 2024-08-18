//core/api/react-url-field
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
        'url-field-api',
        'import',
        'url-field-props',
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
                                        href="/core/api/react-url-field"
                                        active={true}
                                        width="auto"
                                        data-testid="breadcrumbs_react_url_field"
                                    >
                                        react-url-field
                                    </Link>
                                </Breadcrumbs>
                            </Container>
                        </Box>

                        <Container fluid={false}>
                            <Section id="url-field-api">
                                <Typography variant="h1">
                                    React UrlField API
                                </Typography>

                                <Typography variant="body1">
                                    API reference for the React UrlField
                                    component from Modj.js. Learn about how to
                                    use the UrlField component and all the valid
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
                                                    <Link
                                                        variant="icon"
                                                        href="https://github.com/modjs-org/modjs/tree/main/packages/core/src/components/UrlField"
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
                                    {`import { UrlField } from '@modjs/core'`}
                                </CodeEditor>
                            </Section>

                            <Section id="url-field-props" pb="normal" mt={16}>
                                <Typography variant="h2">
                                    UrlField Props
                                </Typography>
                                <Typography variant="body1">
                                    The following props are specific to the
                                    UrlField component and can be applied to
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
                                            <TableData>variant</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "filled" "outlined"
                                                    "transparent"
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
                                            <TableData>minLength</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    number
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">3</Pill>
                                            </TableData>
                                            <TableData>
                                                The minimum length of the field.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>maxLength</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    number
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    2048
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                The maximum length of the field.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>autoComplete</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    string
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "off"
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                Controls whether the field can
                                                be auto completed by the
                                                browser.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>placeholder</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    string
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "Your Website" *"
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                Placeholder for the component.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>type</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    string
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "text"
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                Type of the component.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>name</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    string
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "website"
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                Name of the component.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>id</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    string
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "website"
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                Id of the component.
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
                                    href="/core/api/react-unordered-list"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                    data-testid="prev_unordered_list_api"
                                >
                                    <LeftArrowIcon />
                                    UnorderedList API
                                </Link>
                                <Link
                                    href="/core"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                    data-testid="next_core"
                                >
                                    Core
                                    <RightArrowIcon />
                                </Link>
                            </Box>
                        </Container>
                        <ModFooter />
                    </MainContent>
                    {/* Table of Contents */}
                    <TableOfContentsWrapper
                        defaultFragmentId="#url-field-api"
                        sections={sections}
                    >
                        <TableOfContents />
                    </TableOfContentsWrapper>
                </Box>
            </Layout>
        </ThemeWrapper>
    )
}
