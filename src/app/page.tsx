import styles from "./page.module.css";
import Card from "./components/Card";
import CardVertical from "./components/CardVertical";
import ferrari from "./components/images/ferrari.png"
import emezi from "./components/images/emezi.png"
import dawn from "./components/images/dawn.png"
import idea from "./components/images/idea.png"
import isis from "./components/images/isis.png"
import marx from "./components/images/marx.jpeg"
import milManos from "./components/images/mil-manos.jpeg"
import reina from "./components/images/reina.png"
import vautrin from "./components/images/vautrin.png"
import oski from "./components/images/oski.jpeg"
import guarda from "./components/images/hoja-de-guarda.png"
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container
    }>
      <header className={styles.header}>
      <div className={styles.siteTitle}>
      <h1 className={styles.siteName}>ORBIS LIBRIS</h1>
      <p className={styles.siteSubTitle}>Libros de cualquier tiempo y lugar</p>
      </div>
      <Link href="./acerca" className={styles.about}>¿qué y quién?</Link>
      </header>
      <Card
      cardType={styles.art2} 
      title="Todo de nuevo desde el principio"
      description="Una nueva historia de los orígenes de la civilización en The Dawn of Everything de David Graeber y David Wengrow"
      mainImage={dawn}
      />
       <Card
      cardType={styles.art2}
      title="¿Se murió la literatura?"
      description="En torno a El Adiós a la literatura – Historia de una desvalorización – siglos XVIII -XX de William Marx"
      mainImage={marx}
      />
      <div className={`${styles.cita} ${styles.art2}`}>
        <p>
        "Lo desconocido es una abstracción; lo conocido, un desierto; pero lo conocido a medias, lo vislumbrado, es el lugar perfecto para hacer ondular deseo y alucinación."
        </p>
        <p>
          Juan José Saer, El Entenado</p>
      </div>
      <Card
      cardType={styles.art25} 
      title="Mundos que salen de la niebla"
      description="La América precolombina en 1491 - Una nueva historia de las Américas antes de Colón de Charles C. Mann. Y un poco más..."
      mainImage={oski}
      />
      <CardVertical
      title="Cincuenta mil tazas de café"
      description="Literatura, deudas, amores y absoluto en Balzac – La novela de su vida de Stefan Zweig"
      mainImage={vautrin}
      />
      <Card
      cardType={styles.art2}
      title="Las aventuras de una idea"
      description="Un viaje a través de la concepción occidental del universo, desde Platón hasta el siglo XIX, en La Gran Cadena del Ser de Arthur O. Lovejoy"
      mainImage={idea}
      />
      <Card
      cardType={styles.art2}
      title="Cinabrio, psicoducto, misterio"
      description="Una ciudad devorada por la selva, una tumba olvidada y el paso de los siglos en La Reina Roja, una tumba real de Arnoldo González Cruz"
      mainImage={reina}
     />
     <Card
      cardType={styles.art2}
      title="Una novela escrita a mil manos"
      description="El Siglo XVIII en Francia, las Luces y sus egos en Las Pasiones Intelectuales de Élisabeth Badinter"
      mainImage={milManos}
     />
     <Card
      cardType={styles.art3}
      title="El canto de los brujos"
      description="Chamanismo, selva y narrativa en Las tres mitades de Ino Moxo de César Calvo"
      mainImage={ferrari}
     />
     <Card
      cardType={styles.art2}
      title="La lectura como modo de vida"
      description="Historia de la naturaleza en El velo de Isis de Pierre Hadot"
      mainImage={isis} />

     <Card
      cardType={styles.art2}
      title="Su alma es legión"
      description="Voces y dioses en Freshwater de Akwaeke Emezi"
      mainImage={emezi}
     />
     <Footer
     mainImage={guarda}
     />
      </main>
  );
}
