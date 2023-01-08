import {ActionIcon, Autocomplete, Avatar, Group, Header, Text, useMantineColorScheme} from "@mantine/core";
import Link from "next/link";
import {IconMoonStars, IconSearch, IconSun} from "@tabler/icons";

export const BlogHeader = () => {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme()

    return (
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
        </Header>
    )
}
