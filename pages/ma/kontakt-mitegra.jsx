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
            Ние сме компанија која постојано го следи развојот на нови решенија
            и технологии, како и светските стандарди и трендови ги имплементира
            во своето секојдневно работење. Претходното искуството на
            менаџментот, стекнувано низ текот на изминатите 14 години во некои
            од водечките фирми во Италија, овозможува компанијата да се
            специјализира за проектирање и изведба на комплетни технички
            решенија и одржување на инсталации.
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
            Ние сме компанија која постојано го следи развојот на нови решенија{" "}
            <br />
            и технологии, како и светските стандарди и трендови ги
            <br />
            имплементира во своето секојдневно работење. Претходното искуството
            <br />
            на менаџментот, стекнувано низ текот на годините во некои од
            <br />
            водечките фирми во Италија. овозможува компанијата да се
            специјализира за проектирање и изведба на комплетни технички
            решенија и одржување на инсталации
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default Contact;
