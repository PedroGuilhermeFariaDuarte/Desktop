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
  function handlerBarcode() {
    try {
      const references = [
        {
          name: 'Joia',
          code: '000',
          description: 'product'
        },
        {
          name: 'Vendedor',
          code: '999',
          description: 'seller'
        },
        {
          name: 'Sudeste',
          code: '888',
          descrtption: 'place_origin'
        },
        {
          name: 'Sudeste',
          code: '333',
          description: 'place_destiny'
        },
        {
          name: 'Sudeste',
          code: '555',
          description: 'owner'
        }
      ]

      const referencesFounded: Array<any> = []

      const barCode = [
        {
          barcode: '888333555999000',
          // Separando o codigo de barras em grupos de três caracteres
          barCodeParsed: '888333555999000'?.replace(/(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1.$2.$3.$4.$5').split('.') || []
          // Outros dados, por exemplo: vendedor: Khrono222
        }
      ]

      if (references.length <= 0) {
        throw new Error('Nenhuma referência foi definida')
      }

      // Percorre as referencias
      for (let i = 0; i <= references.length; i++) {
        const reference = references[ i ]
        for (let j = 0; j <= barCode.length; j++) {
          // Verifica se o codigo foi lido
          if (barCode[ j ]?.barCodeParsed.length <= 0) {
            continue
          }

          for (let w = 0; w <= barCode[ j ]?.barCodeParsed?.length; w++) {
            // Verifica se o codigo existe
            if (barCode[ j ]?.barCodeParsed[ w ] === reference?.code) {
              referencesFounded.push(reference)
            }
          }
        }
      }

      console.log('Result: ', referencesFounded)

      return ''
    } catch (error) {
      console.log(`HandlerBarcode: ${error.message}`)
    }
  }
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
