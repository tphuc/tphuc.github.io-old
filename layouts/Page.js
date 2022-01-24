import Head from 'next/head'
import styled from 'styled-components'
import Nav from '../components/Nav'

const PageContainer = styled.main`
    display: flex;
    flex-direction:column;
    align-items:center;
    background: #f5f5f7;
    min-height:100vh;
`

const Divider = styled.main`
    margin-top:1em;
    border: 1px solid #bfbfbf;
`


const Page = ({ meta, children }) => {
    return <>
        <Head>
            <title>{meta?.title}</title>
            <meta name="description" content={meta?.description} />
        </Head>

        <PageContainer>
            <div style={{ position: "relative", flex: 1, maxWidth: 'min(600px, 90vw)' }}>
               
                    <Nav></Nav>

                    <Divider />
                    <div style={{ position:"relative", minWidth: "max(600px, 100vw)" }}/>
                {children}
            </div>
        </PageContainer>
    </>
}
export default Page