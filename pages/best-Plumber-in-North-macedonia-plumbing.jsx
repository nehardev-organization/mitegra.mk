import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Plumber.module.css";
import Image from "next/image";
import plumber from "../images/pl.png";
import mp from "../images/mpbg.png";
import Link from "next/link";

import P1 from "../images/P/P1.jpg";
import P2 from "../images/P/P2.jpg";
import P3 from "../images/P/P3.jpg";
import P4 from "../images/P/P4.jpg";
import P5 from "../images/P/P5.jpg";
import P6 from "../images/P/P6.jpg";
import P7 from "../images/P/P7.jpg";
import P8 from "../images/P/P8.jpg";
import P9 from "../images/P/P9.jpg";
import P10 from "../images/P/P10.jpg";
import P11 from "../images/P/P11.jpg";
import P12 from "../images/P/P12.jpg";
import P13 from "../images/P/P13.jpg";
import P14 from "../images/P/P14.jpg";
import P15 from "../images/P/P15.jpg";
import P16 from "../images/P/P17.jpg";
import P17 from "../images/P/P17.jpg";
import P18 from "../images/P/P18.jpg";
import P19 from "../images/P/P19.jpg";
import P20 from "../images/P/P20.jpg";
import P21 from "../images/P/P21.jpg";
import P22 from "../images/P/P22.jpg";
import P23 from "../images/P/P23.jpg";
import P24 from "../images/P/P24.jpg";
import P25 from "../images/P/P25.jpg";
import P26 from "../images/P/P26.jpg";
import P27 from "../images/P/P27.jpg";
import P28 from "../images/P/P28.jpg";
import P29 from "../images/P/P29.jpg";
import P30 from "../images/P/P30.jpg";
import P31 from "../images/P/P31.jpg";
import P32 from "../images/P/P32.jpg";
import P33 from "../images/P/P33.jpg";
import P34 from "../images/P/P34.jpg";
import P35 from "../images/P/P35.jpg";
import P36 from "../images/P/P36.jpg";
import P37 from "../images/P/P37.jpg";
import P38 from "../images/P/P38.jpg";
import P39 from "../images/P/P39.jpg";
import P40 from "../images/P/P40.jpg";
import P41 from "../images/P/P41.jpg";
import P42 from "../images/P/P42.jpg";
import P43 from "../images/P/P43.jpg";
import P44 from "../images/P/P44.jpg";

let Plumber = () => {
  let data = [
    {
      id: 1,
      imgSrc: P1,
    },
    {
      id: 2,
      imgSrc: P2,
    },
    {
      id: 3,
      imgSrc: P3,
    },
    {
      id: 4,
      imgSrc: P4,
    },
    {
      id: 5,
      imgSrc: P5,
    },
    {
      id: 6,
      imgSrc: P6,
    },
    {
      id: 7,
      imgSrc: P7,
    },
    {
      id: 8,
      imgSrc: P8,
    },
    {
      id: 9,
      imgSrc: P9,
    },
    {
      id: 10,
      imgSrc: P10,
    },
    {
      id: 11,
      imgSrc: P11,
    },
    {
      id: 12,
      imgSrc: P12,
    },
    {
      id: 13,
      imgSrc: P13,
    },
    {
      id: 14,
      imgSrc: P14,
    },
    {
      id: 15,
      imgSrc: P15,
    },
    {
      id: 16,
      imgSrc: P16,
    },
    {
      id: 17,
      imgSrc: P17,
    },
    {
      id: 18,
      imgSrc: P18,
    },
    {
      id: 19,
      imgSrc: P19,
    },
    {
      id: 20,
      imgSrc: P20,
    },
    {
      id: 21,
      imgSrc: P21,
    },
    {
      id: 22,
      imgSrc: P22,
    },
    {
      id: 23,
      imgSrc: P23,
    },
    {
      id: 24,
      imgSrc: P24,
    },
    {
      id: 25,
      imgSrc: P25,
    },
    {
      id: 26,
      imgSrc: P26,
    },
    {
      id: 27,
      imgSrc: P27,
    },
    {
      id: 28,
      imgSrc: P28,
    },
    {
      id: 29,
      imgSrc: P29,
    },
    {
      id: 30,
      imgSrc: P30,
    },

    {
      id: 31,
      imgSrc: P31,
    },

    {
      id: 32,
      imgSrc: P32,
    },

    {
      id: 33,
      imgSrc: P33,
    },

    {
      id: 34,
      imgSrc: P34,
    },

    {
      id: 35,
      imgSrc: P35,
    },

    {
      id: 36,
      imgSrc: P36,
    },

    {
      id: 37,
      imgSrc: P37,
    },

    {
      id: 38,
      imgSrc: P38,
    },

    {
      id: 39,
      imgSrc: P39,
    },

    {
      id: 40,
      imgSrc: P40,
    },
    {
      id: 41,
      imgSrc: P41,
    },
    {
      id: 42,
      imgSrc: P42,
    },
    {
      id: 43,
      imgSrc: P43,
    },
    {
      id: 44,
      imgSrc: P44,
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
        <title>best Plumber in North macedonia plumbing</title>
        <meta
          name="description"
          content="You know when you have a leak and you have to wait hours to get it fixed, Bill had the same issue but he called Mitegra and he got it fixed in 10 minutes!"
        />
      </Head>
      <div className={styles.Desktop}>
        <div className={styles.plumber}>
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
            services. Our expert team of approved plumbers has built up
            extensive hands-on experience with residential and commercial jobs
            of all types and sizes, providing high-quality services at an
            affordable price and without a call out charge. As professionals, we
            take the hassle out of plumbing issues and home improvement
            projects, working efficiently to minimise disruption and save you
            time and money. No matter the nature of your project, we have the
            skills, knowledge, and expertise to achieve the result that you and
            your property require.
          </span>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
      </div>

      <div className={styles.Mobile}>
        <div className={styles.mp}>
          <Image
            src={mp}
            alt={"plumbing plumber"}
            objectFit="cover"
            objectPosition="top"
            blurDataURL="data:..."
            placeholder="blur"
            layout="fill"
          />

          <span className={styles.mp1}> EXPERT PLUMBING SERVICES</span>
          <h1 className={styles.mp2}>
            we’ve provided a wide range of professional and efficient plumbing{" "}
            <br />
            services. Our expert team of approved plumbers has built up <br />
            extensive hands-on experience with residential and commercial jobs{" "}
            <br />
            of all types and sizes, providing high-quality services at an <br />
            affordable price and without a call out charge. As professionals, we{" "}
            <br />
            take the hassle out of plumbing issues and home improvement <br />
            projects, working efficiently to minimise disruption and save you{" "}
            <br />
            time and money. No matter the nature of your project, we have the{" "}
            <br />
            skills, knowledge, and expertise to achieve the result that you and{" "}
            <br />
            your property require.
          </h1>
        </div>
        <div className={styles.mheb}></div>
      </div>
      <div className={`${model ? styles.model : ""} ${styles.modelOpen}`}>
        {tempimgSrc
          ? [
              <Image
                src={tempimgSrc}
                className={styles.img}
                width={400}
                height={400}
                objectFit="cover"
                objectPosition="top"
                blurDataURL="data:..."
                placeholder="blur"
              />,
            ]
          : null}
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

export default Plumber;
