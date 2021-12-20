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
            We ensure that the materials we use are tested and the best, we give
            longer guarentee, we give the highest quallity of products, and
            finally we give you the best experience
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
            We ensure that the materials we use are tested and the best, we give{" "}
            <br />
            longer guarentee, we give the highest quallity of products, and{" "}
            <br />
            finally we give you the best experience <br />
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default Contact;
