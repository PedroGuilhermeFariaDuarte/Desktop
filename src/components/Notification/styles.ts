import styled, { css } from "styled-components";

// Types
import { INotificationPropsStyled } from "./types";

export const Container = styled.nav<INotificationPropsStyled>`
    width: 24rem;
    height: calc(100vh - 2.875rem);    
    padding: 1rem;

    transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);

    position: absolute;    
    top: calc(0px - (100vh - 2.875rem));
    right: -24rem;

    display: flex;
    flex-flow: column;
    gap: 0.8rem;

    ${props => props.opened ? css` right: 0rem; ` : ''}    
`

export const NotificationButton = styled.div`
  & #date-hour {
    width: 100%;
    height: auto;
    /* background-color: red; */
       
    font-weight: lighter;
    font-size: 0.75rem;   
    color: var(--six-text-color); 
    cursor: pointer;    

    display: flex;    
    flex-flow: column;    
    justify-content: center;
    align-items: flex-end;

    #hour {
      margin-bottom: 0.15rem;
    }
  }
`