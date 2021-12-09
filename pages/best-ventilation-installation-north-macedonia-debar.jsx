import React from "react";
import Head from "next/head";
import styles from "../styles/ventilation.module.css";
import ve from "../images/ve.png";
import mv from "../images/mvbg.png";
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
      <div className={styles.Desktop}>
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

          <h1 className={styles.ps1}> VENTILATION</h1>
        </div>
        <div className={styles.text}>
          <span className={styles.head1}>
            EXPERT <span className={styles.head2}> VENTILATION</span>
          </span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            we can help to design, install, repair, and replace <br /> Air
            Conditions, putting our skills to good use as <br /> part of your
            improvement project. We’ve <br /> successfully worked on Air
            conditions of all sizes <br />
            within a wide range of properties and will be able <br />
            to provide any expert assistance you require. <br />
            We are prepared to handle any issues or <br /> challenges we
            encounter.
          </span>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
      </div>

      <div className={styles.Mobile}>
        <div className={styles.mv}>
          <Image
            src={mv}
            alt={"plumbing plumber"}
            objectFit="cover"
            objectPosition="top"
            blurDataURL="data:..."
            placeholder="blur"
            layout="fill"
          />

          <span className={styles.mv1}> EXPERT VENTILATION </span>
          <h1 className={styles.mv2}>
            we can help to design, install, repair, and replace <br /> Air
            Conditions, putting our skills to good use as <br /> part of your
            improvement project. We’ve <br /> successfully worked on Air
            conditions of all sizes <br />
            within a wide range of properties and will be able <br />
            to provide any expert assistance you require. <br />
            We are prepared to handle any issues or <br /> challenges we
            encounter.
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default Ventilation;
