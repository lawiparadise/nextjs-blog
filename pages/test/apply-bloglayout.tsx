import { getDictFileNamesFromFolder } from "../../lib/posts";
import DefaultLayout from "../../components/Layout/DefaultLayout";

export async function getStaticProps() {
  const dictFileNamesFromFolder = getDictFileNamesFromFolder();

  return {
    props: { dictFileNamesFromFolder },
  };
}


export default function ApplyBloglayout({dictFileNamesFromFolder}) {
  return (
    <DefaultLayout dictFileNamesFromFolder={dictFileNamesFromFolder}>
      <div>about</div>
    </DefaultLayout>
  )
}
