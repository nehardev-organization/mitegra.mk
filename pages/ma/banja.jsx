import React, { useState } from "react";
import Head from "next/head";
import styles from "./styles/bathroom1.module.css";
import bt from "/images/bat.png";
import mb from "/images/mbbg.png";
import Image from "next/image";
import B1 from "/images/B/B1.jpg";
import B2 from "/images/B/B2.jpg";
import B3 from "/images/B/B3.jpg";
import B4 from "/images/B/B4.jpg";
import B5 from "/images/B/B5.jpg";
import B6 from "/images/B/B6.jpg";
import B7 from "/images/B/B7.jpg";
import B8 from "/images/B/B8.jpg";
import B9 from "/images/B/B9.jpg";
import B10 from "/images/B/B10.jpg";
import B11 from "/images/B/B11.jpg";
import B12 from "/images/B/B12.jpg";
import B13 from "/images/B/B13.jpg";
import B14 from "/images/B/B14.jpg";
import B15 from "/images/B/B15.jpg";
import B16 from "/images/B/B16.jpg";
import B17 from "/images/B/B17.jpg";
import B18 from "/images/B/B18.jpg";
import B19 from "/images/B/B19.jpg";
import B20 from "/images/B/B20.jpg";
import B21 from "/images/B/B21.jpg";
import B22 from "/images/B/B22.jpg";
import B23 from "/images/B/B23.jpg";
import B24 from "/images/B/B24.jpg";
import B25 from "/images/B/B25.jpg";
import B26 from "/images/B/B26.jpg";
import B27 from "/images/B/B27.jpg";
import B28 from "/images/B/B28.jpg";
import B29 from "/images/B/B29.jpg";
import B30 from "/images/B/B30.jpg";
import B31 from "/images/B/B31.jpg";
import B32 from "/images/B/B32.jpg";
import B33 from "/images/B/B33.jpg";
import B34 from "/images/B/B34.jpg";
import B35 from "/images/B/B35.jpg";
import B36 from "/images/B/B36.jpg";
import B37 from "/images/B/B37.jpg";
import B38 from "/images/B/B38.jpg";
import B40 from "/images/B/B40.jpg";
import B41 from "/images/B/B41.jpg";
import B42 from "/images/B/B42.jpg";
import B43 from "/images/B/B43.jpg";
import B44 from "/images/B/B44.jpg";
import B45 from "/images/B/B45.jpg";
import B46 from "/images/B/B46.jpg";
import B47 from "/images/B/B47.jpg";
import B48 from "/images/B/B48.jpg";
import B49 from "/images/B/B49.jpg";
import B50 from "/images/B/B50.jpg";
import B51 from "/images/B/B51.jpg";
import B52 from "/images/B/B52.jpg";
import B53 from "/images/B/B53.jpg";
import B54 from "/images/B/B54.jpg";

const Bathroom = () => {
  let data = [
    {
      id: 1,
      imgSrc: B1,
    },
    {
      id: 2,
      imgSrc: B2,
    },
    {
      id: 3,
      imgSrc: B3,
    },
    {
      id: 4,
      imgSrc: B4,
    },
    {
      id: 5,
      imgSrc: B5,
    },

    {
      id: 7,
      imgSrc: B7,
    },
    {
      id: 8,
      imgSrc: B8,
    },
    {
      id: 9,
      imgSrc: B9,
    },
    {
      id: 10,
      imgSrc: B10,
    },
    {
      id: 11,
      imgSrc: B11,
    },

    {
      id: 12,
      imgSrc: B12,
    },
    {
      id: 13,
      imgSrc: B13,
    },
    {
      id: 14,
      imgSrc: B14,
    },
    {
      id: 15,
      imgSrc: B15,
    },
    {
      id: 16,
      imgSrc: B16,
    },
    {
      id: 17,
      imgSrc: B17,
    },
    {
      id: 18,
      imgSrc: B18,
    },
    {
      id: 19,
      imgSrc: B19,
    },

    {
      id: 20,
      imgSrc: B20,
    },
    {
      id: 21,
      imgSrc: B21,
    },
    {
      id: 22,
      imgSrc: B22,
    },
    {
      id: 23,
      imgSrc: B23,
    },
    {
      id: 24,
      imgSrc: B24,
    },
    {
      id: 25,
      imgSrc: B25,
    },
    {
      id: 26,
      imgSrc: B26,
    },

    {
      id: 27,
      imgSrc: B27,
    },
    {
      id: 28,
      imgSrc: B28,
    },
    {
      id: 29,
      imgSrc: B29,
    },
    {
      id: 30,
      imgSrc: B30,
    },
    {
      id: 31,
      imgSrc: B31,
    },
    {
      id: 32,
      imgSrc: B32,
    },
    {
      id: 33,
      imgSrc: B33,
    },
    {
      id: 34,
      imgSrc: B34,
    },
    {
      id: 35,
      imgSrc: B35,
    },
    {
      id: 36,
      imgSrc: B36,
    },
    {
      id: 37,
      imgSrc: B37,
    },
    {
      id: 38,
      imgSrc: B38,
    },

    {
      id: 40,
      imgSrc: B40,
    },
    {
      id: 41,
      imgSrc: B41,
    },
    {
      id: 42,
      imgSrc: B42,
    },
    {
      id: 43,
      imgSrc: B43,
    },
    {
      id: 44,
      imgSrc: B44,
    },
    {
      id: 45,
      imgSrc: B45,
    },
    {
      id: 46,
      imgSrc: B46,
    },

    {
      id: 47,
      imgSrc: B47,
    },
    {
      id: 48,
      imgSrc: B48,
    },
    {
      id: 49,
      imgSrc: B49,
    },
    {
      id: 50,
      imgSrc: B50,
    },
    {
      id: 51,
      imgSrc: B51,
    },
    {
      id: 52,
      imgSrc: B52,
    },
    {
      id: 53,
      imgSrc: B53,
    },

    {
      id: 54,
      imgSrc: B54,
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
        <title>Бајноје инсталација</title>
        <meta
          name="description"
          content="you know when you need a functional bathroom, bill had the same issue, he looked online on facebook and all of the internet until he found us, he said its the best bathroom he ever saw,"
        />
      </Head>
      <div className={styles.Desktop}>
        <div className={styles.plumber}>
          <Image
            src={bt}
            alt={"bathroom installation"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />

          <h1 className={styles.ps1}> ПОСТАВУВАЊЕ НА САНИТАРИЈА</h1>
        </div>
        <div className={styles.text}>
          <span className={styles.head1}>
            <span className={styles.head2}> ПОСТАВУВАЊЕ НА САНИТАРИЈА</span>
          </span>
        </div>
        <div className={styles.span}>
          <span className={styles.span1}>
            Нашите искусни водоводџии ви даваат одговор на било какво прашање во
            врска со вашиот прблем. Ако сте испланирале комплетен проект за
            реновирање на вашата бања или имате потреба од стручни потреби за
            поправка се соочуваме со истекување или било каков проблем, нашиот
            тим има вештини и знаење да помогне. Нашите водоводџии се справуваат
            со сè, отстранувајќи ја маката што ја имаате со инсталацијата или
            одржување на бањата и обезбедување на а Ефикасна и висококвалитетна
            работа.
          </span>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
      </div>

      <div className={styles.Mobile}>
        <div className={styles.mb}>
          <Image
            src={mb}
            alt={"bathroom installation"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />

          <span className={styles.mb1}> ПОСТАВУВАЊЕ НА САНИТАРИЈА</span>
          <h1 className={styles.mb2}>
            Нашите искусни водоводџии ви даваат одговор на било какво прашање во
            врска со вашиот прблем. Ако сте испланирале комплетен проект за
            реновирање на вашата бања или имате потреба од стручни потреби за
            поправка се соочуваме со истекување или било каков проблем, нашиот
            тим има вештини и знаење да помогне. Нашите водоводџии се справуваат
            со сè, отстранувајќи ја маката што ја имаате со инсталацијата или
            одржување на бањата и обезбедување на а Ефикасна и висококвалитетна
            работа.
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
                alt="bathroom"
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
              alt="bathroom"
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

export default Bathroom;
