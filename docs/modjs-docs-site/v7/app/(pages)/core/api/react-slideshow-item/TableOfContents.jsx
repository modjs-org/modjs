//core/api/react-slideshow-item
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
                        href="#slideshow-item-api"
                        active={/#slideshow-item-api$/.test(fragmentId)}
                        data-testid="slideshow_item_api"
                    >
                        SlideshowItem API
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
                        href="#slideshow-item-props"
                        active={/#slideshow-item-props$/.test(fragmentId)}
                        data-testid="slideshow_item_props"
                    >
                        SlideshowItem Props
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
