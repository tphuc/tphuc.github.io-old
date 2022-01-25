import React from 'react';
import Page from '../../layouts/Page';
import Image from 'next/image';




export default function About(){
    return <Page meta={{
        title:'felixtr',
        description: "My personal website 🪐.",
        image: 'images/avatar.png'
    }}>
        <br/>
       
        <Image width={100} height={100} src='images/avatar.png'/>
        <p>Tran Bao Phuc (felixtr)</p>
        <p>UI/UX enthusiast, front-end enjoyer. This blog to share what I&apos;ve learned and discuss new ideas.</p>
    </Page>
}