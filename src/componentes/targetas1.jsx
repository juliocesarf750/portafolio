



export const Targetas=({imagen,titulo,parrafo})=>{
     return( 
        <>
            <img src={imagen} alt={titulo}/>
            <p>{parrafo}</p>
        </>
     );
}