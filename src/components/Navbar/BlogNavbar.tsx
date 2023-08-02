import {useState, useEffect, useRef, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode } from 'react'
import {
  Navbar,
  NavLink,
  ScrollArea,
} from "@mantine/core";
import Link from 'next/link'

export const BlogNavbar = (props: {
  dictFileNamesFromFolder: any;
  selected: { p: unknown; c: any; };
  setPC: (arg0: { p: number; c: any; }) => void;
}) => {
  const viewport = useRef<HTMLDivElement>(null);
  const dictFileNames = props.dictFileNamesFromFolder;
  const [pList, setPList] = useState([props.selected.p]);
  const l = Object.keys(dictFileNames).length;

  const scrollToCenter = (p: number) =>
    viewport?.current?.scrollTo({
      top: viewport.current.scrollHeight * p / l,
      behavior: 'smooth',
    });

  useEffect(() => {
    if (pList.indexOf(props.selected.p) == -1) {
      setPList([props.selected.p, ...pList]);
    }
  }, [props.selected.p]);

  return (
    <Navbar width={{ base: 250 }} p="md">
      <ScrollArea type="never" viewportRef={viewport}>
        {
          Object.keys(dictFileNames).map((itemP, indexP) => (
            <NavLink
              childrenOffset={0}
              opened={(pList.indexOf(indexP) != -1)}
              // defaultOpened={(indexP === activeP)}
              onClick={() => {
                if (pList.indexOf(indexP) == -1) setPList([indexP, ...pList]);
                else setPList(pList.filter((v) => v != indexP));
              }}
              key={itemP}
              label={itemP}
            >
              {
                // todo ts type error 해결해야 함. dictFileNamesFromFolder
                dictFileNames[itemP].map((itemC: boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | Key | null | undefined, indexC: any) => (
                  <Link key={itemC} href={`/posts/${itemP}/${itemC}`} passHref>
                    <NavLink
                      px="xl"
                      key={itemC}
                      active={(indexC === props.selected.c && indexP === props.selected.p)}
                      label={itemC}
                      onClick={(v) => {
                        // console.log(v?.body);
                        props.setPC({p: indexP, c: indexC});

                        // scrollToCenter(indexP); 스크롤 이동은 일단 하지말자
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
