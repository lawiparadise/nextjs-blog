// Layouts must accept a children prop.
// This will be populated with nested layouts or pages

export default function RootLayout({children,}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <title>Next.js</title>
        </head>
        <body>
        <div>div test in root layout</div>
        {children}</body>
        </html>
    );
}
