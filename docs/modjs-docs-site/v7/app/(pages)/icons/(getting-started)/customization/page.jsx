//core/customization
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
} from '@modjs/core'
import { useMediaQuery } from '@modjs/utils'
import {
    ReactIcon,
    ForwardSlashIcon,
    JavascriptIcon,
    LeftArrowIcon,
    RightArrowIcon,
    NewTabIcon,
} from '@modjs/icons'

import Navbar from '../../../../(common)/Navbar'
import ModFooter from '../../../../(common)/Footer'
import IconsNavigation from '../../../../(shared)/IconsNavigation'
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
        'customization',
        'theming',
        'light-theme',
        'dark-theme',
        'override-styles',
        'system-props',
        'styled-components',
        'custom-classnames',
        'inline-styles',
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
                                        href="/icons/customization"
                                        active={true}
                                        width="auto"
                                        data-testid="breadcrumbs_customization"
                                    >
                                        customization
                                    </Link>
                                </Breadcrumbs>
                            </Container>
                        </Box>

                        <Container fluid={false}>
                            <Section id="customization">
                                <Typography variant="h1">
                                    Customization
                                </Typography>

                                <Typography variant="body1">
                                    The icons library provides various ways to
                                    customize its components to fit your
                                    project's design and functionality
                                    requirements:
                                </Typography>
                            </Section>
                            <Section id="theming">
                                <Typography variant="h2">Theming</Typography>
                                <Typography variant="body1">
                                    Customize the appearance and behavior of
                                    icons components using a theming system from
                                    @modjs/utils.
                                </Typography>
                                <Section id="light-theme">
                                    <Typography variant="h3">
                                        Light Theme
                                    </Typography>
                                    <CodeEditor
                                        variant="filled"
                                        notched={true}
                                        fileName={
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                gap={4}
                                            >
                                                <JavascriptIcon
                                                    height="2em"
                                                    width="1.5em"
                                                />
                                                <Typography
                                                    variant="small"
                                                    fs={1}
                                                >
                                                    lightTheme.js
                                                </Typography>
                                            </Box>
                                        }
                                    >
                                        {`import { ModLightTheme } from '@modjs/utils'

    mode: '#ffffff',

    typography: {
        ff: {
            primary: 'KoHo',
        },
        fw: {
            medium: 400,
            semibold: 600,
            bold: 700,
        },
        fs: {
            xsm: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.5rem',
            xl: '2rem',
        },
        color: {
            primary: '#474747',
            main: '#474747',
            light: '#8e8e8e',
            secondary: '#c2c2c2',
            white: '#ffffff',
            success: '#5a6b31',
            error: '#ca3c1f',
        },
    },
    color: {
        primary: '#1f8eff',
        secondary: '#474747',
        main: '#c2c2c2',
        success: '#5a6b31',
        error: '#ca3c1f',
        light: '#f2f2f2',
        dark: '#c2c2c2',
        transparent: 'transparent',
    },
    border: {
        primary: '1px solid #1f8eff',
        success: '1px solid #5a6b31',
        error: '1px solid #ca3c1f',
        light: '1px solid #f2f2f2',
        dark: '1px solid #c2c2c2',
        none: 'none',
    },
    borderRadius: '2px',
    avatar: {
        height: {
            sm: '32px',
            md: '64px',
            lg: '96px',
        },
        width: {
            sm: '32px',
            md: '64px',
            lg: '96px',
        },
        brightness: {
            light: 'brightness(60%)',
            normal: 'brightness(40%)',
            dark: 'brightness(20%)',
        },
    },
    image: {
        height: {
            sm: '96px',
            md: '240px',
            lg: '320px',
        },
        width: {
            sm: '96px',
            md: '240px',
            lg: '320px',
        },
        brightness: {
            light: 'brightness(60%)',
            normal: 'brightness(40%)',
            dark: 'brightness(20%)',
        },
    },
    icons: {
        height: {
            sm: '16px',
            md: '32px',
            lg: '64px',
        },
        width: {
            sm: '24px',
            md: '32px',
            lg: '64px',
        },
    },
    elevation: {
        light: 'drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.1))',
        normal: 'drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.3))',
        heavy: 'drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.6))',
        none: 'none',
    },
    opacity: {
        high: 0.95,
        medium: 0.85,
        low: 0.5,
    },
    scrollbarColor: '#c2c2c2 #f2f2f2',
    tooltipBg: '#474747',
}
export default lightTheme`}
                                    </CodeEditor>
                                </Section>
                                <Section id="dark-theme">
                                    <Typography variant="h3">
                                        Dark Theme
                                    </Typography>
                                    <CodeEditor
                                        variant="filled"
                                        notched={true}
                                        fileName={
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                gap={4}
                                            >
                                                <JavascriptIcon
                                                    height="2em"
                                                    width="1.5em"
                                                />
                                                <Typography
                                                    variant="small"
                                                    fs={1}
                                                >
                                                    darkTheme.js
                                                </Typography>
                                            </Box>
                                        }
                                    >
                                        {`import { ModDarkTheme } from '@modjs/utils'

    ...ModDarkTheme.mode,
    mode: '#121111',
    typography: {
        ...ModDarkTheme.typography,
        ff: {
            primary: 'KoHo',
        },
        fw: {
            medium: 400,
            semibold: 600,
            bold: 700,
        },
        fs: {
            xsm: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.5rem',
            xl: '2rem',
        },
        color: {
            primary: '#ffffff',
            main: '#c2c2c2',
            light: '#8e8e8e',
            secondary: '#474747',
            white: '#ffffff',
            success: '#5a6b31',
            error: '#ca3c1f',
        },
    },
    color: {
        primary: '#1f8eff',
        secondary: '#ffffff',
        main: '#c2c2c2',
        success: '#5a6b31',
        error: '#ca3c1f',
        light: '#1f1d1d',
        dark: '#474747',
        transparent: 'transparent',
    },
    border: {
        primary: '1px solid #1f8eff',
        success: '1px solid #5a6b31',
        error: '1px solid #ca3c1f',
        light: '1px solid #1f1d1d',
        dark: '1px solid #474747',
        none: 'none',
    },
    borderRadius: '2px',
    avatar: {
        height: {
            sm: '32px',
            md: '64px',
            lg: '96px',
        },
        width: {
            sm: '32px',
            md: '64px',
            lg: '96px',
        },
        brightness: {
            light: 'brightness(60%)',
            normal: 'brightness(40%)',
            dark: 'brightness(20%)',
        },
    },
    image: {
        height: {
            sm: '96px',
            md: '240px',
            lg: '320px',
        },
        width: {
            sm: '96px',
            md: '240px',
            lg: '320px',
        },
        brightness: {
            light: 'brightness(60%)',
            normal: 'brightness(40%)',
            dark: 'brightness(20%)',
        },
    },
    icons: {
        height: {
            sm: '1rem',
            md: '2rem',
            lg: '4rem',
        },
        width: {
            sm: '1.5rem',
            md: '2rem',
            lg: '4rem',
        },
    },
    elevation: {
        light: 'drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.1))',
        normal: 'drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.3))',
        heavy: 'drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.6))',
        none: 'none',
    },
    opacity: {
        high: 0.95,
        medium: 0.85,
        low: 0.5,
    },
    scrollbarColor: '#474747 #1f1d1d',
    tooltipBg: '#8e8e8e',
}
export default darkTheme`}
                                    </CodeEditor>
                                </Section>
                            </Section>

                            <Section id="override-styles">
                                <Typography variant="h2">
                                    Override Styles
                                </Typography>
                                <Typography variant="body1">
                                    To override default styles of the
                                    components, you have several options. Note
                                    that the following options are listed in
                                    accending order based on the precedence. For
                                    example: the default styles have lowest
                                    precedence followed by the styles from
                                    System Props while the inline styles have
                                    the highest precedence.
                                </Typography>
                                <Section id="system-props">
                                    <Typography variant="h3">
                                        System Props
                                    </Typography>
                                    <Typography variant="body1">
                                        Each component under @modjs/icons is
                                        wrapped with a
                                        <Link
                                            variant="inline"
                                            href="https://github.com/modjs-org/modjs/tree/main/packages/utils/src/components/withSystemProps"
                                            target="_blank"
                                            data-testid="system_props_withSystemProps"
                                        >
                                            withModSystemProps <NewTabIcon />
                                        </Link>
                                        HOC. All props provided by
                                        withModSystemProps can be applied to the
                                        component to override default styles.
                                    </Typography>
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
                                                <Typography
                                                    variant="small"
                                                    fs={1}
                                                >
                                                    App.jsx
                                                </Typography>
                                            </Box>
                                        }
                                    >
                                        {`import { AccountIcon } from '@modjs/icons' 
                                        
export const App = () => {
    <AccountIcon
        m={32}
        p={32}
    />
}`}
                                    </CodeEditor>
                                </Section>
                                <Section id="styled-components">
                                    <Typography variant="h3">
                                        Styled Components
                                    </Typography>
                                    <Typography variant="body1">
                                        All icons components from @modjs/icons
                                        are styled using the
                                        <Link
                                            variant="inline"
                                            href="https://styled-components.com/"
                                            target="_blank"
                                            data-testid="styled_components_styled_components"
                                        >
                                            styled-components <NewTabIcon />
                                        </Link>
                                        library. The default styles can be
                                        overridden using styled-components.
                                    </Typography>
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
                                                <Typography
                                                    variant="small"
                                                    fs={1}
                                                >
                                                    App.jsx
                                                </Typography>
                                            </Box>
                                        }
                                    >
                                        {`import { MailIcon } from '@modjs/icons' 
import {styled} from 'styled-components'

const StyledMailIcon = styled(MailIcon)\`
    margin: 32px;
    padding: 32px;
\`
export const App = () => {
    <StyledMailIcon />
}`}
                                    </CodeEditor>
                                </Section>

                                <Section id="custom-classnames">
                                    <Typography variant="h3">
                                        Custom classNames
                                    </Typography>
                                    <Typography variant="body1">
                                        Each icons components are designed to
                                        accept all valid HTML attributes.
                                        Therefore, the icons components can be
                                        styled using the class attribute.
                                    </Typography>
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
                                                <Typography
                                                    variant="small"
                                                    fs={1}
                                                >
                                                    App.jsx
                                                </Typography>
                                            </Box>
                                        }
                                    >
                                        {`import { ReactIcon } from '@modjs/icons' 

export const App = () => {
    <ReactIcon className = "icon-class" />
}`}
                                    </CodeEditor>
                                </Section>
                                <Section id="inline-styles">
                                    <Typography variant="h3">
                                        Inline Styles
                                    </Typography>
                                    <Typography variant="body1">
                                        Since all icons components accept valid
                                        HTML attributes, the component can also
                                        be styled using the style HTML
                                        attribute.
                                    </Typography>
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
                                                <Typography
                                                    variant="small"
                                                    fs={1}
                                                >
                                                    App.jsx
                                                </Typography>
                                            </Box>
                                        }
                                    >
                                        {`import { JavaScriptIcon } from '@modjs/core' 

export const App = () => {
    <JavaScriptIcon style = {{padding: "8px" margin: "8px"}} />
}`}
                                    </CodeEditor>
                                </Section>
                            </Section>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                my={32}
                            >
                                <Link
                                    href="/icons/installation"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                    data-testid="prev_installation"
                                >
                                    <LeftArrowIcon />
                                    Installation
                                </Link>
                                <Link
                                    href="/icons/api"
                                    variant="inline"
                                    display="flex"
                                    alignItems="center"
                                    data-testid="next_icons_api"
                                >
                                    Icons API
                                    <RightArrowIcon />
                                </Link>
                            </Box>
                        </Container>
                        <ModFooter />
                    </MainContent>
                    {/* Table of Contents */}
                    <TableOfContentsWrapper
                        defaultFragmentId="#customization"
                        sections={sections}
                    >
                        <TableOfContents />
                    </TableOfContentsWrapper>
                </Box>
            </Layout>
        </ThemeWrapper>
    )
}
