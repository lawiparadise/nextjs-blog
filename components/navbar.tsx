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

// interface BlogProps {
//   dictFileNamesFromFolder: Object
// }

// 얘도 안쓰지 왜냐면 page가 아니니까.
// export const getStaticProps: GetStaticProps<BlogProps> = async (context) => {
//   const dictFileNamesFromFolder = getDictFileNamesFromFolder()
//   return {
//     props: {
//       dictFileNamesFromFolder: dictFileNamesFromFolder
//     }
//   }
// }

// const MyNavbar: NextPage<BlogProps> = (props) => {
export default function MyNavbar({dictFileNamesFromFolder}){
  // todo url 받아와서 state변경하기

  const [activeP, setActiveP] = useState(0);
  const [activeC, setActiveC] = useState(0);
  const dictFileNames = dictFileNamesFromFolder

  return (
    <Navbar width={{ base: 250 }} p="md">
      <ScrollArea
        type="never"
      >
        {
          Object.keys(dictFileNames).map((itemP, indexP) => (
            <NavLink
              childrenOffset={0}
              defaultOpened={(indexP === activeP)}
              key={itemP}
              label={itemP}
            >
              {
                // todo ts type error 해결해야 함. dictFileNamesFromFolder
                dictFileNames[itemP].map((itemC, indexC) => (
                  <Link key={itemC} href={`/posts/${itemP}/${itemC}`} passHref>
                    <NavLink
                      px="xl"
                      key={itemC}
                      active={(indexC === activeC && indexP === activeP)}
                      label={itemC}
                      onClick={() => {
                        // console.log(itemP, itemC)
                        setActiveP(indexP)
                        setActiveC(indexC)
                      }}
                    />
                  </Link>
                ))
              }
            </NavLink>
          ))
        }
      </ScrollArea>
    </Navbar>
  )
}