import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 *,*::before, *::after {
    margin: 0px;
    padding: 0px;
    outline: none;
    box-sizing: border-box;
  }

  body, #root {
    width: 100%;
    height: 100vh;
    font-family: var(--primary-font-family);
    font-size: var(--primary-bodyText-size);
    color: var(--primary-text-color);
    overflow: hidden;

    background-color: var(--primary-background-color);
  }
  
  #root {
    display: flex;
    flex-flow: column;
    justify-content: flex-end;    

    background-image: var(--primary-background-image);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`

