import {FC, ReactNode, useState} from 'react'
import {
    AppShell,
    Navbar,
    Header,
    Group,
    Text,
    Avatar,
    ActionIcon,
    NavLink,
    useMantineColorScheme
} from "@mantine/core";
import Link from 'next/link'
import {IconSun, IconMoonStars} from '@tabler/icons'
import {GetStaticProps, NextPage} from "next";
import {getFolderNames, getObj} from '../lib/posts'

const data = [
    {label: 'a'},
    {label: 'b'},
    {label: 'c'},
]

interface HomeProps {
    hostmy: String
    folderNames: Array<any>
}


// export async function getStaticProps() {
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const folderNames = getFolderNames()
    return {
        props: {
            hostmy: 'hihi',
            folderNames: folderNames,
        }
    }
}

const Blog: NextPage<HomeProps> = (props) => {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme()
    const [active, setActive] = useState(0);
    // console.log(props.hostmy)
    // console.log('folderNames', props.folderNames)

    return (
        <AppShell
            padding="md"
            navbar={
                <Navbar
                    width={{base: 250}}
                    p="md"
                >
                    {
                        props.folderNames.map((item, index) => (
                            <NavLink
                                key={item}
                                active={index === active}
                                label={item}
                                onClick={() => setActive(index)}
                            />
                        ))
                    }
                </Navbar>
            }
            header={
                <Header height={60} px="md">
                    <Group position="apart" style={{height: '100%'}}>
                        <Link href="/" passHref>
                            <Text component="a" size="xl" weight={1000} mr="1rem">devlog</Text>
                        </Link>
                        <Group position="apart">
                            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size="md">
                                {colorScheme === 'dark' ? <IconSun size={16}/> :
                                    <IconMoonStars size={16}/>}
                            </ActionIcon>
                            <Group position="apart">
                                <Text>june</Text>
                                <Avatar color="cyan" radius="xl" size="md">j</Avatar>
                            </Group>
                        </Group>
                    </Group>
                </Header>}
            styles={(theme) => ({
                main: {backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]},
            })}
        >
            <div>main</div>
        </AppShell>

    )
}

export default Blog
