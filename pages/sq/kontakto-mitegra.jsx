import React from "react";
import Contactpng from "/images/Contact.png";
import Head from "next/head";
import Image from "next/image";
import styles from "./styles/con1.module.css";
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
            Ne jemi një kompani që monitoron vazhdimisht zhvillimin e zgjidhjeve
            të reja dhe teknologjitë, si dhe standardet dhe tendencat botërore
            që zbaton në punën e tyre të përditshme. Përvoja e mëparshme e
            menaxhimi, i fituar gjatë 14 viteve të fundit në disa nga kompanitë
            lider në Itali, i lejon kompanisë të e specializuar në projektimin
            dhe ekzekutimin e plotë teknike zgjidhje dhe mirëmbajtje instalimi.
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
            Ne jemi një kompani që monitoron vazhdimisht zhvillimin e zgjidhjeve{" "}
            <br />
            të reja dhe teknologjitë, si dhe standardet dhe tendencat botërore
            <br />
            që zbaton në punën e tyre të përditshme. Përvoja e mëparshme e<br />
            menaxhimi, i fituar gjatë 14 viteve të fundit në disa nga kompanitë
            <br />
            lider në Itali, i lejon kompanisë të e specializuar në projektimin
            <br />
            dhe ekzekutimin e plotë teknike zgjidhje dhe mirëmbajtje instalimi.
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default Contact;
