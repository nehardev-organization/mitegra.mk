import React from "react";
import Head from "next/head";
import styles from "../styles/Plumber.module.css";
import ve from "../images/ve.png";
import Image from "next/image";
const Ventilation = () => {
  return (
    <div>
      <Head>
        <title>Best Ventilation In North Macedonia Debar</title>
        <meta
          name="description"
          content="you know when you need Air conditioning and cant find a good service, well bill had the same problem, bill went from store to store until he found us, he is very satisfied"
        />
      </Head>
      <div className={styles.plumber}>
        <Image
          src={ve}
          alt={"plumbing plumber"}
          objectFit="cover"
          objectPosition="top"
          blurDataURL="data:..."
          placeholder="blur"
          layout="fill"
        />
        <h1 className={styles.ps1}>VENTILATION</h1>
      </div>
      <div className={styles.text}>
        <span className={styles.head1}>
          EXPERT <span className={styles.head2}>VENTILATION</span>
        </span>
      </div>
      <div className={styles.span}>
        <span className={styles.span1}>
          {" "}
          We’ve provided high-quality air conditioning services to residential
          and commercial customers. Our knowledgeable engineers have built up
          extensive experience with jobs of all types and sizes, providing
          effective solutions at a competitive price – without the need for an
          ongoing contract or call out charge. all our work is completed safely,
          efficiently, and professionally, keeping disruption to a minimum and
          taking the hassle out of addressing issues.
        </span>
      </div>
      <div className={styles.spacer}>
        <span></span>
      </div>
    </div>
  );
};

export default Ventilation;
