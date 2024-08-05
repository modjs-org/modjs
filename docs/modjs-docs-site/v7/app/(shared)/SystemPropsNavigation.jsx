import React, { useContext } from 'react'
import { List, Link, UnorderedList } from '@modjs/core'
import FragmentIdContext from '../context/FragmentIdContext'

const SystemPropsNavigation = () => {
    const { fragmentId, setFragmentId } = useContext(FragmentIdContext)

    const handleCurrentFragmentId = event => {
        const hash = event.target.hash
        setFragmentId(hash)
    }

    return (
        <UnorderedList>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#align-items"
                    active={/#align-items$/.test(fragmentId)}
                >
                    alignItems
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#bgColor"
                    active={/#bgColor$/.test(fragmentId)}
                >
                    bgColor
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#bottom"
                    active={/#bottom$/.test(fragmentId)}
                >
                    bottom
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border"
                    active={/#border$/.test(fragmentId)}
                >
                    border
                </Link>
            </List>

            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-top"
                    active={/#border-top$/.test(fragmentId)}
                >
                    borderTop
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-right"
                    active={/#border-right$/.test(fragmentId)}
                >
                    borderRight
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-bottom"
                    active={/#border-bottom$/.test(fragmentId)}
                >
                    borderBottom
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-left"
                    active={/#border-left$/.test(fragmentId)}
                >
                    borderLeft
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-x"
                    active={/#border-x$/.test(fragmentId)}
                >
                    borderX
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-y"
                    active={/#border-y$/.test(fragmentId)}
                >
                    borderY
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-radius"
                    active={/#border-radius$/.test(fragmentId)}
                >
                    borderRadius
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#color"
                    active={/#color$/.test(fragmentId)}
                >
                    color
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#display"
                    active={/#display$/.test(fragmentId)}
                >
                    display
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#elevation"
                    active={/#elevation$/.test(fragmentId)}
                >
                    elevation
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#flex-wrap"
                    active={/#flex-wrap$/.test(fragmentId)}
                >
                    flexWrap
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#float"
                    active={/#float$/.test(fragmentId)}
                >
                    float
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#fs"
                    active={/#fs$/.test(fragmentId)}
                >
                    fs
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#fw"
                    active={/#fw$/.test(fragmentId)}
                >
                    fw
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#gap"
                    active={/#gap$/.test(fragmentId)}
                >
                    gap
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#height"
                    active={/#height$/.test(fragmentId)}
                >
                    height
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#justify-content"
                    active={/#justify-content$/.test(fragmentId)}
                >
                    justifyContent
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#left"
                    active={/#left$/.test(fragmentId)}
                >
                    left
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#m"
                    active={/#m$/.test(fragmentId)}
                >
                    m
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#mt"
                    active={/#mt$/.test(fragmentId)}
                >
                    mt
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#mr"
                    active={/#mr$/.test(fragmentId)}
                >
                    mr
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#mb"
                    active={/#mb$/.test(fragmentId)}
                >
                    mb
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#ml"
                    active={/#ml$/.test(fragmentId)}
                >
                    ml
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#mx"
                    active={/#mx$/.test(fragmentId)}
                >
                    mx
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#my"
                    active={/#my$/.test(fragmentId)}
                >
                    my
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#p"
                    active={/#p$/.test(fragmentId)}
                >
                    p
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#pt"
                    active={/#pt$/.test(fragmentId)}
                >
                    pt
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#pr"
                    active={/#pr$/.test(fragmentId)}
                >
                    pr
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#pb"
                    active={/#pb$/.test(fragmentId)}
                >
                    pb
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#pl"
                    active={/#pl$/.test(fragmentId)}
                >
                    pl
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#px"
                    active={/#px$/.test(fragmentId)}
                >
                    px
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#py"
                    active={/#py$/.test(fragmentId)}
                >
                    py
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#position"
                    active={/#position$/.test(fragmentId)}
                >
                    position
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#right"
                    active={/#right$/.test(fragmentId)}
                >
                    right
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#text-transform"
                    active={/#text-transform$/.test(fragmentId)}
                >
                    textTransform
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#text-align"
                    active={/#text-align$/.test(fragmentId)}
                >
                    textAlign
                </Link>
            </List>

            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#top"
                    active={/#top$/.test(fragmentId)}
                >
                    top
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#width"
                    active={/#width$/.test(fragmentId)}
                >
                    width
                </Link>
            </List>
        </UnorderedList>
    )
}

export default SystemPropsNavigation
