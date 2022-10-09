import {NextPage} from "next";
import {FC, ReactNode} from "react";

// js에서 에러 뜸
interface Props {
    children: ReactNode
}

// export default function DefaultLayout({children}) { // js에서 됨1
// const DefaultLayout = ({ children }) => { // js에서 됨2
// const DefaultLayout = props => { // js에서 됨3
//     const {children} = props

// const DefaultLayout = ({ children }: Props) => { // ts에서 됨1
// const DefaultLayout: NextPage = ({children}: { children: ReactNode }) => { // ts에서 됨2
// const DefaultLayout: NextPage = ({children}: Props) => { // ts에서 됨3
export const DefaultLayout: FC<{ children: ReactNode; }> = (props) => {// ts에서 됨4 FC사용
    return (
        <div>hi children
            <div>
                {/*{children}*/}
                {props.children}
            </div>
        </div>
    )

}

export default DefaultLayout;
