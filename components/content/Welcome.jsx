import { useEffect, useState } from 'react';
import style from '../../styles/Welcome.module.css';
import Typist from 'react-text-typist';

const Welcome = () => {
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
            <section className={style.content}>
                <h1 className={windowSize <= 500 && 'fs-1'}>Our Tech Your Future</h1>
                <br /> <h3 className={windowSize <= 500 && 'fs-2'}>
                    <b><Typist sentences={
                        ['Digital Marketing', 'Web Development', 'Graphic Design']
                    }
                        typingSpeed={100}
                        loop={true} /></b>
                </h3>
            </section>
        </section>
    );
};

export default Welcome;