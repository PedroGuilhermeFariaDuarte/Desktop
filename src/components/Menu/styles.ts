import styled, { css } from 'styled-components'

// Types
import { IDotPageContainerStyledProps, IDotPageStyledProps, IMenyStyledProps, IRowScrollControllerStyledProps } from './types'

export const Container = styled.div<IMenyStyledProps>`
    width: 40rem;
    height: 45.375rem;
    border-radius: 8px;    
    border: 0.1rem solid var(--secondary-border-color);
    backdrop-filter: var(--primary-acrylic-level);
    background-color: var(--eight-background-acrylic-color);
    box-shadow: var(--secondary-shadow);
    padding: 2.375rem 0rem 0rem 0rem;
    
    transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
    margin-bottom: var(--primary-padding);
    overflow: hidden;

    position: absolute;
    z-index: 0;
    bottom: -50rem;
    left: calc((100vw - 50vw) - 20rem);
    
    display: flex;    
    flex-flow: column;
    gap: 1rem;

    ${props => props.opened ? css` bottom: 0rem; ` : ''}    
`

export const Header = styled.header`
    width: 100%;
    height: auto;
    padding: 0 3.375rem 0 3.375rem;
    /* background-color: red; */

    display: flex;    
    flex-flow: column;
    justify-content: center;
    align-items: center;

    #input-container {
        width: 100%;
        height: auto;
        padding: 0.2rem 1rem 0.2rem 1rem;
        border: 0.1rem solid var(--third-border-color);   
        border-radius: 16px;
        background-color: #fff;

        display: flex;    
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;

        svg {

        }

        input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            background: transparent;

            &::placeholder {
                color: var(--six-text-color);
            }
        }
    }
`

export const Content = styled.div`
    flex: 1;
    width: 100%;    
    padding: 0 0.7rem 0 3.375rem;
    /* background-color: red; */

    display: flex;
    flex-flow: column;
    gap: 1rem;
    
    overflow: hidden;
`

export const RowContainer = styled.div`
    flex: 1;
    width: 100%;
    height: auto;
    padding: 0 0rem 0rem 2rem;
    /* padding: 0 3.375rem 0rem 3.375rem; */
    /* background-color: green;     */

    display: flex;    
    flex-flow: column;
    gap: 0.5rem;

    &:first-child{
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
    }

    &:last-of-type{
        min-height: auto;
        height: auto;
        max-height: auto;        

        .row-icon-wrapper {
            flex-flow: row nowrap;
            align-items: flex-start;            
            
            span {
                margin-top: 0.3rem;
            };
        }
    }    
`

export const RowHeader = styled.div`
    width: 100%;
    height: auto;    
    padding: 0 3.375rem 0 0rem;
    /* background-color: blue; */

    font-size: 0.9rem;
    font-weight: 500;

    display: flex;    
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;    
`

export const RowContent = styled.div`
    width: 100%;
    height: auto;    
    /* background-color: yellow; */

    display: flex;    
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0rem;    
`

export const RowFooter = styled.div`
    flex: 1;
    max-width: 2%;
    height: 100%;    
    /* background-color: tomato;     */

    display: flex;    
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 0rem;
`

export const RowScrollController = styled.div<IRowScrollControllerStyledProps>`
    width: 100%;
    height: auto;
    /* background-color: aliceblue; */

    display: flex;    
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 1px;

    .arrows {
        
        &#arrow-down , &#arrow-up  {
            svg {
                fill: #9d9d9d;
                font-size: 0.9rem;
                visibility: hidden;
            }

            &:hover {
                svg {
                    fill: #858585;
                    font-size: 1.011rem;
                }
            }
        }

        &#arrow-up { 
            svg {
                ${props => props.isFirstPage ? css`
                    visibility: visible;
                ` : ''}
            }   
        }   

        &#arrow-down {
            svg {
               
                ${props => props.isLastPage ? css` 
                    visibility: visible;` : '' 
                }
               
            }
        }   
    }            
`

export const DotPageContainer = styled.div<IDotPageContainerStyledProps>`
    width: 100%;
    height: auto;
    /* background-color: darkkhaki; */

    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 5px;       
`

export const DotPage = styled.span.attrs({
    className: 'dot-page'
}) <IDotPageStyledProps>` 
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background-color: #9d9d9d;

    ${props => (props.pageInFocus) ? css` 
        transform: scale(1.2);
        background-color: #858585;` :
    ''}

    &:hover {
        transform: scale(1.2);
        background-color: #858585;
    }
`

export const GroupItemsScrollable = styled.div.attrs({
    id: 'group-items-scrollable'
})`
    flex: 1;
    min-width: 98%;
    height: 17.399375rem;    
    /* background-color: paleturquoise; */

    overflow-y: auto; 

    display: flex;    
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.1rem;

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
        visibility:hidden;
    }

`

export const GroupItemsContainer = styled.div`
    flex: 1;    
    height: auto;    
    /* background-color: pink; */

    display: flex;    
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0rem;    
`

export const GroupItemsContent = styled.ul`
    width: 100%;
    height: auto;    
    /* background-color: orange; */    

    display: flex;    
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0rem;    
`

export const RowIconWrapper = styled.div.attrs({
    className: "row-icon-wrapper"
})`
    width: 100%;
    height: 100%;

    margin: 0 auto;

    display: flex;    
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 0.35rem;

    svg {
        font-size: 2.2rem;
        fill: var(--cinco-background-color);
    }

    img {
        max-width: 42%;
        height: auto;
    }

    span {
        font-size: 0.8rem;
    }

    .icon-xbox {
        width: 2.2rem;
        height: 2.2rem;
        padding: 0.3rem;
        background-color: green;

        img {
            max-width: 100%;
        }
    }
`

export const RowIconHeader = styled.div.attrs({
    className: "row-icon-header"
})`
    flex: 1;
    width: 100%;   
    background-color: red;     

    display: flex;    
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 0rem;    
`

export const Footer = styled.footer`    
    flex: 1;
    width: 100%;   
    min-height: 4.062rem; 
    height: 4.062rem; 
    max-height: 4.062rem; 
    background-color: #D8E2F3;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`