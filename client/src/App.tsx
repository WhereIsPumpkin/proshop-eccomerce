import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const App = () => {
  axios.defaults.baseURL = 'http://localhost:5000';

  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
