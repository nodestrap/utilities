// react:
import {
    default as React,
}                           from 'react'         // base technology of our cssfn components



// utilities:

export const isTypeOf = <TProps,>(element: React.ReactNode, funcComponent: React.JSXElementConstructor<TProps>): element is React.ReactElement<TProps, React.JSXElementConstructor<TProps>> => {
    return (
        React.isValidElement<TProps>(element)
        &&
        (
            (element.type === funcComponent)
            ||
            (
                (typeof(element.type) === 'function')
                &&
                element.type.prototype
                &&
                funcComponent.prototype
                &&
                (
                    (element.type.prototype === funcComponent.prototype)
                    ||
                    (element.type.prototype instanceof funcComponent)
                )
            )
        )
    );
};

export const setRef = <TValue,>(ref: React.Ref<TValue>|undefined, value: TValue|null) => {
    if (ref) {
        if (typeof(ref) === 'function') {
            ref(value);
        }
        else {
            (ref as React.MutableRefObject<TValue|null>).current = value;
        } // if
    } // if
};

const isSingleValue = (expression: string|ReadonlyArray<string>): expression is string => (typeof(expression) === 'string') || (Array.isArray(expression) && (expression.length === 1));
export const parseNumber = (expression: number|string|ReadonlyArray<string>|null|undefined): number|null => {
    if (typeof(expression) === 'number') return expression;
    if (!expression) return null;
    
    
    
    if (!isSingleValue(expression)) return null;
    if (!expression) return null;
    
    
    
    expression = Number.parseFloat(expression);
    if (isNaN(expression)) return null;
    return expression;
};
