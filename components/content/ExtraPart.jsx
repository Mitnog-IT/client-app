import { useState, useEffect } from "react";

const ExtraPart = () => {
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        if (typeof window !== undefined) {
            return window.addEventListener('resize', handleSize)
        }
    }, [])

    const handleSize = () => {
        setWindowSize(window.innerWidth)
    }

    return (
        <section style={{
            minHeight: '150px',
            color: '#0aa2c0',
            textAlign: 'center',
            fontFamily: '"Roboto Slab", serif',
        }}>
            <section className="container d-flex justify-content-around align-items-center"
                style={{ minHeight: '150px' }}>
                <section>
                    <small className={windowSize >= 500 && 'fs-6'}>We want to understand your business and its challenges – don’t be shy !</small>
                    <h3 className="fs-4">Please feel free to give us a shout out on <a href="mitnogit@gmail.com" style={{ color: '#0aa2c0' }}>E-mail</a>.</h3>
                </section>
            </section>
        </section>
    );
};

export default ExtraPart;