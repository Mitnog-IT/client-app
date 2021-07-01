import style from '../styles/Layout.module.css'
import NavBar from './content/NavBar';

const Layout = ({ children }) => {
    return (
        <main className={style.container}>
            <NavBar />
            {children}
        </main>
    );
};

export default Layout;
