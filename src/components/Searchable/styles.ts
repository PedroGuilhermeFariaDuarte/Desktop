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