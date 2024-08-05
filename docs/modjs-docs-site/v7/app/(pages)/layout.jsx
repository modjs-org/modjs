import StyledComponentsRegistry from '../registry'

export const metadata = {
    title: 'Mod.js | Production-Ready React Component Library',
    description:
        'Mod.js Core package delivers UI Components built on top of React for Production-Ready Applications. Streamline your frontend web development with robust, customizable, and intensively tested React components designed for seamless integration and optimal performance.',
    keywords: [
        'modjs',
        'React Component Library',
        'frontend web development',
        'website design',
        'responsive web design',
    ],
    robots: 'index,follow', // Should index the webpage on search results and also follow the links in that page.
    referrer: 'origin-when-cross-origin', //Send full referrer (including path and query parameters) if the user navigates to the other page WITHIN the same origin (same domain protocol and port)
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* TODO: Keep until the site is deployed to see if it's needed in production. */}
                {/* <link rel="preload" href="https://fonts.googleapis.com" />
                <link
                    rel="preload"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap"
                    rel="preload stylesheet"
                />
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-J3PEG3YLFQ"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-J3PEG3YLFQ');
          `,
                    }}
                /> */}
            </head>
            <body style={{ margin: 0, padding: 0 }}>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    )
}
