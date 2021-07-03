import style from '../../styles/Welcome.module.css';
import Typist from 'react-text-typist';

const Welcome = () => {

    return (
        <section className={style.container}>
            <div className={style.content}>
                <h1>Our Tech Your Future</h1>
                <br /> <h3 >
                    <b><Typist sentences={
                        ['Digital Marketing', 'Web Development', 'Graphic Design']
                    }
                        onChange={(e) => console.log(e.target.value)}
                        typingSpeed={100}
                        loop={true} /></b>
                </h3>
            </div>
        </section>
    );
};

export default Welcome;