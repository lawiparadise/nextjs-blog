import {
    ActionIcon,
    AppShell, Avatar,
    Group,
    Header,
    Autocomplete,
    Text, useMantineColorScheme
} from "@mantine/core";
import Link from "next/link";
import {BlogNavbar} from "../Navbar";
import {BlogHeader} from "../Header";

// component만들 때
// export const MainLayout:FC = (props:{home}) => { // FC사용
// export default function DefaultLayout({dictFileNamesFromFolder, children}) { // 기명 함수
// export default function ({dictFileNamesFromFolder, children}) { // 이건 익명도 기명도 아녀
export const BlogLayout = ({dictFileNamesFromFolder, children}) => { // 화살표 함수인건가 익명 함수인건가

    return (
        <AppShell
            padding="md"
            navbar={<BlogNavbar dictFileNamesFromFolder={dictFileNamesFromFolder}/>}
            header={<BlogHeader/>}
            styles={(theme) => ({
                main: {backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]},
            })}
        >
            <main>{children}</main>
        </AppShell>
    );
}
