//core/api/react-linear-progress
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
                        href="#linear-progress-api"
                        active={/#linear-progress-api$/.test(fragmentId)}
                        data-testid="linear_progress_api"
                    >
                        LinearProgress API
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
                        href="#linear-progress-props"
                        active={/#linear-progress-props$/.test(fragmentId)}
                        data-testid="linear_progress_props"
                    >
                        LinearProgress Props
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
