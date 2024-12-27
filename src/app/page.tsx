import styles from './page.module.scss';
import Card from "./components/Card";
import CardVertical from "./components/CardVertical";
import ferrari from "./components/images/ferrari.png"
import emezi from "./components/images/emezi.png"
import idea from "./components/images/idea.png"
import isis from "./components/images/isis.png"
import milManos from "./components/images/mil-manos.jpeg"
import reina from "./components/images/reina.png"
import vautrin from "./components/images/vautrin.png"
import oski from "./components/images/oski.jpeg"
import guarda from "./components/images/hoja-de-guarda.png"
import aboutLogo from "./components/images/about-logo.png" 
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
      <div className={styles.siteTitle}>
      <h1 className={styles.siteName}>ORBIS LIBRIS</h1>
      <p className={styles.siteSubTitle}>Libros de cualquier tiempo y lugar</p>
      </div>
      <Link href="./acerca" className={styles.about}><img style={{width:"12rem"}} src={aboutLogo.src} alt="" /></Link>
      </header>
   <main className={styles.container} style={{paddingTop:"2rem"}}>
      <Card
   
      cardType={styles.art2} 
      title="Todo de nuevo desde el principio"
      description="Una nueva historia de los orígenes de la civilización en <strong><i>The Dawn of Everything</i></strong> de David Graeber y David Wengrow"
      mainImage="https://res.cloudinary.com/dsw6fpqoz/image/upload/fl_preserve_transparency/v1714766089/dawn_ul5a8p.jpg?_s=public-apps"
      link="todo-de-nuevo-desde-el-principio"
      />
       <Card
      cardType={styles.art2}
      title="¿Se murió la literatura?"
      description="En torno a <strong><i>El Adiós a la literatura – Historia de una desvalorización</i></strong> de William Marx"
      mainImage="https://res.cloudinary.com/dsw6fpqoz/image/upload/v1714766380/marx_fyutpn.jpg"
      link="se-murio-la-literatura"
     />
      <div className={`${styles.cita} ${styles.art2}`}>
        <p> <i>
        Lo desconocido es una abstracción; lo conocido, un desierto; pero lo conocido a medias, lo vislumbrado, es el lugar perfecto para hacer ondular deseo y alucinación.</i>
        </p>
        <p>
          Juan José Saer, El Entenado</p>
      </div>
      <Card
      cardType={styles.art25} 
      title="Mundos que salen de la niebla"
      description="La América precolombina en <i><strong>1491 - Una nueva historia de las Américas antes de Colón</i></strong> de Charles C. Mann."
      mainImage={oski}
      link="mundos-que-salen-de-la-niebla"

      />
      <CardVertical
      title="Cincuenta mil tazas de café"
      description="Literatura, deudas, amores y absoluto en <i><strong>Balzac – La novela de su vida</i></strong> de Stefan Zweig"
      mainImage={vautrin}
      link="cincuenta-mil-tazas-de-cafe"
      
      />
      <Card
      cardType={styles.art2}
      title="Las aventuras de una idea"
      description="Un viaje a través de la concepción del universo, desde Platón hasta el siglo XIX, en <i><strong>La Gran Cadena del Ser</i></strong> de Arthur O. Lovejoy"
      mainImage={idea}
      link="las-aventuras-de-una-idea"

      />
      <Card
      cardType={styles.art2}
      title="Cinabrio, psicoducto, misterio"
      description="Una ciudad devorada por la selva en <i><strong>La Reina Roja, una tumba real</i></strong> de Arnoldo González Cruz"
      mainImage={reina}
      link="cinabrio-psicoducto-misterio"
      imgPosition={styles.imgLeft}


     />
     <Card
      cardType={styles.art2}
      title="Una novela escrita a mil manos"
      description="El Siglo XVIII en Francia, las Luces y sus egos en <i><strong>Las Pasiones Intelectuales</i></strong> de Élisabeth Badinter"
      mainImage={milManos}
      link="una-novela-escrita-a-mil-manos"
      imgPosition={styles.imgLeft}


     />
     <Card
      cardType={styles.art3}
      title="El canto de los brujos"
      description="Chamanismo, selva y narrativa en <i><strong>Las tres mitades de Ino Moxo</i></strong> de César Calvo"
      mainImage={ferrari}
      link="el-canto-de-los-brujos"

     />
     <Card
      cardType={styles.art2}
      title="La lectura como modo de vida"
      description="Historia de la naturaleza en <i><strong>El velo de Isis</i></strong> de Pierre Hadot"
      mainImage={isis} 
      link="la-lectura-como-modo-de-vida"
      imgPosition={styles.imgTop}


      />

     <Card
      cardType={styles.art2}
      title="Su alma es legión"
      description="Voces y dioses en <i><strong>Freshwater</i></strong> de Akwaeke Emezi"
      mainImage={emezi}
      link="su-alma-es-legion"
      imgPosition={styles.imgRight}
     />
     <Footer
     mainImage={guarda}
     />
      </main>
      <div>
      </div>
     
      </div>
  );
}
