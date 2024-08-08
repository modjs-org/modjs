//core/api/react-drawer-content
'use client'
import React, { useContext } from 'react'
import { Link, List, Separator, Typography, UnorderedList } from '@modjs/core'

import FragmentIdContext from '../../../../context/FragmentIdContext'
import SystemPropsNavigation from '../../../../(shared)/SystemPropsNavigation'

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
                        href="#drawer-content-api"
                        active={/#drawer-content-api$/.test(fragmentId)}
                        data-testid="drawer_content_api"
                    >
                        DrawerContent API
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#import"
                        active={/#import$/.test(fragmentId)}
                        data-testid="import"
                    >
                        Import
                    </Link>
                </List>

                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#drawer-content-props"
                        active={/#drawer-content-props$/.test(fragmentId)}
                        data-testid="drawer_content_props"
                    >
                        DrawerContent Props
                    </Link>
                </List>
                <Separator />
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        fw="bold"
                        href="#system-props"
                        active={/#system-props$/.test(fragmentId)}
                        data-testid="system_props"
                    >
                        System Props
                    </Link>
                </List>
            </UnorderedList>

            {/* System Props Navigation */}
            <SystemPropsNavigation />
        </>
    )
}

export default TableOfContents
