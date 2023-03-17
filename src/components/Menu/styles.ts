import styled from 'styled-components'

// Types
import { IMenyStyledProps } from './types'

export const Container = styled.div<IMenyStyledProps>`
    width: 40rem;
    height: 45.375rem;
    border-radius: 8px;    
    backdrop-filter: var(--primary-acrylic-level);
    background-color: var(--primary-background-acrylic-color);
    box-shadow: var(--secondary-shadow);
    padding: var(--third-padding);
    
    transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
    margin-bottom: var(--primary-padding);
    position: absolute;
    z-index: 0;
    bottom: 5px;
    left: calc((100vw - 50vw) - 20rem);
    
    display: flex;    
    flex-flow: column;

    &.action-menu {
      bottom: -860px;
      transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
    }
`