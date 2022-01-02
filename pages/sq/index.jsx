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
          <h1 className={styles.Ph1}>HIDRAULIK</h1>
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
          <Link href="/al/sq/hidraulik">
            <button className={styles.pButton}>HIDRAULIK</button>
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
          <Link href="/al/sq/ngrohje-qendrore">
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
          <h1 className={styles.aH1}>KONDICIONER</h1>
          <h2 className={styles.aH2}>
            Ne mund të ofrojmë një dizajn të plotë, prodhim dhe instalim paketë{" "}
            <br />
            për të gjitha llojet e sistemeve të kondicionimit të ajrit të ndarë
            <br />
            dhe njësi për trajtimin e ajrit me kanal. Sistemet e ndarjes së
            <br />
            montuar në mur janë projektuar për të ajrosur zona të vogla dhe të
            <br />
            mesme dhe janë ideale për dyqane zyre ose aplikacione shtëpiake, Ata
            <br />
            zakonisht operohen nga një telekomandë infra-kuqe.
          </h2>
          <Link href="/al/sq/kondicioner">
            <button className={styles.aButton}>KONDICIONER</button>
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
          <h1 className={styles.bH1}>BANJO</h1>
          <h2 className={styles.bH2}>
            Si hidraulikë me përvojë, ne mund të ndihmojmë në projektimin,
            <br />
            instalimin, riparoni dhe zëvendësoni banjat, duke vënë në
            <br /> përdorim aftësitë tona si pjesë e projektit të përmirësimit
            të
            <br /> shtëpisë tuaj . Ne kemi sukses punuar në banja të të gjitha
            madhësive <br />
            brenda një game të gjerë të pronat dhe do të jetë në gjendje të
            <br /> ofrojë çdo ndihmë eksperti ju kerkoni. Ne jemi të përgatitur
            të
            <br /> trajtojmë çdo çështje ose sfidat që hasim.
          </h2>
          <Link href="/al/sq/banjo">
            <button className={styles.bButton}>BANJO</button>
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
          <h1 className={styles.bv1}>VENTILIMI</h1>
          <h2 className={styles.bv2}>
            ne mund të ndihmojmë në projektimin, instalimin, riparimin dhe{" "}
            <br />
            zëvendësimin e Air Kushtet, duke i vënë në përdorim aftësitë tona si
            <br />
            pjesë e juaja projekt përmirësimi. Ne kemi punuar me sukses në Air
            <br />
            kushtet e të gjitha madhësive brenda një game të gjerë pronash dhe
            <br />
            do të jetë në gjendje për të ofruar çdo ndihmë eksperte që ju
            <br />
            nevojitet. Ne jemi të përgatitur për të trajtuar çdo çështje apo
            <br />
            sfidë ne takim.
          </h2>
          <Link href="/al/sq/ventilim">
            <button className={styles.vButton}>VENTILIMI</button>
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
          <h1 className={styles.mp1}>HIDRAULIK</h1>
          <h1 className={styles.mp2}>
            Hidraulikët tanë të miratuar mund të ndihmojnë me të gjitha
            hidraulikun tuaj <br /> kërkesave, duke ofruar një përgjigje efikase
            për çështje të tilla <br /> si rrjedhje, bllokime dhe tualete të
            prishura. Duke vizatuar në <br /> e tyre përvojë e gjerë praktike,
            ekipi ynë mund të kryejë gjithashtu <br /> a një gamë e gjerë
            shërbimesh profesionale të instalimit hidraulik, <br /> duke mbuluar
            gjithçka nga pajisjet shtëpiake deri te <br /> dyqane të
            specializuara termike dhe maceratorë Saniflo.
          </h1>
          <Link href="al/sq/hidraulik">
            <button className={styles.mpButton}>HIDRAULIK</button>
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
          <h1 className={styles.mht}>NGROHJE</h1>
          <h2 className={styles.mht1}>
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
          <Link href="/al/sq/ngrohje-qendrore">
            <button className={styles.mhButton}>NGROHJE</button>
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
          <h1 className={styles.mc1}>KONDICIONER</h1>
          <h2 className={styles.mc2}>
            Ne mund të ofrojmë një dizajn të plotë, prodhim dhe instalim paketë{" "}
            <br />
            për të gjitha llojet e sistemeve të kondicionimit të ajrit të ndarë
            <br />
            dhe njësi për trajtimin e ajrit me kanal. Sistemet e ndarjes së
            <br />
            montuar në mur janë projektuar për të ajrosur zona të vogla dhe të
            <br />
            mesme dhe janë ideale për dyqane zyre ose aplikacione shtëpiake, Ata
            <br />
            zakonisht operohen nga një telekomandë infra-kuqe.
          </h2>
          <Link href="/al/sq/kondicioner">
            <button className={styles.mcButton}>KONDICIONER</button>
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
          <h1 className={styles.mb1}>BANJO</h1>
          <h2 className={styles.mb2}>
            Si hidraulikë me përvojë, ne mund të ndihmojmë në projektimin,
            <br />
            instalimin, riparoni dhe zëvendësoni banjat, duke vënë në
            <br /> përdorim aftësitë tona si pjesë e projektit të përmirësimit
            të
            <br /> shtëpisë tuaj . Ne kemi sukses punuar në banja të të gjitha
            madhësive <br />
            brenda një game të gjerë të pronat dhe do të jetë në gjendje të
            <br /> ofrojë çdo ndihmë eksperti ju kerkoni. Ne jemi të përgatitur
            të
            <br /> trajtojmë çdo çështje ose sfidat që hasim.
          </h2>
          <Link href="/al/sq/banjo">
            <button className={styles.mbButton}>BANJO</button>
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
          <h1 className={styles.mv1}>VENTILIM</h1>
          <h2 className={styles.mv2}>
            ne mund të ndihmojmë në projektimin, instalimin, riparimin dhe{" "}
            <br />
            zëvendësimin e Air Kushtet, duke i vënë në përdorim aftësitë tona si
            <br />
            pjesë e juaja projekt përmirësimi. Ne kemi punuar me sukses në Air
            <br />
            kushtet e të gjitha madhësive brenda një game të gjerë pronash dhe
            <br />
            do të jetë në gjendje për të ofruar çdo ndihmë eksperte që ju
            <br />
            nevojitet. Ne jemi të përgatitur për të trajtuar çdo çështje apo
            <br />
            sfidë ne takim.
          </h2>
          <Link href="/al/sq/ventilim">
            <button className={styles.mvButton}>VENTILIM</button>
          </Link>
        </div>
        <div className={styles.spacer}>
          <span></span>
        </div>
      </div>
    </div>
  );
}
