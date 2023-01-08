import { useState } from 'react'
import { useRouter } from 'next/router';
import {
  Navbar,
  NavLink,
  ScrollArea,
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

function getFileNum(dictFileNames) {
  const { asPath, pathname } = useRouter();
  // console.log('asPath', asPath)
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
  return { p, c }
}

// const MyNavbar: NextPage<BlogProps> = (props) => {
export const BlogNavbar = ({ dictFileNamesFromFolder }) => {
  const dictFileNames = dictFileNamesFromFolder
  const { p, c } = getFileNum(dictFileNames)

  const [activeP, setActiveP] = useState(p);
  const [activeC, setActiveC] = useState(c);

  return (
    <Navbar width={{ base: 250 }} p="md">
      <ScrollArea type="never">
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
