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
                    data-testid="SystemPropsNavigation_link-align_items"
                >
                    alignItems
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#bgColor"
                    active={/#bgColor$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-bgColor"
                >
                    bgColor
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#bottom"
                    active={/#bottom$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-bottom"
                >
                    bottom
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border"
                    active={/#border$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-border"
                >
                    border
                </Link>
            </List>

            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-top"
                    active={/#border-top$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-border_top"
                >
                    borderTop
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-right"
                    active={/#border-right$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-border_right"
                >
                    borderRight
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-bottom"
                    active={/#border-bottom$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-border_bottom"
                >
                    borderBottom
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-left"
                    active={/#border-left$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-border_left"
                >
                    borderLeft
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-x"
                    active={/#border-x$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-border_x"
                >
                    borderX
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-y"
                    active={/#border-y$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-border_y"
                >
                    borderY
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#border-radius"
                    active={/#border-radius$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-border_radius"
                >
                    borderRadius
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#color"
                    active={/#color$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-color"
                >
                    color
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#display"
                    active={/#display$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-display"
                >
                    display
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#elevation"
                    active={/#elevation$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-elavation"
                >
                    elevation
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#flex-wrap"
                    active={/#flex-wrap$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-flex_wrap"
                >
                    flexWrap
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#float"
                    active={/#float$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-float"
                >
                    float
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#fs"
                    active={/#fs$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-fs"
                >
                    fs
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#fw"
                    active={/#fw$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-fw"
                >
                    fw
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#gap"
                    active={/#gap$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-gap"
                >
                    gap
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#height"
                    active={/#height$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-height"
                >
                    height
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#justify-content"
                    active={/#justify-content$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-justify_content"
                >
                    justifyContent
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#left"
                    active={/#left$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-left"
                >
                    left
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#m"
                    active={/#m$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-m"
                >
                    m
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#mt"
                    active={/#mt$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-mt"
                >
                    mt
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#mr"
                    active={/#mr$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-mr"
                >
                    mr
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#mb"
                    active={/#mb$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-mb"
                >
                    mb
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#ml"
                    active={/#ml$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-ml"
                >
                    ml
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#mx"
                    active={/#mx$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-mx"
                >
                    mx
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#my"
                    active={/#my$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-my"
                >
                    my
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#p"
                    active={/#p$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-p"
                >
                    p
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#pt"
                    active={/#pt$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-pt"
                >
                    pt
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#pr"
                    active={/#pr$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-pr"
                >
                    pr
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#pb"
                    active={/#pb$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-pb"
                >
                    pb
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#pl"
                    active={/#pl$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-pl"
                >
                    pl
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#px"
                    active={/#px$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-px"
                >
                    px
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#py"
                    active={/#py$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-py"
                >
                    py
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#position"
                    active={/#position$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-position"
                >
                    position
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#right"
                    active={/#right$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-right"
                >
                    right
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#text-transform"
                    active={/#text-transform$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-text_transform"
                >
                    textTransform
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#text-align"
                    active={/#text-align$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-text_align"
                >
                    textAlign
                </Link>
            </List>

            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#top"
                    active={/#top$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-top"
                >
                    top
                </Link>
            </List>
            <List onClick={handleCurrentFragmentId}>
                <Link
                    variant="transparent"
                    href="#width"
                    active={/#width$/.test(fragmentId)}
                    data-testid="SystemPropsNavigation_link-width"
                >
                    width
                </Link>
            </List>
        </UnorderedList>
    )
}

export default SystemPropsNavigation
