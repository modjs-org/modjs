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
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body style={{ margin: 0, padding: 0 }}>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    )
}
