import styles from '../../app/page.module.scss'
import LinkButton from '../components/LinkButton'
import Header from '../components/Header'


export default function Acerca () {
    return(
        <main className={styles.containerTexts}>
            <Header/>
           <article className={styles.aboutText}>
            <h1>¿Qué?</h1>
            <p>
            Orbis Libris es un proyecto que se propone leer y comentar libros sin restricciones de especialidad ni ambiciones de generalización, con la intención de tratar a la lectura como la más íntima expresión del asombro. <br /> <br />
            Aprovechando el colapso de los criterios literarios, estéticos y filosóficos que se producen a partir de los cambios en las formas de generar y apreciar textos, la idea es escabullirse entre géneros y formatos, temporalidades y latitutes, e incluso espiar a través de las rendijas de idiomas y disciplinas ajenas, para buscar historias, filosofías y símbolos que motiven el comentario, la deriva, el festejo de su hallazgo. <br /> <br />
            La brújula está confeccionada con una equilibrada aleación de intuición y curiosidad. La metafísica, la aventura y el engarce de las ideas en el mundo podrían ser los ejes temáticos no excluyentes. Y los artículos procurarán estar escritos con un rigor que les permita respirar y una variedad de recursos que no disemine su identidad particular. La premisa es el desplazamiento, no la mezcla, se podrá ir de lo bajo a lo alto, o viceversa, a condición de respetar cada espacio y de hacer lo posible por entender los modos y códigos de cada lugar. <br /> <br />
                En resumen, hablar de libros como se habla de los viajes que uno quiere contarle a los amigos, sin ánimo de cartografiar ni de saberlo todo, intentando transmitir misterios y certezas, queriendo invocar la experiencia para invitar a realizarla.
            </p>
            </article>
            <article className={styles.aboutText}>
                <h1>¿Quién?</h1>
            <p>Mi nombre es Darío Semino, nací en 1981 en Buenos Aires. Soy lector y escritor. Realicé sin terminar estudios de Letras y Cine, además de diversos cursos sobre filosofía y otros oficios útiles para el quehacer literario. Publiqué algunos títulos de manera independiente y realicé trabajos de edición, periodismo y teatro, participé de la organización de diversas actividades culturales y, sobre todo, ejercí el cruel y querido oficio de librero. Durante casi diez años trabajé en la librería La Libre de Buenos Aires, extraño cruce de caminos donde quienes atienden muchas veces se encargan de reseñar los libros que venden, de ese hábito viene la idea de Orbis Libris.
                Salvo que se aclare lo contrario, todos los textos que se publican aquí son culpa mía. Si encontrás algún error en alguno de los artículos o querés realizar algún comentario, o por cualquier otra cosa que quieras contactarme, podés escribir a orbislibriscontacto@gmail.com.</p>
            </article>
            <LinkButton
            text="- volver -"
            href="/"
            />
        </main>
    )
}