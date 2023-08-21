'use client'

import { useRef } from 'react'
import {
  Navbar,
  NavLink,
  ScrollArea,
} from '@mantine/core'
import Link from 'next/link'

export const BlogNavbar = (props: {
  dictFileNamesFromFolder: any;
  selected: { p: unknown; c: any; };
  setPC: (arg0: { p: number; c: any; }) => void;
  setPlist: (indexP: number) => void;
  pList: number[];
}) => {
  const viewport = useRef<HTMLDivElement>(null);
  const dictFileNames = props.dictFileNamesFromFolder;

  const l = Object.keys(dictFileNames).length;
  const scrollToCenter = (p: number) =>
    viewport?.current?.scrollTo({
      top: viewport.current.scrollHeight * p / l,
      behavior: 'smooth',
    });

  return (
    <Navbar width={{ base: 250 }} p="md">
      <ScrollArea type="never" viewportRef={viewport}>
        {
          Object.keys(dictFileNames).map((itemP, indexP) => (
            <NavLink
              childrenOffset={0}
              opened={(props.pList.indexOf(indexP) != -1)}
              // defaultOpened={(indexP === activeP)}
              onClick={() => props.setPlist(indexP)}
              key={'p-' + itemP}
              label={itemP}
            >
              {
                dictFileNames[itemP].map((itemC: any, indexC: any) => (
                  <Link key={'c-' + itemC} href={`/mantine/posts/${itemP}/${itemC}`}>
                    <NavLink
                      px="xl"
                      active={(indexC === props.selected.c && indexP === props.selected.p)}
                      label={itemC}
                      onClick={(v) => {
                        // console.log(v?.body);
                        props.setPC({ p: indexP, c: indexC });

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
