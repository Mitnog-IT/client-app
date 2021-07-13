import { ButtonGroup, Button } from 'react-bootstrap';
import style from '../../styles/Fortfolio.module.css';

const Portfolio = () => {
    return (
        <section id="capacity" style={{
            fontFamily: '"Roboto Slab", serif',
            paddingTop: '30px',
            overflow: 'hidden',
        }}>
            <div className="text-center">
                <h3>Our Portfolio</h3>
                {/* <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6> */}
            </div>
            <div className="d-flex justify-content-center">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">All</Button>
                    <Button variant="secondary">Web Development</Button>
                    <Button variant="secondary">Digital Marketing</Button>
                    <Button variant="secondary">Graphic Design</Button>
                </ButtonGroup>
            </div>

        </section>
    );
};

export default Portfolio;