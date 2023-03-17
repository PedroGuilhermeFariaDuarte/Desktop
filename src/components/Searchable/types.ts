import { PropsWithChildren } from "react";
import { StyledComponentProps, StyledProps, ThemedStyledProps } from "styled-components";

export interface ISearchableProps extends PropsWithChildren<any> {

}

export interface ILastedState {
    name: string,
    path: string
}

export interface ISearchableBoxProps {
    opened: boolean
}