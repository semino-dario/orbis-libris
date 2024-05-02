import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card";
import CardVertical from "./components/CardVertical";
import ferrari from "./components/images/ferrari.png"

export default function Home() {
  return (
    <main className={styles.container
    }>
      <header className={styles.header}>
      <div className={styles.siteTitle}>
      <h1 className={styles.siteName}>ORBIS LIBRIS</h1>
      <p className={styles.siteSubTitle}>Libros de cualquier tiempo y lugar</p>
      </div>
      <p className={styles.about}>¿qué y quién?</p>
      </header>
      <Card
      cardType={styles.art2} 
      title="Todo de nuevo desde el principio"
      description="Una nueva historia de los orígenes de la civilización en The Dawn of Everything de David Graeber y David Wengrow"
      mainImage="https://orbislibris.com/wp-content/uploads/2022/02/Captura-de-Pantalla-2022-02-24-a-las-12.54.56.png"
      />
       <Card
      cardType={styles.art2}
      title="¿Se murió la literatura?"
      description="En torno a El Adiós a la literatura – Historia de una desvalorización – siglos XVIII -XX de William Marx"
      mainImage="https://orbislibris.com/wp-content/uploads/2021/12/header-lisbon-disaster-1536x738.jpeg"
      />
      <div className={`${styles.cita} ${styles.art2}`}>
        <p>
        Lo desconocido es una abstracción; lo conocido, un desierto; pero lo conocido a medias, lo vislumbrado, es el lugar perfecto para hacer ondular deseo y alucinación.
        </p>
        <p>
          Juan José Saer, El Entenado</p>
      </div>
      <Card
      cardType={styles.art25} 
      title="Mundos que salen de la niebla"
      description="La América precolombina en 1491 - Una nueva historia de las Américas antes de Colón de Charles C. Mann. Y un poco más..."
      mainImage="https://orbislibris.com/wp-content/uploads/2021/11/cropped-@Osky-descubrimiento-amazonas-e1637104840327.jpeg"
      />
      <CardVertical
      title="Cincuenta mil tazas de café"
      description="Literatura, deudas, amores y absoluto en Balzac – La novela de su vida de Stefan Zweig"
      mainImage="https://orbislibris.com/wp-content/uploads/2021/08/Captura-de-Pantalla-2021-07-26-a-las-19.00.17.png"
      />
      <Card
      cardType={styles.art2}
      title="Las aventuras de una idea"
      description="Un viaje a través de la concepción occidental del universo, desde Platón hasta el siglo XIX, en La Gran Cadena del Ser de Arthur O. Lovejoy"
      mainImage="https://orbislibris.com/wp-content/uploads/2021/10/Great_Chain_of_Being_2-710x1024.png"
      />
      <Card
      cardType={styles.art2}
      title="Cinabrio, psicoducto, misterio"
      description="Una ciudad devorada por la selva, una tumba olvidada y el paso de los siglos en La Reina Roja, una tumba real de Arnoldo González Cruz"
      mainImage="https://orbislibris.com/wp-content/uploads/2021/07/cropped-Captura-de-Pantalla-2021-07-15-a-las-17.51.12.png"
     />
     <Card
      cardType={styles.art2}
      title="Una novela escrita a mil manos"
      description="El Siglo XVIII en Francia, las Luces y sus egos en Las Pasiones Intelectuales de Élisabeth Badinter"
      mainImage="https://orbislibris.com/wp-content/uploads/2021/06/Portrait-of-a-Man-reclining-on-a-Sofa-reading-Francois-Xavier-Vispre-1730-after-1794-1.jpg"
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
      mainImage="https://orbislibris.com/wp-content/uploads/2021/04/isis-portada.jpg"
     />

     <Card
      cardType={styles.art2}
      title="Su alma es legión"
      description="Voces y dioses en Freshwater de Akwaeke Emezi"
      mainImage="https://orbislibris.com/wp-content/uploads/2021/04/freshwater2.jpg"
     />
     <div className={styles.footer}>
     <img className={styles.closeImage} src="https://orbislibris.com/wp-content/uploads/2021/04/cropped-hoja-de-guarda-piscodelica.png" alt="" />
     <p className={styles.footerText}>
     Orbis Libris es un sitio creado y administrado por Darío Semino. En la sección de información del sitio se muestra una foto de la hoja de guarda típica de la colección de libros Robin Hood, con la cual muchas generaciones se iniciaron en la lectura, la foto está tomada de Los Tigre de la Malasia  de Emilio Salgari. Orbis Libris comenzó a estar en línea en el mes de abril de MMXXI, segundo año de la Gran Pandemia que asoló el orbe y le recordó a los frágiles humanos el consuelo de los libros.     </p>
     </div>
      </main>
  );
}
