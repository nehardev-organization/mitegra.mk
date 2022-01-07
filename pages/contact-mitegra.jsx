import React from "react";
import Contactpng from "../images/Contact.png";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/con.module.css";
import hero from "../images/hebg.png";
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
          <span className={styles.head2}> WHY US?</span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            We are a company that constantly monitors the development of new
            solutions and technologies, as well as world standards and trends it
            implements in their daily work. Previous experience of management,
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
        <div className={styles.mh}>
          <Image
            src={hero}
            alt={"Mitegra hero"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />

          <span className={styles.mh1}> WHY US?</span>
          <h1 className={styles.mh2}>
            We are a company that constantly monitors the development of new{" "}
            <br />
            solutions and technologies, as well as world standards and trends we{" "}
            <br />
            implement it on our daily work. Previous experience of management,
            <br />
            acquired over the past 14 years in some from leading companies in
            <br />
            Italy, allows the company to specializes in the design and execution
            <br />
            of complete technical solutions and installation maintenance.
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default Contact;
