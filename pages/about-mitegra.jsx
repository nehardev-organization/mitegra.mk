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
            We are a company that constantly monitors the development of new
            solutions and technologies, as well as world standards and trends we
            implement it on our daily work. Previous experience of management,
            acquired over the past 14 years in some from leading companies in
            Italy, allows the company to specializes in the design and execution
            of complete technical solutions and installation maintenance.
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
            We are a company that constantly monitors the development of new{" "}
            solutions and technologies, as well as world standards and trends we{" "}
            implement it on our daily work. Previous experience of management,{" "}
            acquired over the past 14 years in some from leading companies in{" "}
            Italy, allows the company to specializes in the design and execution{" "}
            of complete technical solutions and installation maintenance.
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default about;
