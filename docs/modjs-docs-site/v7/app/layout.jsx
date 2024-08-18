import StyledComponentsRegistry from './registry'

export const metadata = {
    title: '404: Page Not Found',
    description: '404 Page Not Found',
    keywords: [],
    robots: 'noindex,nofollow', // Should index the webpage on search results and also follow the links in that page.
    referrer: 'origin-when-cross-origin', //Send full referrer (including path and query parameters) if the user navigates to the other page WITHIN the same origin (same domain protocol and port)
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head></head>
            <body style={{ margin: 0, padding: 0 }}>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    )
}
