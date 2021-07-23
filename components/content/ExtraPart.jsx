import { useState, useEffect } from "react";
import style from '../../styles/Query.module.css';

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
        <section className={style.container}>
            <section className="container d-sm-flex justify-content-sm-around align-items-center"
                style={{ height: '150px' }}
            >
                <h4 className={windowSize <= 500 && 'fs-6 pt-4 pb-3'}><b>HAVE SOME QUESTIONS ABOUT OUR WORK ?</b></h4>
                <button className={style.btn}>Ask more</button>
            </section>
        </section >
    );
};

export default ExtraPart;