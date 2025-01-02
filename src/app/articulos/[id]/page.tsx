import Footer from "@/app/components/Footer";
import Article from "../../components/Article";
import content from '../../content.json'
type ContentKey = keyof typeof content;


export default function Articulo ({params}: {params: {id: string }}) {

 const datafetch = params.id as ContentKey
 const data = content[datafetch].content

const image = data.image
   const date = data.date
   const  title = data.title
   const description = data.description
   const mainContent = data.text

    return(
        <div>
            <Article
            image={image}
            date={date}
            title={title}
            description={description}
            mainContent={mainContent}
            url={`https://orbislibris.com/articulos/${params.id}`}     
            />
        </div>
    )
}