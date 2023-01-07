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
import MyNavbar from "../Navigation/Navbar";

// component만들 때
// export const MainLayout:FC = (props:{home}) => { // FC사용
// export default function DefaultLayout({dictFileNamesFromFolder, children}) { // 기명 함수
// export default function ({dictFileNamesFromFolder, children}) { // 이건 익명도 기명도 아녀
export const DefaultLayout = ({dictFileNamesFromFolder, children}) => { // 화살표 함수인건가 익명 함수인건가
    const {colorScheme, toggleColorScheme} = useMantineColorScheme()

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
                                style={{width: 100}}
                                size="xs"
                                placeholder="search"
                                icon={<IconSearch size={16} stroke={1.5}/>}
                                data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                            />
                            <ActionIcon variant="default"
                                        onClick={() => toggleColorScheme()} size="md">
                                {colorScheme === 'dark' ? <IconSun size={16}/> :
                                    <IconMoonStars size={16}/>}
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
