// "use client"

// Layouts must accept a children prop.
// This will be populated with nested layouts or pages
// import {getDictFileNamesFromFolder} from "../lib/posts";
// import {getDictFileNamesFromFolder} from "../lib/posts1"; 왜 안되냐고오오
import {NavLink} from "@mantine/core";
// import {useState} from "react";

export default async function RootLayout({children,}: {
    children: React.ReactNode;
}) {
    // const [activeP, setActiveP] = useState(0);
    // const [activeC, setActiveC] = useState(0);
    // const activeP = 0
    // const activeC = 0

    // const dictFileNames = await getNavItems();

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

// async function getNavItems() {
//     const dictFileNamesFromFolder = getDictFileNamesFromFolder()
//
//     return dictFileNamesFromFolder;
// }
