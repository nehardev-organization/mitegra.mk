import React, { useState } from "react";
import Head from "next/head";
import styles from "./styles/Plumber1.module.css";
import Image from "next/image";
import plumber from "/images/pl.png";
import mp from "/images/mpbg.png";
import Link from "next/link";

import P1 from "/images/P/P1.jpg";
import P2 from "/images/P/P2.jpg";
import P5 from "/images/P/P5.jpg";
import P6 from "/images/P/P6.jpg";
import P7 from "/images/P/P7.jpg";
import P8 from "/images/P/P8.jpg";
import P9 from "/images/P/P9.jpg";
import P10 from "/images/P/P10.jpg";
import P11 from "/images/P/P11.jpg";
import P12 from "/images/P/P12.jpg";
import P13 from "/images/P/P13.jpg";
import P14 from "/images/P/P14.jpg";
import P15 from "/images/P/P15.jpg";
import P16 from "/images/P/P17.jpg";
import P17 from "/images/P/P17.jpg";
import P18 from "/images/P/P18.jpg";
import P19 from "/images/P/P19.jpg";
import P20 from "/images/P/P20.jpg";
import P21 from "/images/P/P21.jpg";
import P22 from "/images/P/P22.jpg";
import P23 from "/images/P/P23.jpg";
import P24 from "/images/P/P24.jpg";
import P25 from "/images/P/P25.jpg";
import P26 from "/images/P/P26.jpg";
import P27 from "/images/P/P27.jpg";
import P28 from "/images/P/P28.jpg";
import P29 from "/images/P/P29.jpg";
import P30 from "/images/P/P30.jpg";
import P31 from "/images/P/P31.jpg";
import P32 from "/images/P/P32.jpg";
import P33 from "/images/P/P33.jpg";
import P34 from "/images/P/P34.jpg";
import P35 from "/images/P/P35.jpg";
import P36 from "/images/P/P36.jpg";
import P37 from "/images/P/P37.jpg";
import P38 from "/images/P/P38.jpg";
import P39 from "/images/P/P39.jpg";
import P40 from "/images/P/P40.jpg";
import P41 from "/images/P/P41.jpg";
import P42 from "/images/P/P42.jpg";
import P43 from "/images/P/P43.jpg";
import P44 from "/images/P/P44.jpg";

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
        <title>Најдобриот водоинсталатер во Македонија</title>
        <meta
          name="description"
          content="You know when you have a leak and you have to wait hours to get it fixed, Bill had the same issue but he called Mitegra and he got it fixed in 10 minutes!"
        />
      </Head>
      <div className={styles.Desktop}>
        <div className={styles.plumber}>
          <Image
            src={plumber}
            alt={"plumbing plumber"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />

          <h1 className={styles.ps1}> ВОДОВОД </h1>
        </div>
        <div className={styles.text}>
          <span className={styles.head1}>
            <span className={styles.head2}>ВОДОВОД</span>
          </span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            {" "}
            Понудивме широк спектар на професионална и ефикасна хидраулика.
            Нашиот тим од одобрени експерти за водовод ќе воспостави
            долгогодишно практично искуство со станбена и комерцијална работа од
            сите видови, нудејќи квалитетни услуги високо по поволна цена и без
            надомест. Ги отстрануваме проблемите од водоводните проблеми и
            проекти за подобрување на домот, работејќи ефикасно за тоа
            минимизирајте ги прекините и заштедете време и пари. Без оглед на
            вашиот проект, ние ја имаме таа способност, знаење и стручност за да
            го постигнеме резултатот кој што го посакувате.
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
            placeholder="blur"
            layout="fill"
          />

          <span className={styles.mp1}> ВОДОВОД</span>
          <h1 className={styles.mp2}>
            Понудивме широк спектар на <br />
            професионална и ефикасна <br />
            хидраулика. Нашиот тим од
            <br />
            одобрени експерти за водовод
            <br />
            ќе воспостави долгогодишно
            <br />
            практично искуство со станбена
            <br />
            и комерцијална работа од
            <br />
            сите видови, нудејќи квалитетни
            <br />
            услуги високо по поволна цена и без
            <br />
            надомест. Ги отстрануваме проблемите <br />
            од водоводните проблеми и проекти <br />
            за подобрување на домот, работејќи <br />
            ефикасно за тоа минимизирајте ги
            <br />
            прекините и заштедете време и пари. <br />
            Без оглед на вашиот проект, ние ја
            <br />
            имаме таа способност, знаење и <br />
            стручност за да го постигнеме резултатот
            <br />
            кој што го посакувате.
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
                alt="plumber"
                width={600}
                height={600}
                objectFit="cover"
                objectPosition="top"
                // placeholder="blur"
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
              alt="plumber"
              width={400}
              height={400}
              objectFit="cover"
              objectPosition="top"
              //   placeholder="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plumber;
