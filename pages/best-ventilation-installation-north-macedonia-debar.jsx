import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/ventilation.module.css";
import ve from "../images/ve.png";
import mv from "../images/mvbg.png";
import Image from "next/image";

import V1 from "../images/V/V1.jpg";
import V2 from "../images/V/V2.jpg";
import V3 from "../images/V/V2.jpg";
import V4 from "../images/V/V2.jpg";
import V5 from "../images/V/V5.jpg";
import V6 from "../images/V/V6.jpg";
import V7 from "../images/V/V7.jpg";
import V8 from "../images/V/V8.jpg";
import V9 from "../images/V/V9.jpg";
import V10 from "../images/V/V10.jpg";
import V11 from "../images/V/V11.jpg";
import V12 from "../images/V/V12.jpg";
import V13 from "../images/V/V13.jpg";
import V14 from "../images/V/V14.jpg";
import V15 from "../images/V/V15.jpg";
import V16 from "../images/V/V17.jpg";
import V18 from "../images/V/V18.jpg";
import V19 from "../images/V/V19.jpg";
import V20 from "../images/V/V20.jpg";
import V21 from "../images/V/V21.jpg";
import V22 from "../images/V/V22.jpg";
import V23 from "../images/V/V23.jpg";
import V24 from "../images/V/V24.jpg";
import V25 from "../images/V/V25.jpg";
import V26 from "../images/V/V26.jpg";
import V27 from "../images/V/V27.jpg";
import V28 from "../images/V/V28.jpg";
import V29 from "../images/V/V29.jpg";
import V30 from "../images/V/V30.jpg";
import V31 from "../images/V/V31.jpg";
import V32 from "../images/V/V32.jpg";
import V33 from "../images/V/V33.jpg";
import V34 from "../images/V/V34.jpg";
import V35 from "../images/V/V35.jpg";
import V36 from "../images/V/V36.jpg";

const Ventilation = () => {
  let data = [
    {
      id: 1,
      imgSrc: V1,
    },
    {
      id: 2,
      imgSrc: V2,
    },

    {
      id: 5,
      imgSrc: V5,
    },
    {
      id: 6,
      imgSrc: V6,
    },
    {
      id: 7,
      imgSrc: V7,
    },
    {
      id: 8,
      imgSrc: V8,
    },
    {
      id: 9,
      imgSrc: V9,
    },
    {
      id: 10,
      imgSrc: V10,
    },
    {
      id: 11,
      imgSrc: V11,
    },
    {
      id: 12,
      imgSrc: V12,
    },
    {
      id: 13,
      imgSrc: V13,
    },
    {
      id: 14,
      imgSrc: V14,
    },
    {
      id: 15,
      imgSrc: V15,
    },
    {
      id: 16,
      imgSrc: V16,
    },

    {
      id: 18,
      imgSrc: V18,
    },
    {
      id: 19,
      imgSrc: V19,
    },
    {
      id: 20,
      imgSrc: V20,
    },
    {
      id: 21,
      imgSrc: V21,
    },
    {
      id: 22,
      imgSrc: V22,
    },
    {
      id: 23,
      imgSrc: V23,
    },
    {
      id: 24,
      imgSrc: V24,
    },
    {
      id: 25,
      imgSrc: V25,
    },
    {
      id: 26,
      imgSrc: V26,
    },
    {
      id: 27,
      imgSrc: V27,
    },
    {
      id: 28,
      imgSrc: V28,
    },
    {
      id: 29,
      imgSrc: V29,
    },
    {
      id: 30,
      imgSrc: V30,
    },

    {
      id: 31,
      imgSrc: V31,
    },

    {
      id: 32,
      imgSrc: V32,
    },

    {
      id: 33,
      imgSrc: V33,
    },

    {
      id: 34,
      imgSrc: V34,
    },

    {
      id: 35,
      imgSrc: V35,
    },

    {
      id: 36,
      imgSrc: V36,
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
        <title>Best Ventilation In North Macedonia Debar</title>
        <meta
          name="description"
          content="you know when you need ventilation and cant find a good service, well bill had the same problem, bill went from store to store until he found us, he is very satisfied"
        />
      </Head>
      <div className={styles.Desktop}>
        <div className={styles.plumber}>
          <Image
            src={ve}
            alt={"ventilation"}
            objectFit="cover"
            objectPosition="top"
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
        <div className={styles.sp}>
          <span className={styles.sp1}>
            we can help to design, install, repair, and replace Air Conditions,
            putting our skills to good use as art of your improvement project.
            We’ve uccessfully worked on Air conditions of all sizes within a
            wide range of properties and will be able to provide any expert
            assistance you require. We are prepared to handle any issues or
            challenges we encounter.
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
      <div className={`${model ? styles.modelOpen : ""} ${styles.model}`}>
        {tempimgSrc
          ? [
              <Image
                src={tempimgSrc}
                className={styles.img}
                alt="ventilation"
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
        {data.map((item, index) => (
          <div
            className={styles.pics}
            key={index}
            onClick={() => getImg(item.imgSrc)}
          >
            <Image
              src={item.imgSrc}
              alt="air contition"
              width={400}
              height={400}
              objectFit="cover"
              objectPosition="top"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ventilation;
