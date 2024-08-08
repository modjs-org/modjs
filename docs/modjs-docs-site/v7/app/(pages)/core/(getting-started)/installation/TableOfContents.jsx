//core/installation
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
                        href="#installation"
                        active={/#installation$/.test(fragmentId)}
                        data-testid="installation"
                    >
                        Installation
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#prerequisites"
                        active={/#prerequisites$/.test(fragmentId)}
                        data-testid="prerequisites"
                    >
                        Prerequisites
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#peer-dependencies"
                        active={/#peer-dependencies$/.test(fragmentId)}
                        data-testid="peer_dependencies"
                    >
                        Peer Dependencies
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#dependencies"
                        active={/#dependencies$/.test(fragmentId)}
                        data-testid="dependencies"
                    >
                        Dependencies
                    </Link>
                </List>
                <List onClick={handleCurrentFragmentId}>
                    <Link
                        variant="transparent"
                        href="#quick-install"
                        active={/#quick-install$/.test(fragmentId)}
                        data-testid="quick_install"
                    >
                        Quick Install
                    </Link>
                </List>
            </UnorderedList>
        </>
    )
}

export default TableOfContents
