import {
    AppShell,
} from "@mantine/core";
import {BlogNavbar} from "../Navbar";
import {BlogHeader} from "../Header";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

function getFileNumFromPath(dictFileNames, asPath) {
    let p, c = 0
    if (asPath.split('/')[1] == 'posts') { // posts로 접근했을 때만 가능하게하기
        const folderName = asPath.split('/')[2]
        const fileName = asPath.split('/')[3]
        // console.log(folderName, fileName)
        p = Object.keys(dictFileNames).indexOf(folderName)
        // console.log(p)
        c = dictFileNames[folderName].indexOf(fileName)
        // console.log(c)
    }
    return { p,c }
}

// component만들 때
// export const MainLayout:FC = (props:{home}) => { // FC사용
// export default function DefaultLayout({dictFileNamesFromFolder, children}) { // 기명 함수
// export default function ({dictFileNamesFromFolder, children}) { // 이건 익명도 기명도 아녀
export const BlogLayout = (props) => { // 화살표 함수인건가 익명 함수인건가
    const router = useRouter();
    const data = props.dictFileNamesFromFolder;
    const pc = getFileNumFromPath(data, router.asPath);
    const [selected, setSelected] = useState(pc);

    return (
        <AppShell
            padding="md"
            navbar={
                <BlogNavbar
                    dictFileNamesFromFolder={data}
                    selected = {selected}
                    setPC={(v)=>setSelected(v)}
                />
            }
            header={
                <BlogHeader
                    sortedPostsData={props.sortedPostsData}
                    onItemSubmit={(a) => {
                        const path = '/posts/' + a[0].id;
                        const pc2 = getFileNumFromPath(data, path)
                        setSelected(pc2);
                        router.push(path);
                    }}
                />
            }
            styles={(theme) => ({
                main: {backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]},
            })}
        >
            <main>{props.children}</main>
        </AppShell>
    );
}