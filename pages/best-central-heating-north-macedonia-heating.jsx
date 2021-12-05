import React from "react";
import Head from "next/head";
import styles from "../styles/Plumber.module.css";
import ht from "../images/hea.png";
import Image from "next/image";

const Heating = () => {
  return (
    <div>
      <Head>
        <title>Best central heating north macedonia heating</title>
        <meta
          name="description"
          content="You know when you need heating but you cant find the right guy, Bill had the same problem, he asked his friends and they told him about mitegra, bill said that he will only use mitegra from now on"
        />
      </Head>

      <div className={styles.plumber}>
        <Image
          src={ht}
          alt={"plumbing plumber"}
          objectFit="cover"
          objectPosition="top"
          blurDataURL="data:..."
          placeholder="blur"
          layout="fill"
        />
        <h1 className={styles.ps1}> HEATING SERVICES</h1>
      </div>
      <div className={styles.text}>
        <span className={styles.head1}>
          EXPERT <span className={styles.head2}>HEATING SERVICES</span>
        </span>
      </div>
      <div className={styles.span}>
        <span className={styles.span1}>
          {" "}
          We’ve provided high-quality heating services to residential and
          commercial customers. Our knowledgeable heating engineers have built
          up extensive experience with jobs of all types and sizes, providing
          effective solutions at a competitive price – without the need for an
          ongoing contract or call out charge. As heating experts, all our work
          is completed safely, efficiently, and professionally, keeping
          disruption to a minimum and taking the hassle out of addressing
          issues.
        </span>
      </div>
      <div className={styles.spacer}>
        <span></span>
      </div>
    </div>
  );
};
export default Heating;
