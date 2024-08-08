import React from 'react'
import { Link } from '@modjs/core'
import { GithubIcon } from '@modjs/icons'

const HomeNavigation = () => {
    return (
        <>
            <Link
                variant="icon"
                href="https://github.com/modjs-org/modjs"
                target="_blank"
                data-testid="HomeNavigation_link-github"
            >
                Github Repository <GithubIcon />
            </Link>
        </>
    )
}

export default HomeNavigation
