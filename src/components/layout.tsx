import Head from "next/head";
import {PropsWithChildren } from "react";

export interface Props {
    title?:string
}


export const Layout = ({title, children}: PropsWithChildren<Props>) => {
    return(
        <>
            <Head>
                <title>{`${title}`? `${title}`:''} | My job board</title>
            </Head>
            <header>
                <h1>My Header</h1>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}