import style from '../../styles/Welcome.module.css';
import Typist from 'react-text-typist';

const Welcome = () => {

    return (
        <section className={style.container}>
            <section className={style.content}>
                <h1>Our Tech Your Future</h1>
                <br /> <h3 >
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