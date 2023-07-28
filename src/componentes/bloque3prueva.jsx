import { Targetas2 } from "./targetas2";
import proyecto1 from "../fotos/imgproyectos/proyecto1.png";
import proyecto2 from "../fotos/imgproyectos/proyecto2.png";
import proyecto3 from "../fotos/imgproyectos/proyecto3.png";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const cards=[
  { id:1,
    imagen:proyecto1,
    titulo:'proyecto1',
    parrafo:'Proyecto de prueva con un curso de React . Es un generador de imagenes gif responsivo y adaptativo para movil ',
    link:'https://gift-react-prueba.netlify.app'

  },
  { id:2,
    imagen:proyecto2,
    titulo:'proyecto2',
    parrafo:'Proecto de prueva de un curso de react y node . Es un generador de tareas Crea , Elimina y actuliza para pc y movil',
    link:'https://tareas-react-node.netlify.app'

  },
  {  id:3,
     imagen:proyecto3,
    titulo:'proyecto3',
    parrafo:'Es un proyecto aserca de mi portafolio de lengujes y programas creados con los lenguajes aprendidos hasta hoy',
    link:'https://presentacion-react-proyectos.netlify.app'

  },



]

export const Bloque3p=()=>{

    return(
            <div className="proyectos">
                    <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
         
        
      >
        
        { cards.map(card =>(
                    <SwiperSlide className="swiperSlide"  key={card.id}>
                        <div className="targetas2" key={card.id}>
                          <a href={card.link}><img src={card.imagen} alt={card.titulo}></img></a>
                          <h2>{card.titulo}</h2>
                          <p>{card.parrafo}</p>
                        </div>
                               
                    </SwiperSlide>
                ))}

        
  
      </Swiper>
    
                
           </div>
    );
}


