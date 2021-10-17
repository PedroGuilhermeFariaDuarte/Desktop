import styled from 'styled-components'

export const WidgetContainer = styled.div`
  width: 35%;
  height: 99%;  
  border-radius: 10px;  
  position: absolute;
  padding: 0px var(--min-padding) 0px var(--min-padding);
  backdrop-filter: var(--primary-acrylic-level);
  background-color: var(--eleventh-background-acrylic-color);
  overflow: hidden;
  left: 0.7%;
  bottom: 0.6%;
  transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
  color: var(--fourth-text-color);

  display: flex;
  flex-flow: column;

  &.action-widget {
    left: -99%;
    transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
  }
`
export const WidgetHeader = styled.header`
  width: 100%;
  min-height:60px;
  height: auto;
  padding-top: var(--min-padding);

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h1 {
    font-family: var(--third-font-family);
    font-size: var(--secondary-subtitle-size);
    font-weight: 900;
    color: var(--fourth-text-color);
  }
`
export const WidgetContent = styled.div`
  width: 100%;
  height: 100%;  
  padding-top: 20px;
  overflow-y: auto;

  display: flex;
  flex-flow: column;  
`
export const WidgetButton = styled.button`
  width: 100px;
  height: 30px;
  border:none;
  outline: none;
  border-radius: 3px;
  background-color: var(--secondary-background-color);
  cursor: pointer;

  align-self: center;
  
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  font-size: var(--primary-bodyTextVerySmall-size);
`
