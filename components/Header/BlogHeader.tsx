import {ActionIcon, Autocomplete, Avatar, Group, Header, Text, useMantineColorScheme} from "@mantine/core";
import {IconMoonStars, IconSearch, IconSun} from "@tabler/icons";
import Link from "next/link";

export const BlogHeader = (props) => {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme()
    // console.log(props.sortedPostsData);

    return (
        <Header height={60} px="md">
            <Group position="apart" style={{height: '100%'}}>
                <Link href="/" passHref>
                    <Text sx={{fontFamily: "Consolas"}} size="xl" weight={1000} mr="1rem">devlog</Text>
                </Link>
                <Group position="apart">
                    <Autocomplete
                        sx={{width: 250}}
                        size="xs"
                        placeholder="search"
                        icon={<IconSearch size={16} stroke={1.5}/>}
                        data={props.sortedPostsData.map((v)=>v.title)}
                        onItemSubmit={(v)=>{
                            // console.log('v.value', v.value);
                            const a = props.sortedPostsData.filter((x) => {
                                // console.log('x.title', x.title);
                                return v.value == x.title
                            });
                            props.onItemSubmit(a)
                        }}
                    />
                    <ActionIcon
                        variant="default"
                        onClick={() => toggleColorScheme()} size="md">
                        {colorScheme === 'dark' ? <IconSun size={16}/> : <IconMoonStars size={16}/>}
                    </ActionIcon>
                    <Group position="apart">
                        <Text sx={{fontFamily: "Consolas"}}>june</Text>
                        <Avatar color="cyan" radius="xl" size="md">j</Avatar>
                    </Group>
                </Group>
            </Group>
        </Header>
    )
}
