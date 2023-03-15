import React from 'react';

// Context
import { ContextProvider } from './context'

// Global Styles
import GlobalStyle from './styles/global'

// Guide Styles
import './styles/guide/index.css'

// Components
import TaskBar from './components/TaskBar';
import Menu from './components/Menu';
import Widgets from './components/Widgets';
import { Container } from './components/Container';

function App() {
  
  return (<>
    <GlobalStyle />
    <ContextProvider>
      <Container>
        <Menu />
        <Widgets />
      </Container>
      <TaskBar />
    </ContextProvider>
  </>
  );
}

export default App;