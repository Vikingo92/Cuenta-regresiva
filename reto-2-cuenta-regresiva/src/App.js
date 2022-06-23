import GlobalStyles from './components/styles/Global';
import { Container, Background } from './components/Container';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <>
        <GlobalStyles />
        <Background>
          <Container>
            <Card />
            <Footer />
          </Container>
        </Background>
      </>
    </div>
  );
}

export default App;
