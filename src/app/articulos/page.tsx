import Article from "../components/Article";
import content from '../content.json'
import dawn from '../components/images/dawn.png'


export default function Articulo () {
   const image = dawn
   const  date= content.article2.content.date
   const  title = content.article2.content.title
   const description = content.article2.content.description
   const mainContent = content.article2.content.text

    return(
        <div>
            <Article
            image={image}
            date={date}
            title={title}
            description={description}
            mainContent={mainContent}     
            />
        </div>
    )
}