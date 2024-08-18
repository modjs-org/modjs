import StyledComponentsRegistry from '../../../../registry'

export const metadata = {
    title: 'Customization | Mod.js | Icons',
    description:
        "Learn how to customize the icons components from Mod.js to meet your project's unique design and functionality needs.",
    keywords: ['modjs icons customization'], //ALERT: keyword cannibalization
    robots: 'index,follow',
    referrer: 'origin-when-cross-origin', //Send full referrer (including path and query parameters) if the user navigates to the other page WITHIN the same origin (same domain protocol and port)
}

export default function RootLayout({ children }) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
