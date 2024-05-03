import { StaticImageData } from "next/image"
import dawnBook from "../components/images/dawn-book.jpeg"

interface PublicImagesProps {

    image : StaticImageData
}


const PublicImages: React.FC<PublicImagesProps> = ({image}) => {
   
    image = dawnBook


    const imageSource = typeof image === 'string' ? image : image.src;


    return(

        <div>
            <img src={imageSource} alt="imagen" />
        </div>

    )
}

export default PublicImages

