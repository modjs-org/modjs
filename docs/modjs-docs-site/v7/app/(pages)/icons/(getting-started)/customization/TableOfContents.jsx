//core/customization
'use client'
import React, { useContext } from 'react'
import { Link, List, Typography, UnorderedList } from '@modjs/core'

import FragmentIdContext from '../../../../context/FragmentIdContext'

const TableOfContents = () => {
    const { fragmentId, setFragmentId } = useContext(FragmentIdContext)

    const handleCurrentFragmentId = event => {
        const hash = event.target.hash
        setFragmentId(hash)
    }

    return (
        <>
            <Typography variant="h3" fw="semibold">
                Table of Contents
            </Typography>
            <UnorderedList indent={false}>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#customization"
                        active={/#customization$/.test(fragmentId)}
                        data-testid="customization"
                    >
                        Customization
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#theming"
                        fw="bold"
                        active={/#theming$/.test(fragmentId)}
                        darta-testid="theming"
                    >
                        Theming
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#light-theme"
                        active={/#light-theme$/.test(fragmentId)}
                        data-testid="light_theme"
                    >
                        Light Theme
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#dark-theme"
                        active={/#dark-theme$/.test(fragmentId)}
                        data-testid="dark_theme"
                    >
                        Dark Theme
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#override-styles"
                        fw="bold"
                        active={/#override-styles$/.test(fragmentId)}
                        data-testid="override_styles"
                    >
                        Override Styles
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#system-props"
                        active={/#system-props$/.test(fragmentId)}
                        data-testid="system_props"
                    >
                        System Props
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#styled-components"
                        active={/#styled-components$/.test(fragmentId)}
                        data-testid="styled_components"
                    >
                        Styled Components
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#custom-classnames"
                        active={/#custom-classnames$/.test(fragmentId)}
                        data-testid="custom_classnames"
                    >
                        Custom classNames
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#inline-styles"
                        active={/#inline-styles$/.test(fragmentId)}
                        data-testid="inline_styles"
                    >
                        Inline Styles
                    </Link>
                </List>
            </UnorderedList>
        </>
    )
}

export default TableOfContents
