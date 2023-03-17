import React from 'react';

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

function App() {
  
  return (<>
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