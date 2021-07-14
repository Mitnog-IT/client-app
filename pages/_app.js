import Layout from '../components/Layout';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <MessengerCustomerChat
        pageId="105753884733982"
        appId="631074661202629"
      />
    </Layout>
  )
}

export default MyApp
