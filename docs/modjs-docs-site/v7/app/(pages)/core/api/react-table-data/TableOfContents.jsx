//core/api/react-table-data
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
                        href="#table-data-api"
                        active={/#table-data-api$/.test(fragmentId)}
                    >
                        TableData API
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#import"
                        active={/#import$/.test(fragmentId)}
                    >
                        Import
                    </Link>
                </List>

                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#table-data-props"
                        active={/#table-data-props$/.test(fragmentId)}
                    >
                        TableData Props
                    </Link>
                </List>
                <Separator />
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        fw="bold"
                        href="#system-props"
                        active={/#system-props$/.test(fragmentId)}
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
