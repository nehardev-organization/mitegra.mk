import React from "react";
import Contactpng from "../images/Contact.png";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/con.module.css";
const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Mitegra</title>
        <meta name="description" content="Work with Mitegra best plumbers" />
      </Head>

      <div className={styles.contact}>
        <Image
          src={Contactpng}
          alt={"plumbing plumber"}
          objectFit="cover"
          objectPosition="top"
          blurDataURL="data:..."
          placeholder="blur"
          layout="fill"
        />

        <h1 className={styles.c1}>WORK WITH US</h1>
      </div>
    </div>
  );
};

export default Contact;
