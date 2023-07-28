import { Targetas } from "./targetas1";
import prinsipal from "../fotos/lenguajes/principal3.png";
import imagen1 from "../fotos/lenguajes/html.png";
import imagen2 from "../fotos/lenguajes/css.png";
import imagen3 from "../fotos/lenguajes/js.png";
import imagen4 from "../fotos/lenguajes/react.png";
import imagen5 from "../fotos/lenguajes/node.png";
import imagen6 from "../fotos/lenguajes/python.png";
import imagen7 from "../fotos/lenguajes/java.png";
import imagen8 from "../fotos/lenguajes/cnumeral.png";





const cards =[
    { id:1,
      img:imagen1,
      titulo:'html',
      parrafo:'HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web.' 
    },


    {id:2,
      img:imagen2,
      titulo:'css',
      parrafo:'CSS está diseñado principalmente para marcar la separación del contenido del documento y la forma de presentación de este.'
    },

    {id:3,
      img:imagen3,
      titulo:'js',
      parrafo:'JavaScript se diseñó con una sintaxis similar a C++ y Java,5​6​ aunque adopta nombres y convenciones del lenguaje de programación Java.'
    },

    {id:4,
      img:imagen4,
      titulo:'react',
      parrafo:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI.'
    },
    { id:5,
      img:imagen5,
      titulo:'html',
      parrafo:'HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web.' 
    },


    {id:6,
      img:imagen6,
      titulo:'css',
      parrafo:'CSS está diseñado principalmente para marcar la separación del contenido del documento y la forma de presentación de este.'
    },

    {id:7,
      img:imagen7,
      titulo:'js',
      parrafo:'JavaScript se diseñó con una sintaxis similar a C++ y Java,5​6​ aunque adopta nombres y convenciones del lenguaje de programación Java.'
    },

    {id:8,
      img:imagen8,
      titulo:'react',
      parrafo:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI.'
    }

]



export const Bloque2=()=>{
    return(
       <div className="centro_lenguajes" id="lenguajes">
         <div className="contenedor_targetas">
            {
                cards.map(card =>(
                    <div className="targetas" key={card.id}>
                        <Targetas imagen={card.img} titulo={card.titulo} parrafo={card.parrafo} />
                    </div>
                ) )
            }
          </div>
          <div className="imagen_prinsipal">
             <img src={prinsipal}></img>
          </div>
     
                   
       </div>

    );
}