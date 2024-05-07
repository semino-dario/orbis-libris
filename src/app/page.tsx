import styles from "./page.module.css";
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
      mainImage="https://res.cloudinary.com/dsw6fpqoz/image/upload/fl_preserve_transparency/v1714766089/dawn_ul5a8p.jpg?_s=public-apps"
      link="todo-de-nuevo-desde-el-principio"
      />
       <Card
      cardType={styles.art2}
      title="¿Se murió la literatura?"
      description="En torno a El Adiós a la literatura – Historia de una desvalorización – siglos XVIII -XX de William Marx"
      mainImage="https://res.cloudinary.com/dsw6fpqoz/image/upload/v1714766380/marx_fyutpn.jpg"
      link="se-murio-la-literatura"
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
      mainImage={oski}
      link="mundos-que-salen-de-la-niebla"

      />
      <CardVertical
      title="Cincuenta mil tazas de café"
      description="Literatura, deudas, amores y absoluto en Balzac – La novela de su vida de Stefan Zweig"
      mainImage={vautrin}
      link="cincuenta-mil-tazas-de-cafe"
      
      />
      <Card
      cardType={styles.art2}
      title="Las aventuras de una idea"
      description="Un viaje a través de la concepción occidental del universo, desde Platón hasta el siglo XIX, en La Gran Cadena del Ser de Arthur O. Lovejoy"
      mainImage={idea}
      link="las-aventuras-de-una-idea"

      />
      <Card
      cardType={styles.art2}
      title="Cinabrio, psicoducto, misterio"
      description="Una ciudad devorada por la selva en La Reina Roja, una tumba real de Arnoldo González Cruz"
      mainImage={reina}
      link="articulos/2"

     />
     <Card
      cardType={styles.art2}
      title="Una novela escrita a mil manos"
      description="El Siglo XVIII en Francia, las Luces y sus egos en Las Pasiones Intelectuales de Élisabeth Badinter"
      mainImage={milManos}
      link="articulos/2"

     />
     <Card
      cardType={styles.art3}
      title="El canto de los brujos"
      description="Chamanismo, selva y narrativa en Las tres mitades de Ino Moxo de César Calvo"
      mainImage={ferrari}
      link="articulos/2"

     />
     <Card
      cardType={styles.art2}
      title="La lectura como modo de vida"
      description="Historia de la naturaleza en El velo de Isis de Pierre Hadot"
      mainImage={isis} 
      link="articulos/2"

      />

     <Card
      cardType={styles.art2}
      title="Su alma es legión"
      description="Voces y dioses en Freshwater de Akwaeke Emezi"
      mainImage={emezi}
      link="articulos/2"

     />
     <Footer
     mainImage={guarda}
     />

     <div>
     <h2>Bibliografía</h2><ol> <li><p>La edición original en inglés realizada por Harvard University Press está en internet. Es la versión que utilicé para el artículo. Se puede ver aquí:</p><a href='https://ia600704.us.archive.org/25/items/ArthurO.LovejoyTheGreatChainOfBeing/Arthur%20O.%20Lovejoy%20-%20The%20Great%20Chain%20of%20Being.pdf'>archive.org</a></li><li><p>Aquí se puede ver un resumen más extenso del libro:</p><a href='https://entenderelmundocom.files.wordpress.com/2018/04/lagrancadenadelser_lovejoy-v2.pdf'>entenderelmundo.com</a></li><li><p>Aquí una reseña más reciente:</p><a href='Book Review and Reflection: Arthur Lovejoy’s “The Great Chain of Being”'>Book Review and Reflection: Arthur Lovejoy’s “The Great Chain of Being”</a></li><li><p>Aquí se puede ver un artículo sobre las críticas que recibió el libro después de su publicación: <i>Lovejoy’s The Great Chain of Being after Fifty Years, Daniel J. Wilson, Journal of the History of Ideas, Vol. 48, No. 2 (Apr. – Jun., 1987), pp. 187-206 (20 pages)</i>. Se puede descargar en PDF aquí:</p> <a href='https://www.jstor.org/stable/2709553?seq=1'>jston.org</a> </li><li><p>Aquí unos artículos que hablan de la continuidad de la Cadena del Ser en el evolucionismo actual:</p><a href='https://www.nature.com/articles/435429a'>nature.com</a> <br /><a href='https://evolution-outreach.biomedcentral.com/articles/10.1186/1936-6434-6-18'>evolution-outreach.biomedcentral.com</a></li><li><p>Aquí se puede descargar un libro entero dedicado principalmente al problema del principio de plenitud en Santo Tomás, de la autora venezolana María Guadalupe Llanes: <br /> <a href='https://www.unimet.edu.ve/wp-content/uploads/2019/10/El-Principio-de-plenitud-en-el-pensamiento-antiguo-y-de-la-Edad-Media.pdf'>unimet.edu.ve</a></p></li><li></li><li><p>Con respecto al Timeo copio abajo el párrafo que ilustra a la perfección la lectura que realiza Lovejoy. En el texto original la palabra utilizada es agathos, la cual significa “bueno” y funciona como su equivalente en castellano para referir lo bueno en todos sus sentidos. En la última línea, cuando se habla del “óptimo”, la palabra en el original es aristos, la cual funciona como un superlativo de agathos. </p><p>“<i>Resumiendo, los primeros filósofos son los que instauran un plano de inmanencia como un tamiz tendido sobre el caos. Se oponen en este sentido a los Sabios, que son personajes de la religión, sacerdotes, porque conciben la instauración de un orden siempre trascendente, impuesto desde fuera por un gran déspota o por un dios superior a los demás, a imagen de Eris, tras guerras que superan cualquier agón y odios que recusan de antemano los desafíos de la rivalidad.’ Hay religión cada vez que hay trascendencia, Ser vertical, Estado imperial en el cíelo o en la tierra, y hay Filosofía cada vez que hay inmanencia, aun cuando sirva de ruedo al agón y a la rivalidad.</i>” ¿Qué es la filosofía? Gilles Deleuze y Félix Guattari, Ed. Anagrama p. 47</p></li> <li> <p>La cita final corresponde al libro: <i> Los evangelios judíos, la historia del Cristo judío</i> de Daniel Boyarin, editado por Lilmod y Prometeo Libros, 2016. p. 54.</p></li><li><p>Aquí agrego los links de la página y del blog del Journal of History of Ideas fundado inicialmente por Lovejoy en 1940 y que todavía sigue en actividad:</p><br /><a href='https://jhi.pennpress.org/home/'>jhi.pennpress.org</a><br /><a href='https://jhiblog.org'>jhiblog.org</a></li><li><p>La imagen inicial está tomada del libro <i>Rhetorica Christiana</i>, realizado por Fray Diego Valadés, publicado en 1579. Fray Diego Valadés fue un misionero franciscano que ofició de historiador, lingüista, grabador y políglota. Nacio en Nueva España, hijo de un conquistador y de una mujer tlaxcalteca. Fue el primer mexicano en publicar un libro en España.</p></li> </ol> </div>

      </main>
  );
}
