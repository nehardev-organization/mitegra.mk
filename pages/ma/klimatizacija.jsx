import React, { useState } from "react";
import Head from "next/head";
import styles from "./styles/air1.module.css";
import ar from "/images/arcon.png";
import mar from "/images/mabg.png";
import Image from "next/image";

import A1 from "/images/A/A1.jpg";
import A2 from "/images/A/A2.jpg";
import A3 from "/images/A/A3.jpg";
import A4 from "/images/A/A4.jpg";
import A5 from "/images/A/A5.jpg";
import A7 from "/images/A/A7.jpg";
import A8 from "/images/A/A8.jpg";
import A9 from "/images/A/A9.jpg";
import A10 from "/images/A/A10.jpg";
import A11 from "/images/A/A11.jpg";

const Air = () => {
  let data = [
    {
      id: 1,
      imgSrc: A1,
    },
    {
      id: 2,
      imgSrc: A2,
    },
    {
      id: 3,
      imgSrc: A3,
    },
    {
      id: 4,
      imgSrc: A4,
    },
    {
      id: 5,
      imgSrc: A5,
    },

    {
      id: 7,
      imgSrc: A7,
    },
    {
      id: 8,
      imgSrc: A8,
    },
    {
      id: 9,
      imgSrc: A9,
    },
    {
      id: 10,
      imgSrc: A10,
    },
    {
      id: 11,
      imgSrc: A11,
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
        <title>најдобрите климатизери во Северна Македонија</title>
        <meta
          name="description"
          content="you know when you need Air conditioning and cant find a good service, well bill had the same problem, bill went from store to store until he found us, he is very satisfied"
        />
      </Head>
      <div className={styles.Desktop}>
        <div className={styles.plumber}>
          <Image
            src={ar}
            alt={"air condition"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />

          <h1 className={styles.ps1}> КЛИМА</h1>
        </div>
        <div className={styles.text}>
          <span className={styles.head1}>
            <span className={styles.head2}> КЛИМА</span>
          </span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            {" "}
            Обезбедивме висококвалитетни услуги за климатизација на станбени и
            комерцијални клиенти. Нашите упатени инженери изградија долгогодишно
            искуство со работни места, обезбедувајќи ефективни решенија по
            конкурентна цена. Со наша работа ќе ви биде завршена безбедно,
            ефикасно и професионално, задржувајќи го нарушувањето и отстранување
            на вашата мака со решавање на проблемите.
          </span>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
      </div>

      <div className={styles.Mobile}>
        <div className={styles.ma}>
          <Image
            src={mar}
            alt={"air condition"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />

          <span className={styles.ma1}> КЛИМА </span>
          <h1 className={styles.ma2}>
            Обезбедивме висококвалитетни услуги за климатизација на станбени и{" "}
            <br />
            комерцијални клиенти. Нашите упатени инженери изградија долгогодишно
            <br />
            искуство со работни места, обезбедувајќи ефективни решенија по
            <br />
            конкурентна цена. Со наша работа ќе ви биде завршена безбедно,
            <br />
            ефикасно и професионално, задржувајќи го нарушувањето и отстранување
            <br />
            на вашата мака со решавање на проблемите.
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
                alt="air contition"
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

export default Air;
