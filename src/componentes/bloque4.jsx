import instagram from '../fotos/redes sociales/instagram.png'
import facebook from '../fotos/redes sociales/facebook.png'
import twiter from '../fotos/redes sociales/twiter.png'
import whatsapp from '../fotos/redes sociales/whatsapp.png'
import gmail from '../fotos/redes sociales/gmail.png'
export const Bloque4=()=>{
    return(
        <>
        
        <div className="contactos">
            <div className="contactos_parrafo" id='contactos'>
                 <h1>mis redes sociales</h1>
                 <div className='contactos_parrafo_iconos'>

                <a href="https://www.instagram.com/juliocesarfuentes5144/"><img src={instagram} alt="" /></a>
                 <a href="https://www.facebook.com/juliocesar.fuentes.3958/"><img src={facebook} alt="" /></a>
                 <a href="https://wa.link/7n7x7l"><img src={whatsapp} alt="" /></a>
                 <a href="https://twitter.com/juliocesarbmx16"><img src={twiter} alt="" /></a>
                 <a href="https://juliocesarfuentesfuentes16@gmail.com"><img src={gmail} alt="" /></a>

                 </div>
                 

            </div>
           

        </div>
        </>
    );
}