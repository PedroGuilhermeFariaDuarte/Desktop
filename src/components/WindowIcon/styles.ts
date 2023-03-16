import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;    
  /* background-color: yellow;  */
  /* border-radius: 2.4px;  */
  
  transition: 0.3s cubic-bezier(0.68,-0.55,0.27,1.55);
  overflow: hidden;

  display: flex;    
  flex-flow: row wrap;    
  justify-content: flex-start;    
  align-content: flex-start;
  gap: 1.3px;   
`

export const Quad = styled.div`
  flex: 1;
  min-width: 0.6rem;
  max-width: 1rem;
  height: 11.5px;          
    
  &:nth-last-child(4) {
    /* border-top-left-radius: 2.4px; */
    
    background: var(--for-background-color);
  }

  &:nth-last-child(3) {
    /* border-top-right-radius: 2.4px; */
    background: var(--secondary-background-gradient);
  }
  
  &:nth-last-child(2) {
    /* border-bottom-left-radius: 2.4px; */
    /* margin-top: 1.5px; */
    background: var(--secondary-background-gradient);
  }
  

  &:nth-last-child(1) {
    /* border-bottom-right-radius: 2.4px; */
    /* margin-top: 1.5px; */
    background: var(--third-background-gradient);
  }
`