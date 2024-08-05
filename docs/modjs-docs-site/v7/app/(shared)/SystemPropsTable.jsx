import React from 'react'
import {
    Pill,
    Section,
    Typography,
    Table,
    TableBody,
    TableData,
    TableHead,
    TableHeader,
    TableRow,
} from '@modjs/core'

const SystemPropsTable = () => {
    return (
        <Section id="system-props" pb="normal">
            <Typography variant="h2">System Props</Typography>
            <Typography variant="body1">
                The component mentioned in this page is wrapped with a
                withModSystemProps HOC and therefore, the following props can be
                applied to this component. Note that some of these props may
                have no effect on this component.
            </Typography>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Default</TableHead>
                        <TableHead>Description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow id="align-items">
                        <TableData>alignItems</TableData>
                        <TableData>
                            <Pill>string </Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>Controls the alignment of items.</TableData>
                    </TableRow>
                    <TableRow id="bgColor">
                        <TableData>bgColor</TableData>
                        <TableData>
                            <Pill color="success">
                                "primary" "secondary" "main" "success" "error"
                                "light" "dark" "transparent"
                            </Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies background color to the component based on
                            the colors defined in the theme.
                        </TableData>
                    </TableRow>
                    <TableRow id="bottom">
                        <TableData>bottom</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies bottom spacing to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="border">
                        <TableData>border</TableData>
                        <TableData>
                            <Pill>
                                "primary" "success" "error" "light" "dark"
                                "none"
                            </Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies border to the component based on the borders
                            defined in the theme.
                        </TableData>
                    </TableRow>
                    <TableRow id="border-top">
                        <TableData>borderTop</TableData>
                        <TableData>
                            <Pill>
                                "primary" "success" "error" "light" "dark"
                                "none"
                            </Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies top border to the component based on the
                            borders defined in the theme.
                        </TableData>
                    </TableRow>
                    <TableRow id="border-right">
                        <TableData>borderRight</TableData>
                        <TableData>
                            <Pill>
                                "primary" "success" "error" "light" "dark"
                                "none"
                            </Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies right border to the component based on the
                            borders defined in the theme.
                        </TableData>
                    </TableRow>
                    <TableRow id="border-bottom">
                        <TableData>borderBottom</TableData>
                        <TableData>
                            <Pill>
                                "primary" "success" "error" "light" "dark"
                                "none"
                            </Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies bottom border to the component based on the
                            borders defined in the theme.
                        </TableData>
                    </TableRow>
                    <TableRow id="border-left">
                        <TableData>borderLeft</TableData>
                        <TableData>
                            <Pill>
                                "primary" "success" "error" "light" "dark"
                                "none"
                            </Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies left border to the component based on the
                            borders defined in the theme.
                        </TableData>
                    </TableRow>
                    <TableRow id="border-x">
                        <TableData>borderX</TableData>
                        <TableData>
                            <Pill>
                                "primary" "success" "error" "light" "dark"
                                "none"
                            </Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies left and right border to the component based
                            on the borders defined in the theme.
                        </TableData>
                    </TableRow>
                    <TableRow id="border-y">
                        <TableData>borderY</TableData>
                        <TableData>
                            <Pill>
                                "primary" "success" "error" "light" "dark"
                                "none"
                            </Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies top and bottom border to the component based
                            on the borders defined in the theme.
                        </TableData>
                    </TableRow>
                    <TableRow id="border-radius">
                        <TableData>borderRadius</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies border radius to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="color">
                        <TableData>color</TableData>
                        <TableData>
                            <Pill>
                                "primary" "secondary" "main" "success" "error"
                                "light" "dark" "white"
                            </Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies color to the text inside this component
                            based on the colors defined in the theme.
                        </TableData>
                    </TableRow>
                    <TableRow id="display">
                        <TableData>display</TableData>
                        <TableData>
                            <Pill>string</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Controls how the component should be displayed.
                        </TableData>
                    </TableRow>
                    <TableRow id="elevation">
                        <TableData>elevation</TableData>
                        <TableData>
                            <Pill>"light" "normal" "heavy" "none"</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies shadow to the component based on the
                            elevation defined in the theme.
                        </TableData>
                    </TableRow>
                    <TableRow id="flex-wrap">
                        <TableData>flexWrap</TableData>
                        <TableData>
                            <Pill>string</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Controls whether the flex items are forced onto one
                            line or can wrap onto multiple lines.
                        </TableData>
                    </TableRow>
                    <TableRow id="float">
                        <TableData>float</TableData>
                        <TableData>
                            <Pill>string</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Controls whether the items are placed to the right
                            or left of its container.
                        </TableData>
                    </TableRow>
                    <TableRow id="fs">
                        <TableData>fs</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies font-size in rem unit to the text inside of
                            this component.
                        </TableData>
                    </TableRow>
                    <TableRow id="fw">
                        <TableData>fw</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies font-weight to the text inside of this
                            component.
                        </TableData>
                    </TableRow>
                    <TableRow id="gap">
                        <TableData>gap</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies gaps/gutters between rows and columns.
                        </TableData>
                    </TableRow>
                    <TableRow id="height">
                        <TableData>height</TableData>
                        <TableData>
                            <Pill>string</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>Applies height to the component.</TableData>
                    </TableRow>
                    <TableRow id="justify-content">
                        <TableData>justifyContent</TableData>
                        <TableData>
                            <Pill>string</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies justify-content CSS property to the
                            component.
                        </TableData>
                    </TableRow>
                    <TableRow id="left">
                        <TableData>left</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies left spacing to the component.
                        </TableData>
                    </TableRow>

                    <TableRow id="m">
                        <TableData>m</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies margin in px to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="mt">
                        <TableData>mt</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies top margin in px to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="mr">
                        <TableData>mr</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies right margin in px to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="mb">
                        <TableData>mb</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies bottom margin in px to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="ml">
                        <TableData>ml</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies left margin in px to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="mx">
                        <TableData>mx</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies right and left margin in px to the
                            component.
                        </TableData>
                    </TableRow>
                    <TableRow id="my">
                        <TableData>my</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies top and bottom margin in px to the
                            component.
                        </TableData>
                    </TableRow>
                    <TableRow id="p">
                        <TableData>p</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies padding in px to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="pt">
                        <TableData>pt</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies top padding in px to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="pr">
                        <TableData>pr</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies right padding in px to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="pb">
                        <TableData>pb</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies bottom padding in px to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="pl">
                        <TableData>pl</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies left padding in px to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="px">
                        <TableData>px</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies right and left padding in px to the
                            component.
                        </TableData>
                    </TableRow>
                    <TableRow id="py">
                        <TableData>py</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies top and bottom padding in px to the
                            component.
                        </TableData>
                    </TableRow>
                    <TableRow id="position">
                        <TableData>position</TableData>
                        <TableData>
                            <Pill>string</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Controls the position of the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="right">
                        <TableData>right</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies right spacing to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="text-transform">
                        <TableData>textTransform</TableData>
                        <TableData>
                            <Pill>string</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies text-transform CSS property to the text
                            inside this component.
                        </TableData>
                    </TableRow>
                    <TableRow id="text-align">
                        <TableData>textAlign</TableData>
                        <TableData>
                            <Pill>string</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies text-align CSS property to the text inside
                            this component.
                        </TableData>
                    </TableRow>

                    <TableRow id="top">
                        <TableData>top</TableData>
                        <TableData>
                            <Pill>number</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>
                            Applies top spacing to the component.
                        </TableData>
                    </TableRow>
                    <TableRow id="width">
                        <TableData>width</TableData>
                        <TableData>
                            <Pill>string</Pill>
                        </TableData>
                        <TableData>-</TableData>
                        <TableData>Applies width to the component.</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </Section>
    )
}

export default SystemPropsTable
