import styled from "styled-components"

// Types
import { IIconBarProps } from "./types"

export const IconBar = styled.button.attrs({
    type: "button",    
}) <IIconBarProps>`
    flex:1;
    max-width: ${(props) => props.maxWidth ? props.maxWidth : '2.30rem'};
    min-height: 100%;
    max-height: 100%;
    border-radius: 4px;   
    padding: 0.399rem; 
    transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
    background: none;
    outline: none;

    display: flex;    
    flex-flow: row wrap;    
    justify-content: flex-start;    
    align-items: center;

    &:hover {
      /* box-shadow: var(--secondary-shadow); */
      background-color: var(--nineth-background-acrylic-color);
      transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
    }

    &:active {
        & .icon-content {
            transform: scale(0.95);
            transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
        }
    }

    &.icons-main-menu-first-row-content {
        min-width: 6.0rem;
        width: 6.0rem;
        max-width: 6.0rem;

        min-height: 5.8rem;
        height: 5.8rem;
        max-height: 5.8rem;

        justify-content: center;
    }
    
    &.icons-main-menu-second-row-content {
        min-width: 14rem;
        width: 14rem;
        max-width: 14rem;

        min-height: 3.2rem;
        height: 3.2rem;
        max-height: 3.2rem;    
        
    }

     &.icons-main-menu-first-row-content , &.icons-main-menu-second-row-content {
        &:hover {
            background-color: #fdfdfd;
        }  
     }
`

export const IconContent = styled.span.attrs({
    className: 'icon-content'
})`
    width: auto;
    height: auto;
`