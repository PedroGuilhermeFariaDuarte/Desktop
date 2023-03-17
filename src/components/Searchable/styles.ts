import styled, { css } from "styled-components";

// Types
import { ISearchableBoxProps } from "./types";

export const Container = styled.div`
    width: 13.75rem;
    height: 81%;
    max-height: 100%;
    border-radius: 7.5rem;
    padding: 0.3rem 0rem 0.3rem 0.7rem;
    background-color: var(--primary-background-color);

    /* overflow: hidden; */

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        opacity: 0.8;
        caret-color: transparent;
    }

    input {
        width: 100%;
        background: none;
        padding: 0;
        border: 0;
        outline: none;

        caret-color: transparent;

        &:focus {
            caret-color: auto;
        }
    }

    svg {
        font-size: 1.2rem;
        fill: var(--six-background-color);
        
        &:focus-within {            
            fill: var(--cinco-background-color);
        }
    }

    img {
        max-width: 13%;
        height: auto;

        margin-right: 1rem;
    }
`
export const SearchableBox = styled.div.attrs({}) <ISearchableBoxProps>`
    width: 48.6875rem;
    height: 45.687rem;
    border: 0.1rem solid var(--secondary-border-color);
    border-radius: 8px;
    padding: 2rem 0rem 0rem 2rem;
    backdrop-filter: var(--secondary-acrylic-level);
    background-color: var(--eight-background-acrylic-color);

    transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
    position: absolute;
    bottom: -45.687rem;
    
    left: calc((100vw - 50vw) - 24rem);
    font-size: 0.865rem;
    color: var(--primary-text-color);

    display: grid;
    grid-template-columns: 33% 1fr;            
    grid-gap: 0.5rem;

    ${props => props.opened ? css ` bottom:  3.875rem; ` : ''}
`

export const SearchableHeader = styled.header`
    width: 100%;
    height: 1rem;
    /* background-color: blue; */

    & span {
        &.searchable-header-title {
            font-family: 'Inter', sans-serif;
            font-size: 2.5rem;
            font-weight: 500;
        }
    }

    font-weight: 600;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 0.7rem;
`

export const SearchableContent = styled.div`
    &:first-child {
        grid-area: 1 / 1 / 1 / 2;
        padding: 0;
    }

    grid-area: 1 / 2 / 1 / 3;
    overflow: hidden;
    /* min-width: 50%;
    width: 50%;
    max-width: 50%; */

    padding-top: 0.4rem;
    padding-right: 1.3rem;

    /* background-color: red; */

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    & .icon-bar {
        width: 100%;
        max-width: 100%;
        min-height: 2rem;
        height: 2rem;
        max-height: 2rem;
    }
`

export const SearchableList = styled.ul`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding-bottom: 5rem;
    padding-right: 0.5rem;

    overflow-y: auto;

    ::-webkit-scrollbar-track {
        border: none;
        background: none;
        background-color: none;
    }

    ::-webkit-scrollbar {
        width: 4px;
        height: 1px;
        padding: 3px;
        border-radius: 3px;    
        /* background: #cccc; */
    }

    ::-webkit-scrollbar-thumb {
        width: 3px;
        height: 3px;    
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #ddd;
    }

    &:first-child {
        margin: 0;
    }

    &.list-to-cards {    
        flex-flow: row wrap;        
    }

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
`

export const SearchableItem = styled.li`
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 0.7rem;

    font-size: 0.915rem;
    font-weight: lighter;
    cursor: pointer;

    svg {
        font-size: 1.3rem;
    }
`

export const SearchableCard = styled.li`
    flex: 1;
    min-width: 30%;        
    height: 10.562rem;
    border: 0.1rem solid var(--third-border-color);     
    border-radius: 8px;        
    background-color: var(--secondary-background-color);

    &:first-child {
        min-width: 100%;
        height: 13.562rem;  
        margin-top: 1rem;
        order: 0;
        background-image: url("https://flumer.netlify.app/assets/cover4-ab87c851.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;        
    }

    &:last-of-type {
        min-height: 10.562rem;  
        height: auto;        

        img {
            max-width: 10%;
            margin-top: 1rem;
        }
    }    

    position: relative;
    overflow: hidden;

    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 0.7rem;

    img { 
        max-width: 30%;
        height: 100%;
        object-fit: contain;            

        margin: 0 auto;
    }
    
    &:hover {
        opacity: 0.9;
    }
`

export const SearchableCardFooter = styled.div`
    flex: 1;    
    width: 100%;    
    min-height: 50%;     
    height: 50%;     
    max-height: 50%; 
    padding: 1rem;        

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;    
    gap: 0.7rem;  
        
    z-index: 1;
        
    font-size: 0.915rem;
    font-weight: lighter;
    cursor: pointer;

    &.has-background {
        background-color: #fff;
    }
    
    span {
        color: var(--primary-text-color);

        &.searchable-card-title {
            font-size: 2rem;
            font-weight: bold;
            color: var(--fourth-text-color);
        }        
    }
`

export const SearchableTagContainer = styled.div`
    width: 100%;
    height: auto;
    
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 0.7rem;  

    span.taggable {
        min-width: 4rem;
        width: auto;
        height: 1.8rem;
        padding: 0.3rem;
        border-radius: 2rem;        
        background: var(--secondary-background-acrylic-color);

        font-size: 0.8rem;        

        display: flex;
        flex-flow: row nowrap;        
        justify-content: center;        
        align-items: center;
        gap: 0.7rem;  
    }
`

export const SearchableFooter = styled.footer`
    width: 100%;
    min-height: 30%;
    height: auto;
    border-radius: 8px;
    padding: 1rem;
    background-color: #fff;

    font-size: 1rem;
    font-weight: 500; 
    word-wrap: break-word;    

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    gap: 0.5rem;        
    align-items: flex-start;

    p {
        font-weight: 400;
        text-align: justify;
    }
`