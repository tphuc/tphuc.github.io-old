import Head from 'next/head'
import {styled} from 'stiches.config'
import Nav from '../components/Nav'

const PageContainer = styled(`main`, {
    display: 'flex',
    'flex-direction':'column',
    'align-items':'center',
    'min-height':"100vh",
    paddingTop:"20px",
    '@bp3': {
        padding:"5%"
    }
    
})

const Divider = styled(`main`,{
    'margin-top':"1em",
    maxWidth:69,
    'border': "0.5px solid #dfdfdf"
})

const defaultMeta = {
    title:'FelixTr',
    description: "Tran Bao Phuc's personal website. Write about tech and the 🌟.",
}

const Page = ({ meta, children }) => {
    return <>
        <Head>
            <title>{meta?.title || defaultMeta.title}</title>
            <meta name="author" content="Felix Tran" />
            <meta name="description" ccontent={meta?.description || defaultMeta.description} />
            <meta property="og:description" content={meta?.description || defaultMeta.description} />
            <meta property="og:image" content={meta?.image} key="ogimage" />
        </Head>

        <PageContainer>
            <div style={{ position: "relative", flex: 1, maxWidth: 'min(600px, 90vw)' }}>
                    <Nav></Nav>
                    {/* <Divider /> */}
                    <br/>
                    <div style={{ position:"relative", minWidth: "max(600px, 100vw)" }}/>
                {children}
            </div>
            <br/>
        </PageContainer>
    </>
}
export default Page