import styled from "styled-components";

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
export const SearchableBox = styled.div`
    width: 48.6875rem;
    height: 45.687rem;
    border-radius: 8px;
    padding: 2rem 0rem 2rem 2rem;
    backdrop-filter: var(--primary-acrylic-level);
    background-color: var(--secondary-background-acrylic-color);

    position: absolute;
    top: calc(0px - (100vh - 45.687rem) - 32.687rem);
    left: calc(100vw - 75.2vw);
    font-size: 0.865rem;
    color: var(--primary-text-color);

    display: grid;
    grid-template-columns: 33% 1fr;            
    grid-gap: 0.5rem;
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
    /* min-width: 50%;
    width: 50%;
    max-width: 50%; */

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

    overflow-y: auto;

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

    & .icon-bar {
        width: 100%;
        max-width: 100%;
        min-height: 2.8rem;
        height: 2.8rem;
        max-height: 2.8rem;
    }
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

export const SearchableCard= styled.li`
    flex: 1;
    min-width: 30%;        
    min-height: 10.562rem;    
    height: 10.562rem;    
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

    // FIX A BUG WITH FLEX BOX, APPLY A TOP NEGATIVE TO UP BOX'S
    margin-top: -12rem;    

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
        background-color: var(--primary-background-color);
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