import Carousel from 'react-bootstrap/Carousel';

function Carrousel() {
    return (
        <Carousel className='mx-auto' style={{maxWidth: '75%'}}>
            <Carousel.Item>
            <img
                className="d-block w-100 carrousel-image"
                src="https://pensemosverdedotcom.files.wordpress.com/2017/06/imagen-destacada7.jpg?w=1200"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Aceleramiento del derretimiento de los polos</h3>
                <p>Sabías que los polos están experimentando un derretimiento acelerado en las últimas décadas. Se estima que la tasa de derretimiento de la capa de hielo de Groenlandia se ha duplicado desde la década de 1990.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100 carrousel-image"
                src="https://smd-prod.s3.amazonaws.com/ciencia-red/s3fs-public/styles/background_image_file_size/public/thumbnails/image/permafrost_usgs.jpeg?itok=2Zen7xEc"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Liberación de gases de efecto invernadero</h3>
                <p>El derretimiento del permafrost (suelo permanentemente congelado) en el Ártico puede liberar grandes cantidades de gases de efecto invernadero, como el metano, a la atmósfera. Esto podría acelerar aún más el cambio climático.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100 carrousel-image"
                src="https://news.agrofystatic.com/clima_en_el_mundo_fyo_argentina.jpg?d=620x375"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Cambios en los patrones climáticos</h3>
                <p>El derretimiento de los polos puede influir en los patrones climáticos globales. Puede afectar a las corrientes oceánicas y la circulación atmosférica, lo que a su vez puede tener efectos impredecibles en el clima de diferentes regiones del mundo.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel;