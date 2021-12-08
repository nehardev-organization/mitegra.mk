import React from "react";
import Head from "next/head";
import styles from "../styles/heating.module.css";
import ar from "../images/arcon.png";
import mar from "../images/mabg.png";
import Image from "next/image";

const Air = () => {
  return (
    <div>
      <Head>
        <title>best Air Conditioners in North macedonia plumbing</title>
        <meta
          name="description"
          content="you know when you need Air conditioning and cant find a good service, well bill had the same problem, bill went from store to store until he found us, he is very satisfied"
        />
      </Head>
      <div className={styles.Desktop}>
        <div className={styles.plumber}>
          <Image
            src={ar}
            alt={"plumbing plumber"}
            objectFit="cover"
            objectPosition="top"
            blurDataURL="data:..."
            placeholder="blur"
            layout="fill"
          />

          <h1 className={styles.ps1}> AIR CONDITION</h1>
        </div>
        <div className={styles.text}>
          <span className={styles.head1}>
            EXPERT <span className={styles.head2}> AIR CONDITION</span>
          </span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            {" "}
            We’ve provided high-quality air conditioning services to residential{" "}
            and commercial customers. Our knowledgeable engineers have built up{" "}
            extensive experience with jobs of all types and sizes, providing{" "}
            effective solutions at a competitive price – without the need for an{" "}
            ongoing contract or call out charge. all our work is completed
            safely, efficiently, and professionally, keeping disruption to a
            minimum and taking the hassle out of addressing issues.
          </span>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
      </div>

      <div className={styles.Mobile}>
        <div className={styles.mp}>
          <Image
            src={mar}
            alt={"plumbing plumber"}
            objectFit="cover"
            objectPosition="top"
            blurDataURL="data:..."
            placeholder="blur"
            layout="fill"
          />

          <span className={styles.mp1}> EXPERT AIR CONDITION </span>
          <h1 className={styles.mp2}>
            We’ve provided high-quality air conditioning services to residential{" "}
            <br />
            and commercial customers. Our knowledgeable engineers have built up{" "}
            <br />
            extensive experience with jobs of all types and sizes, providing{" "}
            <br />
            effective solutions at a competitive price – without the need for an{" "}
            <br />
            ongoing contract or call out charge. all our work is completed
            safely, <br />
            efficiently, and professionally, keeping disruption to a minimum and{" "}
            <br />
            taking the hassle out of addressing issues.
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default Air;
