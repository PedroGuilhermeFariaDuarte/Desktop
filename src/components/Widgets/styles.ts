import styled, {css} from "styled-components"
import { IAsideCard } from "../TaskBar/types"

export const AsideContainer = styled.div`
    position: relative;
    /* display: none; */
`

export const Aside = styled.aside`
    width: 48.313rem;
    height: calc((100vh -  2.875rem) - 1.5rem);
    padding: 2.7rem;
    border-radius: 8px;    
    backdrop-filter: var(--secondary-acrylic-level);
    background-color: var(--secondary-background-acrylic-color);  
    
    overflow-y: auto;

    position: absolute;
    top: calc(0px - ((100vh -  2.875rem) + -0.7rem));
    left: calc(0px - (48.313rem + 2.7rem));
    bottom: 1rem;

    transition: all 0.22s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    &.aside-active {
        left: 1rem;
    }
`

export const AsideHeader = styled.header`
    width: 100%;
    background-color: red;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    svg {
        font-size: 1.4rem;
        fill: var(--cinco-background-color);

        cursor: pointer;
    }

    .wrapper-icons {
        flex: 1;

        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: 0rem;
    }
    .wrapper-widget-info {
        flex: 1;
        /* max-width: 20%; */
        background-color: green;        

        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }

    .wrapper-info {
        flex: 1;
        max-width: 35%;
        height: 100%;
        background-color: yellow;
    }
`

export const AsideContent = styled.div`
    width: 100%;
    height: 100%;    
    padding: 2.9rem;

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
    className: 'aside-card',
    id: 'aside-card',
}) <IAsideCard>`
    grid-area: ${props => props.gridArea ? props.gridArea : 1 / 1 / 2 / 1};
    min-height: 8.5rem;
    height: 18rem;
    max-height: 18rem;
    
    ${(props) => props.height ? css` height: ${props.height}rem; max-height: ${props.height}rem; ` : ''}

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
    width: 9rem;
    height: 100%;
    padding: 0.25rem;
    background-color: pink;

    position: relative;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;    
`

export const WidgetInfo = styled.div`
    flex: 1;
    min-width: 50%;
    height: 100%;    
    /* background-color: orange; */

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center; 
    gap: 0.5rem;    

    font-size: 0.8rem;

    & div {
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.1rem;
        

        & span {
            &:first-child {
                font-size: 0.8rem;
                font-weight: 500;
                color: var(--primary-text-color);
            }
            
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--six-text-color);
        }
    }

    & .icon-weather {
        &::after {
            content: '';
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
            background: linear-gradient(322deg, #d75b3f, #ffc800);

            display: block;
        }
    }

`