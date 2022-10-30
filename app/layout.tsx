// "use client"

// Layouts must accept a children prop.
// This will be populated with nested layouts or pages
// import {getDictFileNamesFromFolder} from "../lib/posts";
// import {getDictFileNamesFromFolder} from "../lib/posts1"; 왜 안되냐고오오
import { NavLink } from "@mantine/core";
import { getDictFileNamesFromFolder } from "../lib/posts";

// import {useState} from "react";

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  // const [activeP, setActiveP] = useState(0);
  // const [activeC, setActiveC] = useState(0);
  // const activeP = 0
  // const activeC = 0

  // const dictFileNamesFromFolder = await getNavItems();
  // const dictFileNamesFromFolder = getDictFileNamesFromFolder()
  // console.log("dictFileNamesFromFolder", dictFileNamesFromFolder) // 잘 뜸!!

  return (
    <html lang="en">
    <head>
      <title>Next.js</title>
    </head>
    <body>
      {children}
    </body>
    </html>
  );
}

async function getNavItems() {
  return getDictFileNamesFromFolder();
}
