import React from "react";
import Head from "next/head";
import styles from "/styles/about.module.css";
import Image from "next/image";
import Contactpng from "/images/Contact.png";

import hero from "/images/hebg.png";

const about = () => {
  return (
    <div>
      <Head>
        <title>kontakto mitegra</title>
        <meta name="description" content="reth mitegres" />
      </Head>
      <div className={styles.Desktop}>
        <div className={styles.plumber}>
          <Image
            src={Contactpng}
            alt={"mitegra hero image"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />

          <h1 className={styles.ps1}>Reth nesh</h1>
        </div>
        <div className={styles.text}>
          <span className={styles.head1}>
            MITEGRA <span className={styles.head2}>TECHNOLOGY SYSTEM</span>
          </span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            {" "}
            Mitegra Technology System është një kompani e njohur hidraulike për
            hidraulik, ngrohje qendrore, banjo, kondicioner, ventilim, Ne ju
            ofrojmë trajnime me cilësi të lartë mjeshtrit. Qëllimi ynë është të
            ndihmojmë klientët dhe anëtarët tanë prosperojnë duke ofruar më
            shumë produktivitet, me kosto efektive, fuqi punëtore me mendje
            cilësore e disponueshme kudo. Ky synim është i yni përkushtim si një
            organizatë biznesi duke shërbyer një rol konstruktiv për këtë
            industri dhe biznesin tuaj.
          </span>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
      </div>

      <div className={styles.Mobile}>
        <div className={styles.mp}>
          <Image
            src={hero}
            alt={"Mitegra hero image"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />

          <span className={styles.mp1}> MITEGRA TECHNOLOGY SYSTEM</span>
          <h1 className={styles.mp2}>
            Mitegra Technology System është një kompani e njohur hidraulike për{" "}
            <br />
            hidraulik, ngrohje qendrore, banjo, kondicioner, ventilim, Ne ju{" "}
            <br />
            ofrojmë trajnime me cilësi të lartë mjeshtrit. Qëllimi ynë është të{" "}
            <br />
            ndihmojmë klientët dhe anëtarët tanë prosperojnë duke ofruar më{" "}
            <br />
            shumë produktivitet, me kosto efektive, fuqi punëtore me mendje{" "}
            <br />
            cilësore e disponueshme kudo. Ky synim është i yni përkushtim si një{" "}
            <br />
            organizatë biznesi duke shërbyer një rol konstruktiv për këtë <br />
            industri dhe biznesin tuaj.
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
    </div>
  );
};

export default about;
