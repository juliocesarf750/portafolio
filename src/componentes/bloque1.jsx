
import React from "react";
import foto from "../fotos/fotodelprogramador6.png";
export const Bloque1=()=>{


    return(
      <>
      
       
       <div className="pie_pagina" id="inicio">
       
           <div className="parrafo_pie_pagina">
              <h1>PRESENTACIÓN</h1>
              <p>soy un desarrollador en curso no tengo experiencia en demas pasantias por lo que quiero aprender de que se trata el negosio yo actualmente estoy cursando el 6to semestre de ing informatica siguiendo cursos y soy autodidacta.</p>
           </div>
           <div className="foto_pie_pagina">
              <img src={foto}></img>
           </div>
       </div>
       <div style={{ height: '150px' ,width:'100%', overflow: 'hidden'}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M-6.58,69.59 C150.00,149.98 280.10,4.48 505.84,86.37 L500.01,0.01 L0.00,0.01 Z" style={{stroke: 'none' ,fill:'#0066b3'}}></path></svg></div>
       </>
    );
    
};