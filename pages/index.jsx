import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import hero from "../images/hero.png"
export default function Home() {
  return (
    <div className={styles.HomePage}>
      <Head>
        <title>mitegra best plumbers in north macedonia</title>
        <meta name="description" content="You know when you have a leak and you have to wait hours to get it fixed, Bill had the same issue but he called Mitegra and he got it fixed in 10 minutes!"/>
        <meta name="description" content="You know when you need heating but you cant find the right guy, Bill had the same problem, he asked his friends and they told him about mitegra, bill said that he will only use mitegra from now on"/>
        <meta name="description" content="you know when you need Air conditioning and cant find a good service, well bill had the same problem, bill went from store to store until he found us, he is very satisfied"/>
        <meta name="description" content="you know when you need a functional bathroom, bill had the same issue, he looked online on facebook and all of the internet until he found us, he said its the best bathroom he ever saw,"/>
      </Head>
      <div className={styles.Hero}>
        <Image className={styles.heroImg}
        alt={'hero image mitegra'}
        src={hero}
        priority
        />
        <h1 className={styles.h1}>Mitegra, from plumbing to heating</h1>
      </div>
      
    </div>
  )
}
