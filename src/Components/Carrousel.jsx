import Carousel from 'react-bootstrap/Carousel';

function Carrousel() {
    return (
        <Carousel className='w-75'>
            <Carousel.Item>
            <img
                className="d-block w-100 "
                src="https://cdn.hswstatic.com/gif/polar-bear-7.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cf.ltkcdn.net/kids/images/orig/305517-1600x1066-polar-bear-on-rock.jpg"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://static.dw.com/image/66575809_605.webp"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel;



// https://cdn.hswstatic.com/gif/polar-bear-7.jpg
// https://cf.ltkcdn.net/kids/images/orig/305517-1600x1066-polar-bear-on-rock.jpg