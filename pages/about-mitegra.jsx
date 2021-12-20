import React from "react";
import Head from "next/head";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Contactpng from "../images/Contact.png";

import hero from "../images/hebg.png";

const about = () => {
  return (
    <div>
      <Head>
        <title>best Plumber in North macedonia plumbing</title>
        <meta
          name="description"
          content="You know when you have a leak and you have to wait hours to get it fixed, Bill had the same issue but he called Mitegra and he got it fixed in 10 minutes!"
        />
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

          <h1 className={styles.ps1}>About us</h1>
        </div>
        <div className={styles.text}>
          <span className={styles.head1}>
            MITEGRA <span className={styles.head2}>TECHNOLOGY SYSTEM</span>
          </span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            {" "}
            Mitegra Technology System is a, a Plumbing Company that’s recognized
            for plumbing, central heating, bathroom installations,air condition,
            ventilation, We provide you with highly-trained, high-quality
            craftsmen. Our objective is to help our clients and our members
            prosper by providing the most productive, cost-effective,
            quality-minded workforce available anywhere. This objective is our
            commitment as a business organization serving a constructive role
            for this industry and your business.
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
            Mitegra Technology System is a, a Plumbing Company that’s recognized{" "}
            <br />
            for plumbing, central heating, bathroom installations,air condition,{" "}
            <br />
            ventilation, We provide you with highly-trained, high-quality <br />
            craftsmen. Our objective is to help our clients and our members{" "}
            <br />
            prosper by providing the most productive, cost-effective, <br />
            quality-minded workforce available anywhere. This objective is our{" "}
            <br />
            commitment as a business organization serving a constructive role{" "}
            <br />
            for this industry and your business. <br />
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default about;
