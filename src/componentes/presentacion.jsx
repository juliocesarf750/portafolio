import React from "react";
import { Bloque1 } from "./bloque1";
import { Bloque2 } from "./bloque2";
import { Bloque3 } from "./bloque3";
import { Bloque3p } from "./bloque3prueva";
import { Bloque4 } from "./bloque4";
import UncontrolledExample from "./bloquepresentacion";
import NavScroll from "./navbar";





export const Cabeza=()=>{
    return(
     <div className="pagina_prinsipal"> 
            
           
           <NavScroll logo={'Portafolio'} ruta1={'#inicio'} nombre_ruta1={'Inicio'} ruta2={'#lenguajes'} nombre_ruta2={'Lenguajes'} ruta3={''}  ruta4={'#contactos'} nombre_ruta4={'Contactos'} ruta5={'#proyectos'} nombre_ruta5={'Proyectos'}/>
            
            
          
          <Bloque1/>
          
          <div className="titulo_bloques">
              <h1 id="lenguajes">Lenguajes</h1>
              <p>Esto es un parrafo de lo que vendra mas adelante de los lenguajes de programacion</p>
          </div>
          <Bloque2/> 
          <div className="titulo_bloques">
              <h1 id="proyectos">Proyectos</h1>
              <p>Esto es un parrafo de lo que vendra mas adelante de los proyectos de programacion</p>
          </div>
          <Bloque3p/>
          
          <Bloque4/>
      </div>
      




     
       
    );
}