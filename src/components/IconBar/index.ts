import styled, { css } from "styled-components"

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

    position: relative;

    display: flex;    
    flex-flow: row wrap;    
    justify-content: flex-start;    
    align-items: center;

    &::after {
        content: '';
        min-width: 1rem;
        width: auto;
        height: auto;
        padding: 0.299rem; 
        border-radius: 2.5px; 
        background: transparent;

        transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
        
        position: absolute;
        top: 0;
        left: 0;

        font-size: 0.73rem;
        color: var(--six-text-color);
        letter-spacing: 0.3px;

        display:flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }

    ${(props) => {
        if (props.titleIcon) {
            return css`
            &:hover {
                &::after {
                   content: '${props.titleIcon}'; 
                   background-color: var(--primary-background-color);      
                   top: -2.400rem;
                   left: 40%;
                }
            }
            `
        }
    }}

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
        flex: 1;
        min-width: 50%;
        width: initial;
        max-width: 50%;

        min-height: 3.2rem;
        height: 3.2rem;
        max-height: 3.2rem;
        
        & ~ & {
            /* margin-left: 1rem; */
        }
        
    }

    &.icons-main-menu-header {
        flex: none;
        min-width: initial;
        width: auto;
        max-width: initial;

        min-height: initial;
        height: auto;
        max-height: initial; 
        
        padding: 0.299rem; 
        border-radius: 2px; 
        background-color: var(--nineth-background-acrylic-color);

        font-size: 0.73rem;
        color: var(--six-text-color);
        letter-spacing: 0.3px;
        cursor: pointer;

        justify-content: center;
        align-items: center;
        gap: 1rem;

        & .icon-content {
            display:flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
        }

        svg {
            font-size: 0.8rem;
            color: var(--six-text-color);
        }
        
    }

    &.icons-task-bar-info {
        flex: none;
        min-width: 1rem;
        width: auto;
        max-width: 6rem;

        min-height: 100%;
        height: 100%;
        max-height: 100%;  
        
        justify-content: center;

        svg {
            font-size: 1.1rem;
            fill: var(--six-text-color);

            &:first-child {
                margin: 0;
            }

            margin-left: 0.5rem;
        }

        .text-info {
            font-size: 0.7rem;
            color: var(--six-text-color);

            &:first-child {
                line-height: 1rem;
            }
        }
    }

    &.icons-task-bar-apps {
        flex: none;
        min-width: 1rem;
        width: auto;
        max-width: 3.3rem;

        min-height: 100%;
        height: 100%;
        max-height: 100%;  
        
        justify-content: center;

        svg {
            font-size: 1.1rem;
            fill: var(--six-text-color);           
        }

        img {
            max-width: 62%;
            height: auto;
        }        
    }

    &.icons-searchable-box-list {
        width: 100%;
        max-width: 100%;
        min-height: 2.8rem;
        height: 2.8rem;
        max-height: 2.8rem;
        border: 0.1rem solid transparent;  
        
        &:hover {
            border: 0.1rem solid var(--third-border-color);  
            background-color: #fdfdfd;
        }
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