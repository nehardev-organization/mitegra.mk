import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
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
import { al } from "/locales/al.js";

export default function Home() {
  const router = useRouter();
  const languages = { al };
  const t = languages[router.locale];

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
          <button className={styles.heroButton}>Pse ne?</button>
        </Link>
        <h1 className={styles.h1}>
          Ne punojmë me kompani të pasurive të paluajtshme që kanë nevojë
          <br />
          për Shërbime hidraulike të sigurta edhe të shëndetshme
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
          <h1 className={styles.Ph1}>HINDALIK</h1>
          <h2 className={styles.Ph2}>
            Hidraulikët tanë të miratuar mund të ndihmojnë me të gjitha
            hidraulikun tuaj <br /> kërkesave, duke ofruar një përgjigje efikase
            për çështje të tilla <br /> si rrjedhje, bllokime dhe tualete të
            prishura. Duke vizatuar në <br /> e tyre përvojë e gjerë praktike,
            ekipi ynë mund të kryejë gjithashtu <br /> a një gamë e gjerë
            shërbimesh profesionale të instalimit hidraulik, <br /> duke mbuluar
            gjithçka nga pajisjet shtëpiake deri te <br /> dyqane të
            specializuara termike dhe maceratorë Saniflo.
          </h2>
          <Link href={t.pLink}>
            <button className={styles.pButton}>HINDALIK</button>
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
          <h1 className={styles.hH1}>NGROHJE</h1>
          <h2 className={styles.hH2}>
            Ne ofrojmë shërbime të specializuara të ngrohjes që <br />{" "}
            promovojnë një numër opsionet e ngrohjes alternative <br />.
            Inxhinierët tanë mund të prezantojnë ju të <br /> përfitimet e
            ngrohjes nën dysheme dhe ngrohjes <br /> njësitë e ndërfaqes, që ju
            ndihmojnë të merrni një vendim <br /> të informuar mbi nëse janë një{" "}
            <br /> i përshtatshëm për pronën tuaj. Ne gjithashtu mbajmë nxjerr{" "}
            <br /> raportet profesionale të blerësve dhe <br /> powerflushing
            shërbime që fokusohen në shëndetin <br /> të ngrohjes suaj qendrore
            sistemi.
          </h2>
          <Link href={t.hLink}>
            <button className={styles.hButton}>NGROHJE</button>
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
          <h1 className={styles.aH1}>AIR CONDITIONING</h1>
          <h2 className={styles.aH2}>
            We can offer a complete Design, Manufacture <br /> and Install
            package on all manner of split air <br /> conditioning systems and
            ducted air handling <br /> units. The wall mounted split systems are
            designed <br /> to air condition small and medium size areas and{" "}
            <br /> are ideal for office shops or domestic applications, <br />{" "}
            They are generally operated by a remote <br /> infra-red control.
          </h2>
          <Link href="/best-air-condition-north-macedonia-debar">
            <button className={styles.aButton}>AIR CONDITION</button>
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
          <h1 className={styles.bH1}>BATHROOM</h1>
          <h2 className={styles.bH2}>
            As experienced plumbers, we can help to design, <br /> install,
            repair, and replace bathrooms, putting our <br /> skills to good use
            as part of your home improvement <br /> project. We’ve successfully
            worked on bathrooms of <br /> all sizes within a wide range of
            properties and will be <br /> able to provide any expert assistance
            you require. <br /> We are prepared to handle any issues or
            challenges <br /> we encounter.
          </h2>
          <Link href="/best-bathroom-installation-north-macedonia-debar">
            <button className={styles.bButton}>BATHROOM</button>
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
          <h1 className={styles.bv1}>VENTILATION</h1>
          <h2 className={styles.bv2}>
            {" "}
            we can help to design, install, repair, and replace <br /> Air
            Conditions, putting our skills to good use as <br /> part of your
            improvement project. We’ve <br /> successfully worked on Air
            conditions of all sizes <br />
            within a wide range of properties and will be able <br />
            to provide any expert assistance you require. <br />
            We are prepared to handle any issues or <br /> challenges we
            encounter.
          </h2>
          <Link href="/best-ventilation-installation-north-macedonia-debar">
            <button className={styles.vButton}>VENTILATION</button>
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
          <h1 className={styles.mp1}>PLUMBING</h1>
          <h1 className={styles.mp2}>
            Our approved plumbers can help with all your plumbing <br />{" "}
            requirements, providing an efficient response to issues such <br />{" "}
            as leaks, blockages, and broken toilets. Drawing on their <br />{" "}
            extensive hands-on experience, our team can also carry out <br /> a
            wide range of professional plumbing installation services, <br />{" "}
            covering everything from domestic appliances through to <br />{" "}
            specialist thermal stores and Saniflo macerators.
          </h1>
          <Link href="/best-Plumber-in-North-macedonia-plumbing">
            <button className={styles.mpButton}>PLUMBING</button>
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
          <h1 className={styles.mht}>HEATING</h1>
          <h2 className={styles.mht1}>
            We provide specialist heating services that <br /> promote a number
            of alternative heating <br /> options. Our engineers can introduce
            you to <br /> the benefits of underfloor heating and heat <br />{" "}
            interface units, helping you to make an <br /> informed decision on
            whether they’re a good <br /> fit for your property. We also carry
            out <br /> professional buyer’s reports and <br /> powerflushing
            services that focus on the <br /> health of your central heating
            system.
          </h2>
          <Link href="/best-central-heating-north-macedonia-heating">
            <button className={styles.mhButton}>HEATING</button>
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
          <h1 className={styles.mc1}>AIR CONDITIONING</h1>
          <h2 className={styles.mc2}>
            We can offer a complete Design, Manufacture <br /> and Install
            package on all manner of split air <br /> conditioning systems and
            ducted air handling <br /> units. The wall mounted split systems are
            designed <br /> to air condition small and medium size areas and{" "}
            <br /> are ideal for office shops or domestic applications. <br />{" "}
            They are generally operated by a remote <br /> infra-red control.
          </h2>
          <Link href="/best-air-condition-north-macedonia-debar">
            <button className={styles.mcButton}>AIR CONDITION</button>
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
          <h1 className={styles.mb1}>BATHROOM</h1>
          <h2 className={styles.mb2}>
            As experienced plumbers, e can help to design, <br /> install,
            repair, and replace bathrooms, putting <br /> our skills to good use
            as part of your home <br /> improvement project. We’ve successfully{" "}
            <br />
            worked on bathrooms of <br /> all sizes within a wide range of
            properties and will be <br /> able to provide any expert assistance
            you require. <br /> We are prepared to handle any issues or
            challenges <br /> we encounter.
          </h2>
          <Link href="/best-bathroom-installation-north-macedonia-debar">
            <button className={styles.mbButton}>BATHROOM</button>
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
          <h1 className={styles.mv1}>VENTILATION</h1>
          <h2 className={styles.mv2}>
            {" "}
            We can help to design, install, repair, and replace <br /> Air
            Conditions, putting our skills to good use as <br /> part of your
            improvement project. We’ve <br /> successfully worked on Air
            conditions of all sizes <br />
            within a wide range of properties and will be able <br />
            to provide any expert assistance you require. <br />
            We are prepared to handle any issues or <br /> challenges we
            encounter.
          </h2>
          <Link href="/best-ventilation-installation-north-macedonia-debar">
            <button className={styles.mvButton}>VENTILATION</button>
          </Link>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
      </div>
    </div>
  );
}
