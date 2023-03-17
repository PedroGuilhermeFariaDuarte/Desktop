import styled, {css} from "styled-components"
import { IAsideCard } from "../TaskBar/types"
import { IAsideProps } from "./types"

export const AsideContainer = styled.div`
    position: relative;
    /* display: none; */
`

export const Aside = styled.aside<IAsideProps>`
    width: 48.313rem;
    height: calc((100vh -  2.875rem) - 1.5rem);
    padding: 2.7rem;
    border-radius: 8px;    
    /* backdrop-filter: var(--secondary-acrylic-level); */
    background-color: var(--primary-background-color);  
    
    overflow-y: auto;
    
    position: absolute;
    top: calc(0px - ((100vh -  2.875rem) + -0.7rem));
    left: calc(0px - (48.313rem + 2.7rem));
    bottom: 1rem;

    transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    ${props => props.opened ? css`left: 1rem;` : ''}    
`

export const AsideHeader = styled.header`
    width: 100%;    
    /* background-color: red;     */

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

   

    .wrapper-icons {
        flex: 1;

        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: 0rem;

        svg{
            fill: var(--third-text-color);
            font-size: 1.4rem;
            cursor: pointer;

            &:first-child  {
                fill: var(--cinco-background-color);
            }
        }
    }

    .wrapper-widget-info {
        flex: 1;
        /* max-width: 20%; */
        /* background-color: green;         */

        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }

    .wrapper-info {
        flex: 1;
        max-width: 35%;
        height: 100%;
        border-radius: 8px;
        background-color: var(--third-background-color);
        

    }
`

export const AsideContent = styled.div`
    width: 100%;
    height: 100%;    
    padding: 2.9rem;

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
    background-color: var(--third-background-color);
    border-radius: 12px;        

    overflow: hidden;
    cursor: pointer;

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    &:hover {
        /* box-shadow: -2px 4px 8px 1px rgb(233 248 255 / 27%); */
    }
`

export const AsideCardHeader = styled.div`
    flex: 1;
    width: 100%;
    min-height: 50%;
    max-height: 50%;
    background-color: var(--third-background-color);
`

export const AsideCardContent = styled.div`
    flex: 1; 
    width: 100%; 
    min-height: 50%;
    max-height: 50%;  
    
    background-color: var(--secondary-background-color);
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
    /* background-color: pink; */

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
                font-size: 0.76rem;
                font-weight: 500;
                color: var(--primary-text-color);
            }
            
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--six-text-color);
        }
    }

    & .icon-weather {
        position: relative;

        &::before {
            content: '';
            width: 0.9rem;
            height: 0.9rem;
            border-radius: 50%;
            background: none;

            position: absolute;
            display: block;
        }
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