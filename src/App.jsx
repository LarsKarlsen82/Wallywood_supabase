import { AppRouter } from './Components/AppRouter/AppRouter';
import { Container } from './Styled/Container.style';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { Footer } from './Components/Footer/Footer';
import { NavBar } from './Components/NavBar/NavBar';
import { Grid } from './Components/Grid/Grid';
 

function App() {
  
  return (
    <>    
      <Container $maxwidth='1024'>
          <Grid>
            <Header area="header" />
            <NavBar area="navbar" />
            <Main area="main">
            <AppRouter />
            </Main>
            <Footer area="footer"/>
          </Grid>
      </Container>
    </>
  )
}

export default App;
