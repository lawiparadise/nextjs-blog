import { useState } from 'react'
import {GetStaticProps, NextPage} from "next";
import {getDictFileNamesFromFolder} from "../lib/posts";
import {
    ActionIcon,
    AppShell, Avatar,
    Group,
    Header,
    Navbar,
    NavLink,
    ScrollArea,
    Autocomplete,
    Text, useMantineColorScheme
} from "@mantine/core";
import Link from "next/link";
import {IconMoonStars, IconSun, IconSearch} from "@tabler/icons";
import MyNavbar from "./navbar";

// export async function getStaticProps() {
//     const dictFileNamesFromFolder = getDictFileNamesFromFolder();
//     console.log("dictFileNamesFromFolder", dictFileNamesFromFolder)
//
//     return {
//         props: { dictFileNamesFromFolder },
//     };
// }
//
// export default function BlogLayout({ dictFileNamesFromFolder, children }) {
//   return (
//     <div>
//       <div>blog layout</div>
//       <div>{dictFileNamesFromFolder}</div>
//       <main>{children}</main>
//     </div>
//   )
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   const dictFileNamesFromFolder = getDictFileNamesFromFolder()
//   console.log("dictFileNamesFromFolder", dictFileNamesFromFolder)
//
//   return {
//     props: {
//       dictFileNamesFromFolder,
//     },
//   }
// }

// page로 쓸 게 아니라서 이거 적용 안 됨.
// export async function getStaticProps() {
//     const categories = await getDictFileNamesFromFolder();
//
//     return {
//         props: { categories },
//     };
// }

export default function BlogLayout({dictFileNamesFromFolder, children}) {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
        <AppShell
            padding="md"
            navbar={
                 <MyNavbar dictFileNamesFromFolder={dictFileNamesFromFolder}/>
            }
            header={
                <Header height={60} px="md">
                    <Group position="apart" style={{height: '100%'}}>
                        <Link href="/" passHref>
                            <Text sx={{fontFamily: "Consolas"}} size="xl" weight={1000}
                                  mr="1rem">devlog</Text>
                        </Link>
                        <Group position="apart">
                            <Autocomplete
                                style={{width:100}}
                                size="xs"
                                placeholder="search"
                                icon={<IconSearch size={16} stroke={1.5}/>}
                                data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                            />
                            <ActionIcon variant="default"
                                        onClick={() => toggleColorScheme()} size="md">
                                {colorScheme === 'dark' ? <IconSun size={16} /> :
                                    <IconMoonStars size={16} />}
                            </ActionIcon>
                            <Group position="apart">
                                <Text sx={{fontFamily: "Consolas"}}>june</Text>
                                <Avatar color="cyan" radius="xl" size="md">j</Avatar>
                            </Group>
                        </Group>
                    </Group>
                </Header>}
            styles={(theme) => ({
                main: {backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]},
            })}
        >
            <main>{children}</main>
        </AppShell>
    );
}