import styled from "styled-components"

// Types
import { IBoxPropsStyled } from "./types"

export const BoxContainer = styled.div<IBoxPropsStyled>`
    width: ${(props) => props.width ? props.width : '20rem'};
    height: ${(props) => props.height ? props.height : '10rem'};
    border-radius: 8px;    
    border: 0.1rem solid var(--secondary-border-color);
    backdrop-filter: var(--primary-acrylic-level);
    background-color: var(--eight-background-acrylic-color);    

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.3rem;
`

export const BoxHeader = styled.div`
    width: 100%;
    height: 2rem;
    /* background-color: red; */

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`

export const BoxContent = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: blue;     */
`