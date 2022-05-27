import { ReactElement } from "react";

export type As<T> = (props: T) => ReactElement;

export type SCProps<T> = T & { as?: As<T> };
