import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import hero from "../images/hero.png"
import plumber from "../images/plumber.png"
import Heating from "../images/Heating.png"
import airCon from "../images/airCon.png"
import bathroom from "../images/bathroom.png"
import Link from 'next/link'
export default function Home() {
  return (
    
    <div className={styles.HomePage}>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-3D8RTZLS4T"></script>
      <Head>
        <title>Mitegra best plumbers in north macedonia</title>
        <meta name="description" content="You know when you have a leak and you have to wait hours to get it fixed, Bill had the same issue but he called Mitegra and he got it fixed in 10 minutes!"/>
        <meta name="description" content="You know when you need heating but you cant find the right guy, Bill had the same problem, he asked his friends and they told him about mitegra, bill said that he will only use mitegra from now on"/>
        <meta name="description" content="you know when you need Air conditioning and cant find a good service, well bill had the same problem, bill went from store to store until he found us, he is very satisfied"/>
        <meta name="description" content="you know when you need a functional bathroom, bill had the same issue, he looked online on facebook and all of the internet until he found us, he said its the best bathroom he ever saw,"/>
      </Head>
      <div className={styles.Hero}>
        <Image 
        className={styles.heroImg}
        alt={'hero image mitegra'}
        src={hero}
        priority
        width={1920}
        height={600}
        layout="responsive"
             />
         <h1 className={styles.h1}>Mitegra, from plumbing to heating</h1>
     <Link href="/contact-mitegra">
        <button  className={styles.heroButton}>Work with us</button> 
        </Link>
        <Image
      src={plumber}
      alt={'plumbing plumber'}
      width={1920}
      height={600}
      blurDataURL="data:..."
      placeholder="blur"
      layout="responsive"
      className={styles.Pimg}
      />

      <h1 className={styles.Ph1}>PLUMBING</h1>
      <h2 className={styles.Ph2}>Our approved plumbers can help with all your plumbing requirements, providing an efficient response to issues such as leaks, blockages, and broken toilets. Drawing on their extensive hands-on experience, our team can also carry out a wide range of professional plumbing installation services, covering everything from domestic appliances through to specialist thermal stores and Saniflo macerators.</h2>
      <Link href="/best-Plumber-in-North-macedonia-plumbing">
      <button className={styles.pButton}>PLUMBING</button>
      </Link>
      <Image
      src={Heating}
      alt={'plumbing plumber'}
      width={1920}
      height={600}
      blurDataURL="data:..."
      layout="responsive"
      placeholder="blur"
      
      />
      <h1 className={styles.hH1}>HEATING</h1>
      <h2 className={styles.hH2}>We provide specialist heating services that <br /> promote a number of alternative heating <br /> options. Our engineers can introduce you to <br /> the benefits of underfloor heating and heat <br /> interface units, helping you to make an <br /> informed decision on whether they’re a good <br /> fit for your property. We also carry out <br /> professional buyer’s reports and <br /> powerflushing services that focus on the <br />  health of your central heating system.</h2>
      <Link href="/best-central-heating-north-macedonia-heating">
      <button className={styles.hButton}>HEATING</button>
      </Link>
      <Image
      src={airCon}
      alt={'air condition image'}
      width={1920}
      height={600}
      blurDataURL="data:..."
      placeholder="blur"
      layout="responsive"
      />
      <h1 className={styles.aH1}>AIR CONDITIONING</h1>
      <h2 className={styles.aH2}>We can offer a complete Design, Manufacture <br /> and Install package on all manner of split air <br /> conditioning systems and ducted air handling <br /> units. The wall mounted split systems are designed <br /> to air condition small and medium size areas and <br /> are ideal for office shops or domestic applications, <br /> They are generally operated by a remote infra-red control.</h2>
      <Link href="/best-air-condition-north-macedonia-debar">
      <button className={styles.aButton}>AIR CONDITION</button>
      </Link>
      <Image 
      src={bathroom}
      alt={'bathroom installation'}
      width={1920}
      height={600}
      blurDataURL="data:..."
      placeholder="blur"
      layout=""
      />
       <h1 className={styles.bH1}>BATHROOM</h1>
      <h2 className={styles.bH2}>As experienced plumbers, we can help to design, <br /> install, repair, and replace bathrooms, putting our <br /> skills to good use as part of your home improvement <br /> project. We’ve successfully worked on bathrooms of <br /> all sizes within a wide range of properties and will be <br /> able to provide any expert assistance you require. <br /> We are prepared to handle any issues or challenges <br /> we encounter.</h2>
      <Link href="/best-bathroom-installation-north-macedonia-debar">
      <button className={styles.bButton}>BATHROOM</button>
      </Link>
     </div>
    </div>
  )
}
