import React from "react";
import Contactpng from "../images/Contact.png";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/con.module.css";
import hero from "../images/hebg.png";
const Contact = () => {
  return (
    <div>
      <div className={styles.Desktop}>
        <Head>
          <title>Contact Mitegra</title>
          <meta name="description" content="Work with Mitegra best plumbers" />
        </Head>

        <div className={styles.contact}>
          <Image
            src={Contactpng}
            alt={"Contact mitegra"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />

          <h1 className={styles.c1}>WORK WITH US</h1>
        </div>
      </div>
      <div className={styles.Mobile}>
        <div className={styles.heroas}>
          <Image
            src={hero}
            alt={"hero image mitegra"}
            objectFit="cover"
            objectPosition="top"
            layout="fill"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
