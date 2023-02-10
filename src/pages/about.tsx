import type { NextPage } from "next";
import {Layout} from '../components/layout'

const AboutPage: NextPage = () => {
    return (
        <>
            <Layout title="About"><h2>About</h2><p>This job board is the project created using the book</p>
                <em>Serverless Web Applications with React and Nextjs</em>
            </Layout>
        </>
    )
}

export default AboutPage