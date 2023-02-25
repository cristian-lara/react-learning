
export const GifGridItemComponent = ({title, url}: any)=> (
 <>
     <div className="card" >
         <img src={url} alt={title}/>
         <p>{title}</p>
     </div>

 </>
    
)
