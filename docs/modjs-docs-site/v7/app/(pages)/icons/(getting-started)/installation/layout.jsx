import StyledComponentsRegistry from '../../../../registry'

export const metadata = {
    title: 'Installation | Mod.js | Icons',
    description:
        'Learn how to quickly install and integrate the icons component library from Mod.js.',
    keywords: ['modjs icons installation'], //ALERT: keyword cannibalization
    robots: 'index,follow',
    referrer: 'origin-when-cross-origin', //Send full referrer (including path and query parameters) if the user navigates to the other page WITHIN the same origin (same domain protocol and port)
}

export default function RootLayout({ children }) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
