import imagen1 from "../fotos/imgproyectos/proyecto1.png";

export const Targetas2=({imagen,titulo,parrafo,link})=>{
    return(
         <>
            <a href={link}><img src={imagen} alt={titulo}></img></a>
            <p>{parrafo}</p>
             
            
     
         </>

    );
}

