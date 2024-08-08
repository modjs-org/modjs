//icons/api/
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

import Navbar from '../../../(common)/Navbar'
import ModFooter from '../../../(common)/Footer'
import SystemPropsTable from '../../../(shared)/SystemPropsTable'
import IconsNavigation from '../../../(shared)/IconsNavigation'
import TableOfContents from './TableOfContents'
import ThemeWrapper from '../../../wrappers/ThemeWrapper'
import TableOfContentsWrapper from '../../../wrappers/TableOfContentsWrapper'
import systemPropsFragmentsId from '../../../(shared)/systemPropsFragmentsId'

const MainContent = styled(Main)`
    width: 100%;
`

export default function Page() {
    const lgScreen = useMediaQuery({ query: { media: '(min-width: 1281px)' } })
    const mdScreen = useMediaQuery({ query: { media: '(max-width: 1280px)' } })
    const smScreen = useMediaQuery({ query: { media: '(max-width: 768px)' } })

    const sections = [
        'icons-api',
        'import',
        'icons-props',
        'system-props',
        ...systemPropsFragmentsId,
    ]

    return (
        <ThemeWrapper>
            <Layout>
                <Navbar currentPage="root/icons/children" />
                <Box display="flex">
                    {/* Core Navigation */}

                    {lgScreen && (
                        <SideNavigation>
                            <Container fluid={true}>
                                <IconsNavigation />
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
                                        href="/icons"
                                        width="auto"
                                        data-testid="breadcrumbs_icons"
                                    >
                                        icons
                                    </Link>
                                    <ForwardSlashIcon />
                                    <Link
                                        variant="transparent"
                                        href="/icons/api"
                                        active={true}
                                        width="auto"
                                        data-testid="breadcrumbs_api"
                                    >
                                        api
                                    </Link>
                                </Breadcrumbs>
                            </Container>
                        </Box>

                        <Container fluid={false}>
                            <Section id="icons-api">
                                <Typography variant="h1">
                                    React Icons API
                                </Typography>

                                <Typography variant="body1">
                                    API reference for the React Icons component
                                    from Modj.js. Learn about how to use the
                                    Icons component and all the valid props that
                                    can be supplied to these component.
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
                                                        href="https://github.com/modjs-org/modjs/blob/main/packages/icons/src/index.ts"
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
                                    {`import { 
    AccountIcon,
    AngularIcon,
    AnimatedLaodingIcon,
    AwsIcon,
    BabelIcon,
    BackendIcon,
    CloseIcon,
    CloudIcon,
    CopyIcon,
    CPlusPlusIcon,
    CssIcon,
    CypressIcon,
    DarkThemeIcon,
    DatabaseIcon,
    DesktopIcon,
    DevOpsIcon,
    DjangoIcon,
    DockerIcon,
    DownChevronIcon,
    DownloadIcon,
    EmailIcon,
    ErrorIcon,
    EsLintIcon,
    FacebookIcon,
    FlutterIcon,
    ForwardSlashIcon,
    FrontendIcon,
    FullStackProIcon,
    GithubIcon,
    GitIcon,
    GoogleCloudIcon,
    HtmlIcon,
    InfrastructureIcon,
    JavascriptIcon,
    KotlinIcon,
    KubernetesIcon,
    LeftArrowIcon,
    LightThemeIcon,
    LinkedInIcon,
    LoginIcon,
    MailIcon,
    MenuIcon,
    MinusIcon,
    MobileIcon,
    MobileSettingsIcon,
    MongoDbIcon,
    NextJsIcon,
    NodeIcon,
    NotVisibleIcon,
    NpmIcon,
    PasswordIcon,
    PilotProIcon,
    PlayIcon,
    PlusIcon,
    PostgreSqlIcon,
    PythonIcon,
    QtIcon,
    QuoteIcon,
    ReactIcon,
    RightArrowIcon,
    RightChevronIcon,
    SearchIcon,
    SettingsIcon,
    SquareIcon,
    SubmitIcon,
    SuccessIcon,
    TerminalIcon,
    TerraformIcon,
    TypescriptIcon,
    UpChevronIcon,
    VisibleIcon,
    WebpackIcon,
    WorldWideWebIcon,
    XIcon,
    YoutubeIcon
} from '@modjs/icons'
`}
                                </CodeEditor>
                            </Section>

                            <Section id="icons-props" pb="normal" mt={16}>
                                <Typography variant="h2">
                                    Icons Props
                                </Typography>
                                <Typography variant="body1">
                                    The following props are specific to the
                                    Icons component and can be applied to all
                                    the icons component. Note that some of these
                                    props may have no effect on brands icons and
                                    is only applied to ui icons.
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
                                            <TableData>fill</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    string
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "primary"
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                Adjust the fill value based on
                                                theme color or with custom CSS
                                                hex color.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>stroke</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    string
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "primary"
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                The stroke for the
                                                AnimatedLoadingIcon component.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>height</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    string
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "sm / md / lg"
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                The height of the component.
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>width</TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    string
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                <Pill color="success">
                                                    "sm / md / lg"
                                                </Pill>
                                            </TableData>
                                            <TableData>
                                                The width of the component.
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
                                    href="/icons/customization"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                    data-testid="prev_customization"
                                >
                                    <LeftArrowIcon />
                                    Customization
                                </Link>
                                <Link
                                    href="/icons"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                    data-testid="next_icons"
                                >
                                    Icons
                                    <RightArrowIcon />
                                </Link>
                            </Box>
                        </Container>
                        <ModFooter />
                    </MainContent>
                    {/* Table of Contents */}
                    <TableOfContentsWrapper
                        defaultFragmentId="#icons-api"
                        sections={sections}
                    >
                        <TableOfContents />
                    </TableOfContentsWrapper>
                </Box>
            </Layout>
        </ThemeWrapper>
    )
}
