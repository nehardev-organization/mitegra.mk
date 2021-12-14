import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/heating.module.css";
import ht from "../images/hea.png";
import mh from "../images/mhbg.png";
import Image from "next/image";

import H1 from "../images/H/H1.jpg";
import H2 from "../images/H/H2.jpg";
import H3 from "../images/H/H3.jpg";
import H4 from "../images/H/H4.jpg";
import H5 from "../images/H/H5.jpg";
import H6 from "../images/H/H6.jpg";
import H7 from "../images/H/H7.jpg";
import H8 from "../images/H/H8.jpg";
import H9 from "../images/H/H9.jpg";
import H10 from "../images/H/H10.jpg";
import H11 from "../images/H/H11.jpg";
import H12 from "../images/H/H12.jpg";
import H13 from "../images/H/H13.jpg";
import H14 from "../images/H/H14.jpg";
import H15 from "../images/H/H15.jpg";
import H16 from "../images/H/H16.jpg";
import H17 from "../images/H/H17.jpg";
import H18 from "../images/H/H18.jpg";
import H19 from "../images/H/H19.jpg";
import H20 from "../images/H/H20.jpg";
import H21 from "../images/H/H21.jpg";
import H22 from "../images/H/H22.jpg";

const Heating = () => {
  let data = [
    {
      id: 1,
      imgSrc: H1,
    },
    {
      id: 2,
      imgSrc: H2,
    },
    {
      id: 3,
      imgSrc: H3,
    },
    {
      id: 4,
      imgSrc: H4,
    },
    {
      id: 5,
      imgSrc: H5,
    },
    {
      id: 6,
      imgSrc: H6,
    },
    {
      id: 7,
      imgSrc: H7,
    },
    {
      id: 8,
      imgSrc: H8,
    },
    {
      id: 9,
      imgSrc: H9,
    },
    {
      id: 10,
      imgSrc: H10,
    },
    {
      id: 11,
      imgSrc: H11,
    },
    {
      id: 12,
      imgSrc: H12,
    },
    {
      id: 13,
      imgSrc: H13,
    },
    {
      id: 14,
      imgSrc: H14,
    },
    {
      id: 15,
      imgSrc: H15,
    },
    {
      id: 16,
      imgSrc: H16,
    },
    {
      id: 17,
      imgSrc: H17,
    },
    {
      id: 18,
      imgSrc: H18,
    },
    {
      id: 19,
      imgSrc: H19,
    },
    {
      id: 20,
      imgSrc: H20,
    },
    {
      id: 21,
      imgSrc: H21,
    },
    {
      id: 22,
      imgSrc: H22,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
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
            EXPERT <span className={styles.head2}> HEATING SERVICES</span>
          </span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            {" "}
            We’ve provided high-quality heating services to residential and
            commercial customers. Our knowledgeable heating engineers have built
            up extensive experience with jobs of all types and sizes, providing
            effective solutions at a competitive price – without the need for an
            ongoing contract or call out charge. As heating experts, all our
            work is completed safely, efficiently, and professionally, keeping
            disruption to a minimum and taking the hassle out of addressing
            issues.
          </span>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
      </div>

      <div className={styles.Mobile}>
        <div className={styles.mh}>
          <Image
            src={mh}
            alt={"plumbing plumber"}
            objectFit="cover"
            objectPosition="top"
            blurDataURL="data:..."
            placeholder="blur"
            layout="fill"
          />

          <span className={styles.mh1}> EXPERT HEATING SERVICES</span>
          <h1 className={styles.mh2}>
            We’ve provided high-quality heating services to residential and{" "}
            <br />
            commercial customers. Our knowledgeable heating engineers have built{" "}
            <br />
            up extensive experience with jobs of all types and sizes, providing{" "}
            <br />
            effective solutions at a competitive price – without the need for an{" "}
            <br />
            ongoing contract or call out charge. As heating experts, all our{" "}
            <br />
            work is completed safely, efficiently, and professionally, keeping{" "}
            <br />
            disruption to a minimum and taking the hassle out of addressing{" "}
            <br />
            issues.
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
      <div className={`${model ? styles.modelOpen : ""} ${styles.model}`}>
        {tempimgSrc
          ? [
              <Image
                src={tempimgSrc}
                className={styles.img}
                alt="heating"
                width={600}
                height={600}
                objectFit="cover"
                objectPosition="top"
                placeholder="blur"
              />,
            ]
          : null}
        <svg
          onClick={() => setModel(false)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4.99007 3.99018C4.79114 3.99023 4.59674 4.04961 4.43173 4.16073C4.26672 4.27184 4.1386 4.42964 4.06374 4.61395C3.98889 4.79826 3.9707 5.00071 4.0115 5.19542C4.05231 5.39012 4.15025 5.56823 4.29281 5.70698L10.5858 11.9999L4.29281 18.2929C4.19684 18.3851 4.12021 18.4954 4.06743 18.6176C4.01464 18.7397 3.98676 18.8711 3.9854 19.0042C3.98405 19.1372 4.00926 19.2692 4.05954 19.3924C4.10983 19.5155 4.1842 19.6274 4.27827 19.7215C4.37235 19.8156 4.48426 19.89 4.60743 19.9402C4.73061 19.9905 4.86259 20.0157 4.99563 20.0144C5.12867 20.013 5.2601 19.9851 5.38223 19.9324C5.50436 19.8796 5.61473 19.803 5.70687 19.707L11.9998 13.414L18.2928 19.707C18.385 19.803 18.4953 19.8796 18.6175 19.9324C18.7396 19.9851 18.871 20.013 19.0041 20.0144C19.1371 20.0157 19.2691 19.9905 19.3922 19.9402C19.5154 19.89 19.6273 19.8156 19.7214 19.7215C19.8155 19.6274 19.8899 19.5155 19.9401 19.3924C19.9904 19.2692 20.0156 19.1372 20.0143 19.0042C20.0129 18.8711 19.985 18.7397 19.9323 18.6176C19.8795 18.4954 19.8028 18.3851 19.7069 18.2929L13.4139 11.9999L19.7069 5.70698C19.8514 5.56652 19.9501 5.38567 19.99 5.18815C20.03 4.99063 20.0093 4.78565 19.9308 4.60007C19.8523 4.41448 19.7195 4.25695 19.5499 4.14812C19.3803 4.03929 19.1817 3.98424 18.9803 3.99018C18.7205 3.99792 18.4739 4.1065 18.2928 4.29292L11.9998 10.5859L5.70687 4.29292C5.61368 4.19712 5.50224 4.12098 5.37912 4.06898C5.25601 4.01698 5.12372 3.99019 4.99007 3.99018Z"
            fill="#0067FF"
          />
        </svg>
      </div>
      <div className={styles.gallery}>
        {data.map((item, imgSrc) => (
          <div
            className={styles.pics}
            key={imgSrc}
            onClick={() => getImg(item.imgSrc)}
          >
            <Image
              src={item.imgSrc}
              alt="heating"
              width={400}
              height={400}
              objectFit="cover"
              objectPosition="top"
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Heating;
