import React from 'react';
import Page from '../../layouts/Page';
import Image from 'next/image';




export default function About(){
    return <Page>
        <br/>
       
        <Image width={100} height={100} src='/avatar.png'/>
        <p>Tran Bao Phuc (felixtr)</p>
        <p>UI/UX enthusiast, front-end enjoyer. Sharing what I've learned and discussing ideas.</p>
    </Page>
}