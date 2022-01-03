import React from "react";
import Contactpng from "/images/Contact.png";
import Head from "next/head";
import Image from "next/image";
import styles from "/styles/con.module.css";
import hero from "/images/hebg.png";
const Contact = () => {
  return (
    <div>
      <Head>
        <title>best Heating Services in North macedonia plumbing</title>
        <meta
          name="description"
          content="You know when you need heating but you cant find the right guy, Bill had the same problem, he asked his friends and they told him about mitegra, bill said that he will only use mitegra from now on"
        />
      </Head>
      <div className={styles.Desktop}>
        <div className={styles.plumber}>
          <Image
            src={hero}
            alt={"MItegra hero "}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />
        </div>
        <div className={styles.text}>
          <span className={styles.head2}> ЗОШТО НАС?</span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            Се грижиме дека материјалите што ги користиме се тестирани и
            најдоброто, го даваме подолга гаранција, даваме највисок квалитет на
            производи, и конечно ви го даваме најдоброто искуство
          </span>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
      </div>

      <div className={styles.Mobile}>
        <div className={styles.mh}>
          <Image
            src={hero}
            alt={"Mitegra hero"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />

          <span className={styles.mh1}> ЗОШТО НАС?</span>
          <h1 className={styles.mh2}>
            Обезбедуваме дека материјалите што ги користиме се тестирани и
            најдоброто, даваме <br />
            подолга гаранција, даваме највисок квалитет на производи и <br />
            конечно ви го даваме најдоброто искуство <br />
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default Contact;
