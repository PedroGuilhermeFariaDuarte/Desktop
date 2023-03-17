import { PropsWithChildren } from "react";

export interface ISearchableProps extends PropsWithChildren<any> {

}

export interface ILastedState {
    name: string,
    path: string
}