import styled, {css} from "styled-components"
import { IAsideCard } from "../TaskBar/types"

export const AsideContainer = styled.div`
    position: relative;

    /* display: none; */
`

export const Aside = styled.aside`
    width: 65vh;
    height: calc((100vh -  2.875rem) - 1.5rem);
    padding: 2.7rem;
    border-radius: 8px;    
    backdrop-filter: var(--secondary-acrylic-level);
    background-color: var(--secondary-background-acrylic-color);  
    
    overflow-y: auto;

    position: absolute;
    top: calc(0px - ((100vh -  2.875rem) + 0.7rem));
    left: 0;
    bottom: 1rem;

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    &.aside-active {
        left: 1rem;
    }
`

export const AsideContent = styled.div`
    width: 100%;
    height: 100%;    

    overflow-y: auto;
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fill, 18rem);
    gap: 0.5rem;

    &.aside-active {
        left: 1rem;
    }
`

export const AsideCard = styled.div.attrs({
    className: 'aside-card'
}) <IAsideCard>`
    grid-area: ${props => props.gridArea ? props.gridArea : 1 / 1 / 2 / 1};
    min-height: 9rem;
    height: 18rem;
    max-height: 18rem;

    ${(props) => props.height ? css`
        height: ${props.height}rem;
        max-height: ${props.height}rem;
    ` : ''}

    border-radius: 12px;
    background-color: blanchedalmond;

    overflow: hidden;

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

`

export const AsideCardHeader = styled.div`
    flex: 1;
    width: 100%;
    min-height: 50%;
    max-height: 50%;
    background-color: chartreuse;    
`

export const AsideCardContent = styled.div`
    flex: 1; 
    width: 100%; 
    min-height: 50%;
    max-height: 50%;  
    
    background-color: tomato;
`

export const AsideCardSeparator = styled.div<IAsideCard>`
    grid-area: ${props => props.gridArea ? props.gridArea : 1 / 1 / 2 / 1};    
    /* background-color: blue; */

    overflow: hidden;

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    & .aside-card {        
        width: 100%;
    }
`

export const Container = styled.div`
`