import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import style from '../components/NavBar.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} id={style.sidebarWrapper}>
            <NavBar></NavBar>
          </Col>
          <Col xs={10} id={style.pageContentWrapper}>
            <Component {...pageProps} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyApp;
