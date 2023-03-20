import styled from "styled-components";

export const Warning = styled.div.attrs({
    id: 'warning'
})`
    width: 100vw;
    height: 100vh;      
    padding: 2rem;
    background-color: #0078d4;


    font-size: 2.5rem;
    color: #fff;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;

    display: none;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    hgroup {
        h1 {
            margin-bottom: 2rem;
        }

        h5 {
            font-size: 2rem;
            font-weight: lighter
        }

        h6 {
            margin-top: 1.5rem;
            font-size: 1rem;
            font-weight: lighter
        }
    }
`