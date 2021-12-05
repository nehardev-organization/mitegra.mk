import React from "react";
import Head from "next/head";
import styles from "../styles/Plumber.module.css";
import Image from "next/image";
import plumber from "../images/pl.png";
const Plumber = () => {
  return (
    <div>
      <Head>
        <title>best Plumber in North macedonia plumbing</title>
        <meta
          name="description"
          content="You know when you have a leak and you have to wait hours to get it fixed, Bill had the same issue but he called Mitegra and he got it fixed in 10 minutes!"
        />
      </Head>
      <div className={styles.plumber}>
        <Image
          src={plumber}
          alt={"plumbing plumber"}
          objectFit="cover"
          objectPosition="top"
          blurDataURL="data:..."
          placeholder="blur"
          layout="fill"
        />
        <h1 className={styles.ps1}> PLUMBING SERVICES</h1>
      </div>
      <div className={styles.text}>
        <span className={styles.head1}>
          EXPERT <span className={styles.head2}>PLUMBING SERVICES</span>
        </span>
      </div>
      <div className={styles.span}>
        <span className={styles.span1}>
          {" "}
          we’ve provided a wide range of professional and efficient plumbing
          services. Our expert team of approved plumbers has built up extensive
          hands-on experience with residential and commercial jobs of all types
          and sizes, providing high-quality services at an affordable price and
          without a call out charge. As professionals, we take the hassle out of
          plumbing issues and home improvement projects, working efficiently to
          minimise disruption and save you time and money. No matter the nature
          of your project, we have the skills, knowledge, and expertise to
          achieve the result that you and your property require.
        </span>
      </div>
      <div className={styles.spacer}>
        <span></span>
      </div>
    </div>
  );
};

export default Plumber;
