import Link from "next/link"
import { styled } from "stiches.config";
import { RiArrow, RiArrowRightFill, RiArrowRightLine } from 'react-icons/ri'




const IconButton = styled(`span`,{
    display:'inline-flex',
    flexDirection:'row',
    alignItems:'center',
    width:"auto",
    color:"$gray10",
    // background: '$gray3',
    borderRadius:8,
    transition: '0.6s ease all',
    fontWeight:300,
    // border: '1px solid $mauve5',
    fontSize:'x-small',
    // '&:hover': {
    //     transition: '0.6s ease all',
    //     transform: 'translate(5px, 0px)',

    // },
    opacity:0

})

const Title = styled('a', {
    // margin:0,
    textDecoration:"none",
    fontSize:'small',
    color: '$gray12',
    fontWeight:300,
    transition:"0.46s ease all",

})


const Description = styled('p', {
    margin:0,
    marginTop:'5px',
    marginBottom:'0px',
    fontSize:"small",
    color: '$gray11',
    fontWeight:300,
    transition:"0.46s ease all",
})

const Date = styled('p', {
    marginTop:0,
    fontSize:"smaller",
    color: '$gray11',
    fontWeight:300,
    transition:"0.46s ease all",
})


const PostItemContainer = styled(`div`, {
    padding:'0.8em',
    marginLeft:'-0.8em',
    borderRadius:12,
    marginTop:5,
    display: 'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    transition:"0.6s ease",
    border: '1px solid transparent',

    '&:hover':{
        background: '$grayA2',
        border: '1px solid $mauve4',
        userSelect:"none",
        cursor:"default",

        [`${Title}`]: {
            color: '$text'
        },

        [`${IconButton}`]: {
            transition:"0.4s ease all",
            visibility:"visible",
           opacity: 1
        }
    }
    
})


export default function PostItem({ frontMatter, slug, readTime }) {

    return <PostItemContainer>
        {/* <div style={{ width: 100, }}>
            <p style={{ marginTop:5,  }}>{frontMatter.date}</p>
        </div> */}
        <div style={{ flex:1 }}>
        {/* <Date >{frontMatter.date}</Date> */}
            <Link passHref href={slug}>
                <Title >{frontMatter.title}</Title>
            </Link>
            
            <Description >{frontMatter.description}</Description>
            <Link passHref href={slug}>
                <IconButton >
                    <span style={{ marginRight: '5px', }}> {readTime + 1} mins read </span> <RiArrowRightLine />
                </IconButton>
            </Link>
        </div>
    </PostItemContainer >
}