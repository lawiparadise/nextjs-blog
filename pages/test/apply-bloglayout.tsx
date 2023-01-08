import { getDictFileNamesFromFolder } from "../../lib/posts";
import {BlogLayout} from "../../components";

export async function getStaticProps() {
  const dictFileNamesFromFolder = getDictFileNamesFromFolder();

  return {
    props: { dictFileNamesFromFolder },
  };
}


export default function ApplyBloglayout({dictFileNamesFromFolder}) {
  return (
    <BlogLayout dictFileNamesFromFolder={dictFileNamesFromFolder}>
      <div>about</div>
    </BlogLayout>
  )
}
