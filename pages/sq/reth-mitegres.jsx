import React from "react";
import Head from "next/head";
import styles from "./styles/about1.module.css";
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

          <h1 className={styles.ps1}>Reth nesh</h1>
        </div>
        <div className={styles.text}>
          <span className={styles.head1}>
            MITEGRA <span className={styles.head2}>TECHNOLOGY SYSTEM</span>
          </span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            {" "}
            Mitegra technology system është një kompani e njohur hidraulike për
            hidraulike, ngrohje qendrore, banjo, kondicioner, ventilacija, Ne ju
            konkurse aktuale me menaxhment të lartë. sistemi është për të
            ndihmuar dhe mbështetur të prosperuarit tanë duke marrë më shumë
            Produktet, me gjëra efektive dhe të fuqishme në mendjen time janë të
            disponueshme faleminderit. Ky synim është edhe angazhimi ynë si
            lider i biznesit të biznesit rol konstruktiv për këtë industri dhe
            biznes në tuaj.
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

          <span className={styles.mp1}> MITEGRA TECHNOLOGY SYSTEM</span>
          <h1 className={styles.mp2}>
            Mitegra technology system është një kompani e njohur hidraulike për{" "}
            <br />
            hidraulike, ngrohje qendrore, banjo, kondicioner, ventilacija, Ne ju
            <br />
            konkurse aktuale me menaxhment të lartë. sistemi është për të
            <br />
            ndihmuar dhe mbështetur të prosperuarit tanë duke marrë më shumë
            <br />
            Produktet, me gjëra efektive dhe të fuqishme në mendjen time janë të
            <br />
            disponueshme faleminderit. Ky synim është edhe angazhimi ynë si
            <br />
            lider i biznesit të biznesit rol konstruktiv për këtë industri dhe
            <br />
            biznes në tuaj.
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default about;
