import StyledComponentsRegistry from '../../registry'

export const metadata = {
    title: 'Mod.js | Icons | Production-Ready React UI Icons',
    description:
        'Mod.js Icons package delivers UI Icons Components built on top of React for Production-Ready Applications.',
    keywords: ['modjs icons', 'React UI Icons'],
    robots: 'index,follow', // Should index the webpage on search results and also follow the links in that page.
    referrer: 'origin-when-cross-origin', //Send full referrer (including path and query parameters) if the user navigates to the other page WITHIN the same origin (same domain protocol and port)
}

export default function RootLayout({ children }) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
