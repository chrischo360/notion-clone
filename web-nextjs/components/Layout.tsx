import * as React from "react";
import Head from "next/head";
// import { Header } from "./Header";

type Props = {
    title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
    children,
    title,
    // = "This is the default title"
}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <script
                type="module"
                src="https://unpkg.com/@joeattardi/emoji-button@4.6.0/dist/index.js"
            ></script>
        </Head>
        {/* <Header /> */}
        {children}
    </div>
);

export default Layout;
