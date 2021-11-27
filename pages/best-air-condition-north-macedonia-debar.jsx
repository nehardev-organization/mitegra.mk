import React from 'react'
import AirP from '../images/AirP.png'
import Head from 'next/head'
import Styles from '../styles/Plumber.module.css'
import Image from 'next/image'

const Air = () => {
    return (
        <div>
            
            <Head>
                <title>Best air condition North Macedonia Debar</title>
                <meta name="description" content="you know when you need Air conditioning and cant find a good service, well bill had the same problem, bill went from store to store until he found us, he is very satisfied"/>
        </Head>
            <Image 
        
        alt={'hero image mitegra'}
        src={AirP}
        priority
        width={1920}
        height={600}
        layout="responsive"
        />
        <div className={Styles.text}>
        <span className={Styles.head1}>EXPERT <span className={Styles.head2}>AIR CONDITIONING</span></span>
        </div>
        <div className={Styles.span}>
        <span className={Styles.span1}>We’ve provided high-quality air conditioning services to residential and commercial customers. Our knowledgeable  engineers have built up extensive experience with jobs of all types and sizes, providing effective solutions at a competitive price – without the need for an ongoing contract or call out charge. all our work is completed safely, efficiently, and professionally, keeping disruption to a minimum and taking the hassle out of addressing issues.</span>
        </div>
        </div>
    )
}

export default Air
