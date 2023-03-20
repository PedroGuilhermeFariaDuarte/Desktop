// Context
import { ContextProvider } from './context'

// Fonts
import './styles/fonts/index.css'

// Global Styles
import GlobalStyle from './styles/global'

// Guide Styles
import './styles/guide/index.css'

// Components
import TaskBar from './components/TaskBar';
import Menu from './components/Menu';
import { Container } from './components/Container';
import { Warning } from './Warning';

function App() {
  
  return (<>
    <Warning>
      <hgroup>
        <h1>:(</h1>
        <h5>O sistema foi carregado incorretamente ou parou de responder para dispositivos moveis</h5>
        <h6>Codigo do erro: #BUG_DEVICE_PHONE</h6>
      </hgroup>
    </Warning>
    <GlobalStyle />
    <ContextProvider>
      <Container>
        <Menu />        
      </Container>
      <TaskBar />
    </ContextProvider>
  </>
  );
}

export default App;