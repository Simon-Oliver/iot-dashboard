import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
