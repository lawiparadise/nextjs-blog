import { GetStaticProps, NextPage } from "next";

export default function BlogLayout({children, hi}) {
    const his = hi
    return (
        <div>
            <div>blog layout</div>
            <div>{his}</div>
            <main>{children}</main>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
            hi:"hizzzzzzzz"
        },
    }
}
