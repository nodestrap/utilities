import { default as React } from 'react';
export declare const isTypeOf: <TProps>(element: React.ReactNode, funcComponent: React.JSXElementConstructor<TProps>) => element is React.ReactElement<TProps, React.JSXElementConstructor<TProps>>;
export declare const setRef: <TElement extends HTMLElement>(elmRef: React.Ref<TElement> | undefined, elm: TElement | null) => void;
export declare const parseNumber: (num: number | string | ReadonlyArray<string> | null | undefined) => number | null;
