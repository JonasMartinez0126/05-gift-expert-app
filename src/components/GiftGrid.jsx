import { GiftGridItem } from "./GiftGridItem";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifts(category);
    
  return (
    <>
        <h3>{ category }</h3>
        
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
            {
              images.map((image) => (
                <GiftGridItem  
                  key={ image.id}
                  { ...image }
                />
              ))
            }
        </div>
    </>
  )
}
