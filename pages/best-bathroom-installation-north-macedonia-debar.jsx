import React from "react";
import Head from "next/head";
import styles from "../styles/bathroom.module.css";
import bt from "../images/bat.png";
import mb from "../images/mbbg.png";
import Image from "next/image";

const Bathroom = () => {
  return (
    <div>
      <Head>
        <title>Best Bathroom Installation North Macedonia Debar</title>
        <meta
          name="description"
          content="you know when you need a functional bathroom, bill had the same issue, he looked online on facebook and all of the internet until he found us, he said its the best bathroom he ever saw,"
        />
      </Head>
      <div className={styles.Desktop}>
        <div className={styles.plumber}>
          <Image
            src={bt}
            alt={"plumbing plumber"}
            objectFit="cover"
            objectPosition="top"
            blurDataURL="data:..."
            placeholder="blur"
            layout="fill"
          />

          <h1 className={styles.ps1}> BATHROOM INSTALLATION</h1>
        </div>
        <div className={styles.text}>
          <span className={styles.head1}>
            EXPERT <span className={styles.head2}> BATHROOM INSTALLATION</span>
          </span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            Our experienced, approved plumbers provide a quick response to
            bathroom issues and enquiries. Whether you’re planning a full
            bathroom renovation project or you require expert repair work to
            deal with a leak or blockage, our team has the skills and knowledge
            to help. Our plumbers handle everything, taking the hassle out of
            dealing with bathroom installation or maintenance and providing an
            efficient, high-quality service without a call out charge or ongoing
            contract.
          </span>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
      </div>

      <div className={styles.Mobile}>
        <div className={styles.mb}>
          <Image
            src={mb}
            alt={"plumbing plumber"}
            objectFit="cover"
            objectPosition="top"
            blurDataURL="data:..."
            placeholder="blur"
            layout="fill"
          />

          <span className={styles.mb1}> EXPERT BATHROOM INSTALLATION </span>
          <h1 className={styles.mb2}>
            Our experienced, approved plumbers provide a quick response to{" "}
            <br />
            bathroom issues and enquiries. Whether you’re planning a full <br />
            bathroom renovation project or you require expert repair work to{" "}
            <br />
            deal with a leak or blockage, our team has the skills and knowledge{" "}
            <br />
            to help. Our plumbers handle everything, taking the hassle out of{" "}
            <br />
            dealing with bathroom installation or maintenance and providing an{" "}
            <br />
            efficient, high-quality service without a call out charge or ongoing{" "}
            <br />
            contract.
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default Bathroom;
