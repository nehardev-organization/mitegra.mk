import React from 'react'
import PlumberP from '../images/Plumber-page.png'
import Head from 'next/head'
import Styles from '../styles/Plumber.module.css'
import Image from 'next/image'
const Plumber = () => {
    return (
        <div>
            <Head>
                <title>best Plumber in North macedonia plumbing</title>
            <meta name="description" content="You know when you have a leak and you have to wait hours to get it fixed, Bill had the same issue but he called Mitegra and he got it fixed in 10 minutes!"/>
            </Head>
            <Image 
        
        alt={'hero image mitegra'}
        src={PlumberP}
        priority
        width={1920}
        height={600}
        layout="responsive"
        />
        <div className={Styles.text}>
        <span className={Styles.head1}>EXPERT <span className={Styles.head2}>PLUMBING SERVICES</span></span>
        </div>
        <div className={Styles.span}>
        <span className={Styles.span1}> we’ve provided a wide range of professional and efficient plumbing services. Our expert team of approved plumbers has built up  extensive hands-on experience with residential and commercial jobs of all types and sizes, providing high-quality services at an  affordable price and without a call out charge. As professionals, we take the hassle out of plumbing issues and home improvement  projects, working efficiently to minimise disruption and save you time and money. No matter the nature of your project, we have the skills, knowledge, and expertise to achieve the result that you and your property require.</span>
        </div>
        </div>
    )
}

export default Plumber
