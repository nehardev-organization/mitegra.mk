import React from "react";
import Head from "next/head";
import styles from "/styles/about.module.css";
import Image from "next/image";
import Contactpng from "/images/Contact.png";

import hero from "/images/hebg.png";

const about = () => {
  return (
    <div>
      <Head>
        <title>kontakto mitegra</title>
        <meta name="description" content="reth mitegres" />
      </Head>
      <div className={styles.Desktop}>
        <div className={styles.plumber}>
          <Image
            src={Contactpng}
            alt={"mitegra hero image"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />

          <h1 className={styles.ps1}>за-митегра</h1>
        </div>
        <div className={styles.text}>
          <span className={styles.head1}>
            МИТЕГРА <span className={styles.head2}>ТЕХНОЛОШКИ СИСТЕМ</span>
          </span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            {" "}
            Технолошкиот систем Mitegra е една компанија која е позната
            хидраулична за hidraulik, централна централна, banjo, kondicioner,
            ventilim, Ne ju тековни натпревари со висока менаџрит. системот е да
            Им помагаме и ги поддржуваме нашите просперираат duke u më многу
            производи, со ефективни, моќни работи ме памет опции е достапни
            kudo. Ky synim е и yni заkushtim si një бизнис бизниси војвода еден
            улога конструктив за оваа индустрија и бизнис во вашиот.
          </span>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
      </div>

      <div className={styles.Mobile}>
        <div className={styles.mp}>
          <Image
            src={hero}
            alt={"Mitegra hero image"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />

          <span className={styles.mp1}>МИТЕГРА ТЕХНОЛОГСКИ СИСТЕМ</span>
          <h1 className={styles.mp2}>
            Mitegra Technology System е една компанија која е позната hidraulike
            për <br />
            hidraulik, централно, banjo, kondicioner, ventilim, Ne ju <br />
            тековни натпревари со висока менаџрит. службениот систем е да <br />
            им помагаат и сите тие просперираат војвода се <br />
            многу производи, ме ефективни, моќни работи ме памет <br />
            опции е достапни kudo. Ky synim е и yni përkushtim si një <br />
            бизнис бизниси војвода една улога конструктивна за оваа <br />
            индустрија и бизнис во вашиот.
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default about;
