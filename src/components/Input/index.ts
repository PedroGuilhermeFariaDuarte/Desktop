import styled, { css } from 'styled-components'

// Types
import { IInput } from './types'

export const InputContainer = styled.div<IInput>`
  width: 100%;
  height: 60px;

  ${props => props?.borderAll && props?.borderAll === true ?
    css`
    border-radius: 4px;
   ` :
    css`
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    `
  }  
  
 ${props => props?.borderShowed && props?.borderShowed === true && css`  
    border-bottom: 3px solid var(--primary-border-color);
   `
  }
  
  padding-left: var(--five-padding);
  margin-bottom: var(--primary-padding);
  background-color: var(--six-background-color);
  box-shadow: var(--secondary-shadow);  
  
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 20px;
    color: var(--six-text-color);
    transform: rotateY(180deg);
  }

  input {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    font-size: var(--primary-bodyTextSmall-size);
    color: var(--six-text-color);

    &::placeholder {
      color: var(--six-text-color);
    }
  }
`
