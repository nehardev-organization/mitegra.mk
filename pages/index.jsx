import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import hero from "../images/hebg.png"
import plumber from "../images/pbg.png"
import Heating from "../images/hbg.png"
import airCon from "../images/abg.png"
import bathroom from "../images/bbg.png"
import ventilation from "../images/vbg.png"
import mp from '../images/mpbg.png'
import mh from '../images/mhbg.png'
import ma from '../images/mabg.png'
import mb from '../images/mbbg.png'
import mv from '../images/mvbg.png'
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
        <div className={styles.imc1}> 
        <Image 
        className={styles.i1}
        alt={'hero image mitegra'}
        src={hero}
        priority
        layout="fill"
        blurDataURL="data:..."
        placeholder="blur"
             /></div>
          <h1 className={styles.h1}>Mitegra, from plumbing to heating</h1>
     <Link href="/contact-mitegra">
        <button  className={styles.heroButton}>Work with us</button> 
        </Link>
        <div className={styles.Desktop}>
         
        <div className={styles.imc2}>
        <Image
      src={plumber}
      className={styles.i2}
      alt={'plumbing plumber'}
      blurDataURL="data:..."
      placeholder="blur"
      layout="fill"
      />
</div>
      <h1 className={styles.Ph1}>PLUMBING</h1>
      <h2 className={styles.Ph2}>Our approved plumbers can help with all your plumbing <br /> requirements, providing an efficient response to issues such <br /> as leaks, blockages, and broken toilets. Drawing on their <br /> extensive hands-on experience, our team can also carry out <br /> a wide range of professional plumbing installation services, <br /> covering everything from domestic appliances through to <br /> specialist thermal stores and Saniflo macerators.</h2>
      <Link href="/best-Plumber-in-North-macedonia-plumbing">
      <button className={styles.pButton}>PLUMBING</button>
       </Link>
       <div className={styles.imc3}>
       <Image
      src={Heating}
      className={styles.i3}
      alt={'plumbing plumber'}
      blurDataURL="data:..."
      placeholder="blur"
      layout="fill"
      /></div>
      <h1 className={styles.hH1}>HEATING</h1>
      <h2 className={styles.hH2}>We provide specialist heating services that <br /> promote a number of alternative heating <br /> options. Our engineers can introduce you to <br /> the benefits of underfloor heating and heat <br /> interface units, helping you to make an <br /> informed decision on whether they’re a good <br /> fit for your property. We also carry out <br /> professional buyer’s reports and <br /> powerflushing services that focus on the <br />  health of your central heating system.</h2>
      <Link href="/best-central-heating-north-macedonia-heating">
      <button className={styles.hButton}>HEATING</button>
      </Link> 
      
     <div className={styles.imc4}>
     <Image
     src={airCon}
    className={styles.i4}
    alt={'plumbing plumber'}
    blurDataURL="data:..."
    placeholder="blur"
    layout="fill"
    /></div>
      <h1 className={styles.aH1}>AIR CONDITIONING</h1>
      <h2 className={styles.aH2}>We can offer a complete Design, Manufacture <br /> and Install package on all manner of split air <br /> conditioning systems and ducted air handling <br /> units. The wall mounted split systems are designed <br /> to air condition small and medium size areas and <br /> are ideal for office shops or domestic applications, <br /> They are generally operated by a remote infra-red control.</h2>
      <Link href="/best-air-condition-north-macedonia-debar">
      <button className={styles.aButton}>AIR CONDITION</button>
      </Link>
      <div className={styles.imc5}>
     <Image
     src={bathroom}
    className={styles.i5}
    alt={'plumbing plumber'}
    blurDataURL="data:..."
    placeholder="blur"
    layout="fill"
    /></div>
       <h1 className={styles.bH1}>BATHROOM</h1>
      <h2 className={styles.bH2}>As experienced plumbers, we can help to design, <br /> install, repair, and replace bathrooms, putting our <br /> skills to good use as part of your home improvement <br /> project. We’ve successfully worked on bathrooms of <br /> all sizes within a wide range of properties and will be <br /> able to provide any expert assistance you require. <br /> We are prepared to handle any issues or challenges <br /> we encounter.</h2>
      <Link href="/best-bathroom-installation-north-macedonia-debar">
      <button className={styles.bButton}>BATHROOM</button>
      </Link>  
      <div className={styles.imc6}>
      <Image
     src={ventilation}
    className={styles.i5}
    alt={'plumbing plumber'}
    blurDataURL="data:..."
    placeholder="blur"
    layout="fill"
    /></div>
     <h1 className={styles.bv1}>VENTILATION</h1>
      <h2 className={styles.bv2}> we can help to design, install, repair, and replace <br /> Air Conditions, putting our skills to good use as <br /> part of your  improvement project. We’ve <br /> successfully  worked on Air conditions of all sizes <br />within a wide  range of properties and will be able <br />to provide  any expert  assistance you require. <br />We are prepared  to handle any issues or <br /> challenges we encounter.</h2>
      <Link href="/best-ventilation-installation-north-macedonia-debar">
      <button className={styles.vButton}>VENTILATION</button>
      </Link>  
         </div>
     
       <div className={styles.mb1}>
      <Image
    className={styles.mi1}
    src={mp}
    alt={'plumbing plumber'}
    blurDataURL="data:..."
    placeholder="blur"
    layout="fill"
    />
    </div> 
    <div className={styles.plumber}>
    <h1 className={styles.mp1}>test</h1>
    </div>
    
    </div>
  )
}
