import style from '../styles/Layout.module.css'
import NavBar from './content/NavBar';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Layout = ({ children }) => {
    return (
        <main className={style.container}>
            <NavBar />
            {children}
            <MessengerCustomerChat
                pageId="105753884733982"
                appId="631074661202629"
            />
        </main>
    );
};

export default Layout;
