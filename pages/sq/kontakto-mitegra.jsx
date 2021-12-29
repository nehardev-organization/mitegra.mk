import React from "react";
import Contactpng from "/images/Contact.png";
import Head from "next/head";
import Image from "next/image";
import styles from "/styles/con.module.css";
import hero from "/images/hebg.png";
const Contact = () => {
  return (
    <div>
      <Head>
        <title>kontakto mitegra</title>
        <meta
          name="description"
          content="Ekipi ynë i ekspertëve ofron mbështetjen profesionale për mirëmbajtjen dhe instalimin që ju dhe prona juaj kërkoni. Ne jemi specialistë të hidraulikës, ngrohjes dhe kullimit."
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
          <span className={styles.head2}> PSE NE?</span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            Ne sigurojmë që materialet që përdorim të jenë të testuara dhe të
            japim më të mirën garanci më të gjatë, ne japim cilësinë më të lartë
            të produkteve, dhe më në fund ne ju ofrojmë përvojën më të mirë
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

          <span className={styles.mh1}> PSE NE?</span>
          <h1 className={styles.mh2}>
            Ne sigurojmë që materialet që përdorim të jenë të testuara dhe të <br />
            japim më të mirën garanci më të gjatë, ne japim cilësinë më të lartë <br />
            të produkteve, dhe më në fund ne ju ofrojmë përvojën më të mirë <br />
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default Contact;
