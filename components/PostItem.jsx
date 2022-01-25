import Link from "next/link"
import styled from "styled-components"
import { RiArrow, RiArrowRightFill, RiArrowRightLine  } from 'react-icons/ri'

const PostItemContainer = styled.div`
    display: flex;
    flex-direction:row;
    align-items:flex-start
`

const IconButton = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    cursor: pointer;
    transition: 0.4s ease all;
    color: #a3a2a2;
    &:hover {
        color: #222222;
        transform: translate(10px, 0px);
    }
`


export default function PostItem({ frontMatter, slug }) {

    return <PostItemContainer>

        <p style={{ margin: 5, color:'#555555' }}>{frontMatter.date}</p>

        <div style={{ paddingLeft: '1em' }}>
            <Link passHref href={slug}>
                <a style={{ margin: 0, fontSize:"2em", color:'#333333' }}>{frontMatter.title}</a>
            </Link>
            <p>{frontMatter.description}</p>
            <Link passHref href={slug}>
            <IconButton >
                <span style={{marginRight:'5px'}}>read </span> <RiArrowRightLine/>
            </IconButton>
            </Link>
        </div>
    </PostItemContainer >
}