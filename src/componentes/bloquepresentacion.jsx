import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../fotos/boostrap5.png'
import imagen2 from '../fotos/react.png'
import imagen3 from '../fotos/node.png'
function UncontrolledExample() {
  return (
    <Carousel className='carrucel'>
      <Carousel.Item>
        <img className='imagen_carrucel' src={imagen1} />
        <Carousel.Caption>
          <h3>Bootstrap5</h3>
          <p>es un framework front-end utilizado para desarrollar aplicaciones web y sitios mobile first, o sea, con un layout que se adapta</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='imagen_carrucel'  src={imagen2} />

        <Carousel.Caption>
          <h3>React</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='imagen_carrucel' src={imagen3} />

        <Carousel.Caption>
          <h3>Node</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;