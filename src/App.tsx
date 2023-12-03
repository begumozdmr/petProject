import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { useLocation } from 'react-router-dom';
import Router from 'router/Router';

function App() {

  const location = useLocation();
  console.log(location.pathname)
  
  return (
    <>
      <Navbar />
      <Router />
      {
        location.pathname === "*" || location.pathname==="/404" ?
          ""
          :
          <Footer />
      }

    </>
  );
}

export default App;
