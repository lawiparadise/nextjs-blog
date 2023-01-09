import {useState, useEffect} from 'react'
import {
  Navbar,
  NavLink,
  ScrollArea,
} from "@mantine/core";
import Link from 'next/link'

export const BlogNavbar = (props) => {
  const dictFileNames = props.dictFileNamesFromFolder;
  const [pList, setPList] = useState([props.selected.p]);

  useEffect(()=>{
      if(pList.indexOf(props.selected.p) == -1){
          setPList([props.selected.p, ...pList] );
      }
  }, [props.selected.p]);

  return (
    <Navbar width={{ base: 250 }} p="md">
      <ScrollArea type="never">
        {
          Object.keys(dictFileNames).map((itemP, indexP) => (
            <NavLink
              childrenOffset={0}
              opened={(pList.indexOf(indexP) != -1)}
              // defaultOpened={(indexP === activeP)}
              onClick={()=>{
                  if(pList.indexOf(indexP) == -1) setPList([indexP, ...pList] );
                  else setPList(pList.filter((v)=> v!=indexP));
              }}
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
                      active={(indexC === props.selected.c && indexP === props.selected.p)}
                      label={itemC}
                      onClick={() => {
                          props.setPC({p:indexP,c:indexC})
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
