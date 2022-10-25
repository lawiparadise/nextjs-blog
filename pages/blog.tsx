import { useState } from 'react'
import {
  AppShell,
  Navbar,
  Header,
  Group,
  Text,
  Avatar,
  ActionIcon,
  NavLink,
  ScrollArea,
  useMantineColorScheme
} from "@mantine/core";
import Link from 'next/link'
import { IconSun, IconMoonStars } from '@tabler/icons'
import { GetStaticProps, NextPage } from "next";
import { getDictFileNamesFromFolder, getFolderNames, getObj } from '../lib/posts'

// const data = [
//   { label: 'a' },
//   { label: 'b' },
//   { label: 'c' },
// ]

interface BlogProps {
  // hostmy: String
  // folderNames: Array<any>
  dictFileNamesFromFolder: Object
}

export const getStaticProps: GetStaticProps<BlogProps> = async (context) => {
  // const folderNames = getFolderNames()
  const dictFileNamesFromFolder = getDictFileNamesFromFolder()
  console.log(typeof dictFileNamesFromFolder)
  return {
    props: {
      // hostmy: 'hihi',
      // folderNames: folderNames,
      dictFileNamesFromFolder: dictFileNamesFromFolder
    }
  }
}

const Blog: NextPage<BlogProps> = (props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [activeP, setActiveP] = useState(0);
  const [activeC, setActiveC] = useState(0);
  // console.log(props.hostmy)
  // console.log('folderNames', props.folderNames)
  // console.log('dictFileNamesFromFolder', props.dictFileNamesFromFolder)
  const dictFileNames = props.dictFileNamesFromFolder
  // console.log(typeof(dictFileNames['css']))

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 250 }} p="md">
          <ScrollArea
            type="never"
          >
            {
              Object.keys(dictFileNames).map((itemP, indexP) => (
                <NavLink
                  childrenOffset={0}
                  key={itemP}
                  label={itemP}
                >
                  {
                    // todo ts type error 해결해야 함. dictFileNamesFromFolder
                    dictFileNames[itemP].map((itemC, indexC) => (
                      <NavLink
                        px="xl"
                        key={itemC}
                        active={(indexC === activeC && indexP === activeP)}
                        label={itemC}
                        onClick={() => {
                          // console.log(indexP, indexC)
                          setActiveP(indexP)
                          setActiveC(indexC)
                        }}
                      />
                    ))
                  }
                </NavLink>
              ))
            }
          </ScrollArea>
        </Navbar>
      }
      header={
        <Header height={60} px="md">
          <Group position="apart" style={{ height: '100%' }}>
            <Link href="/" passHref>
              <Text component="a" size="xl" weight={1000} mr="1rem">devlog</Text>
            </Link>
            <Group position="apart">
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size="md">
                {colorScheme === 'dark' ? <IconSun size={16} /> :
                  <IconMoonStars size={16} />}
              </ActionIcon>
              <Group position="apart">
                <Text>june</Text>
                <Avatar color="cyan" radius="xl" size="md">j</Avatar>
              </Group>
            </Group>
          </Group>
        </Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <div>main</div>
    </AppShell>

  )
}

export default Blog
