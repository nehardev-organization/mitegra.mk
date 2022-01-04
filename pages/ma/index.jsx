import Head from "next/head";
import Image from "next/image";
import styles from "./styles/Home1.module.css";
import hero from "/images/hebg.png";
import plumber from "/images/pbg.png";
import Heating from "/images/hbg.png";
import airCon from "/images/abg.png";
import bathroom from "/images/bbg.png";
import ventilation from "/images/vbg.png";
import mp from "/images/mpbg.png";
import mh from "/images/mhbg.png";
import ma from "/images/mabg.png";
import mb from "/images/mbbg.png";
import mv from "/images/mvbg.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.HomePage}>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3D8RTZLS4T"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '[Tracking ID]', { page_path: window.location.pathname });
            `,
          }}
        />
        <title>Mitegra Technology system,</title>
        <meta
          name="description"
          content="You know when you have a leak and you have to wait hours to get it fixed, Bill had the same issue but he called Mitegra and he got it fixed in 10 minutes!"
        />
      </Head>
      <div className={styles.imc1}>
        <Image
          src={hero}
          alt={"hero image mitegra"}
          objectFit="cover"
          objectPosition="top"
          layout="fill"
          placeholder="blur"
          priority
        />
        <Link href="/contact-mitegra">
          <button className={styles.heroButton}>Зошто ние?</button>
        </Link>
        <h1 className={styles.h1}>
          Работиме со компании за недвижнини кои имаат потреба
          <br />
          за безбедни и здрави хидраулични услуги
        </h1>
      </div>
      <div className={styles.Desktop}>
        <div className={styles.imc2}>
          <Image
            src={plumber}
            alt={"plumbing plumber"}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
          />
          <h1 className={styles.Ph1}>ВОДОВОД</h1>
          <h2 className={styles.Ph2}>
            Нашите одобрени водоводџии можат да ви помогнат со целиот водовод
            <br />
            барања, обезбедувајќи ефикасен одговор на прашања како што се
            <br />
            протекување и други проблеми.Со нивното долгогодишно
            <br />
            искуство, нашиот тим исто така може да изврши широк спектар на
            <br />
            професионални услуги за инсталација на водовод.
          </h2>
          <Link href="/mkd/ma/vodovod">
            <button className={styles.pButton}>ВОДОВОД</button>
          </Link>
        </div>
        <div className={styles.imc3}>
          <Image
            src={Heating}
            objectFit="cover"
            objectPosition="top"
            alt={"Central heating image"}
            placeholder="blur"
            layout="fill"
          />
          <h1 className={styles.hH1}>ГРЕЕЊЕ</h1>
          <h2 className={styles.hH2}>
            Обезбедуваме специјални услуги за греење кои <br /> ги промовираат
            голем број на алтернативно греење. <br /> Нашите инженери можат да
            воведат <br /> придобивки од подното греење и
            <br /> интерфејс единици, кои ви помагаат да донесете <br /> одлука
            за дали тие се добри и <br /> погодни за вашиот дом. Ние исто така
            издаваме
            <br /> професионални извештаи на купувачите и <br />
            услуги кои се фокусираат на <br /> вашиот централен систем за
            греење.
          </h2>
          <Link href="ma/greenje">
            <button className={styles.hButton}>ГРЕЕЊЕ</button>
          </Link>
        </div>

        <div className={styles.imc4}>
          <Image
            src={airCon}
            alt={"air conditioning "}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />
          <h1 className={styles.aH1}>КЛИМАТИЗАЦИЈА</h1>
          <h2 className={styles.aH2}>
            Можеме да понудиме комплетен дизајн, производство <br /> и
            инсталирање на сите начини на сплит воздух <br /> системи за
            климатизација и единици за ракување со канален воздух <br />.
            Ѕидните сплит системи се дизајниран <br /> за климатизација на мали
            и средни области и <br /> се идеални за канцелариски, продавници или
            домашни простории, <br /> Тие обично се управуваат со далечински
            управувач. <br /> инфра-црвена контрола.
          </h2>
          <Link href="/ma/klimatizacija">
            <button className={styles.aButton}>КЛИМАТИЗАЦИЈА</button>
          </Link>
        </div>
        <div className={styles.imc5}>
          <Image
            src={bathroom}
            alt={"bathroom installation bathroom design"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />
          <h1 className={styles.bH1}>ПОСТАВУВАЊЕ НА БАЊА</h1>
          <h2 className={styles.bH2}>
            Како искусни водоводџии, можеме да помогнеме при дизајнирање, <br />
            монтирње и поправка на тоалетот, искористувајќи ги нашите
            <br /> вештини на добра употреба како дел од проектот за подобрување
            на вашиот дом <br />. Успешно сме работиле на бањи од <br /> сите
            големини во широк опсег. <br />
            <br /> Подготвени сме да се справиме со какви било прашања или
            предизвици <br /> со кои се среќаваме.
          </h2>
          <Link href="/ma/banja">
            <button className={styles.bButton}>ПОСТАВУВАЊЕ НА БАЊА</button>
          </Link>
        </div>
        <div className={styles.imc6}>
          <Image
            src={ventilation}
            alt={"Ventilation installation"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />
          <h1 className={styles.bv1}>ВЕНТИЛАЦИЈА</h1>
          <h2 className={styles.bv2}>
            Можеме да помогнеме во дизајнирање, инсталирање, поправка и замена
            на <br /> Air Услови, искористувајќи ги нашите вештини како <br />
            дел од вашиот проект за подобрување. Ние <br /> успешно работевме на
            Air услови од сите големини <br />
            во широк опсег на својства и ќе можеме
            <br />
            да обезбедиме било каква стручна помош што ви треба. <br />
          </h2>
          <Link href="/ma/ventilicija">
            <button className={styles.vButton}>ВЕНТИЛАЦИЈА</button>
          </Link>
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
          <h1 className={styles.mp1}>ВОДОВОД</h1>
          <h1 className={styles.mp2}>
            Нашите одобрени водоводџии можат да ви помогнат со целиот водовод
            <br />
            барања, обезбедувајќи ефикасен одговор на прашања како што се
            <br />
            протекување и други проблеми.Со нивното долгогодишно
            <br />
            искуство, нашиот тим исто така може да изврши широк спектар на
            <br />
            професионални услуги за инсталација на водовод.
          </h1>
          <Link href="/ma/vodovod">
            <button className={styles.mpButton}>ВОДОВОД</button>
          </Link>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>

        <div className={styles.mp}>
          <Image
            src={mh}
            alt={"Central heating"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />
          <div className={styles.mheb}></div>
          <h1 className={styles.mht}>ГРЕЕЊЕ</h1>
          <h2 className={styles.mht1}>
            Обезбедуваме специјални услуги за греење кои <br /> ги промовираат
            голем број на алтернативно греење. <br /> Нашите инженери можат да
            воведат <br /> придобивки од подното греење и
            <br /> интерфејс единици, кои ви помагаат да донесете <br /> одлука
            за дали тие се добри и <br /> погодни за вашиот дом. Ние исто така
            издаваме
            <br /> професионални извештаи на купувачите и <br />
            услуги кои се фокусираат на <br /> вашиот централен систем за
            греење.
          </h2>
          <Link href="/ma/greenje">
            <button className={styles.mhButton}>ГРЕЕЊЕ</button>
          </Link>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>

        <div className={styles.mp}>
          <Image
            src={ma}
            alt={"Air conditioning"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />
          <h1 className={styles.mc1}>КЛИМАТИЗАЦИЈА</h1>
          <h2 className={styles.mc2}>
            Можеме да понудиме комплетен дизајн, производство <br /> и
            инсталирање на сите начини на сплит воздух <br /> системи за
            климатизација и единици за ракување со канален воздух <br />.
            Ѕидните сплит системи се дизајниран <br /> за климатизација на мали
            и средни области и <br /> се идеални за канцелариски, продавници или
            домашни простории, <br /> Тие обично се управуваат со далечински
            управувач. <br /> инфра-црвена контрола.
          </h2>
          <Link href="/ma/klimatizacija">
            <button className={styles.mcButton}>КЛИМАТИЗАЦИЈА</button>
          </Link>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>

        <div className={styles.mp}>
          <Image
            src={mb}
            alt={"bathroom installation bathroom design"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />
          <div className={styles.mheb}></div>
          <h1 className={styles.mb1}>ПОСТАВУВАЊЕ НА БАЊА</h1>
          <h2 className={styles.mb2}>
            Како искусни водоводџии, можеме да помогнеме при дизајнирање, <br />
            монтирње и поправка на тоалетот, искористувајќи ги нашите
            <br /> вештини на добра употреба како дел од проектот за подобрување
            на вашиот дом <br />. Успешно сме работиле на бањи од <br /> сите
            големини во широк опсег. <br />
            Подготвени сме да се справиме со какви било прашања или предизвици{" "}
            <br /> со кои се среќаваме.
          </h2>
          <Link href="/ma/banja">
            <button className={styles.mbButton}>ПОСТАВУВАЊЕ НА БАЊА</button>
          </Link>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
        <div className={styles.mp}>
          <Image
            src={mv}
            alt={"ventilation installation"}
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            layout="fill"
          />
          <h1 className={styles.mv1}>ВЕНТИЛАЦИЈА</h1>
          <h2 className={styles.mv2}>
            Можеме да помогнеме во дизајнирање, инсталирање, поправка и замена
            на <br /> Air Услови, искористувајќи ги нашите вештини како <br />
            дел од вашиот проект за подобрување. Ние <br /> успешно работевме на
            Air услови од сите големини <br />
            во широк опсег на својства и ќе можеме
            <br />
            да обезбедиме било каква стручна помош што ви треба. <br />
          </h2>
          <Link href="/ma/ventilicija">
            <button className={styles.mvButton}>ВЕНТИЛАЦИЈА</button>
          </Link>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
      </div>
    </div>
  );
}
