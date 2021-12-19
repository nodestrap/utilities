// react:
import { default as React, } from 'react'; // base technology of our cssfn components
// utilities:
export const isTypeOf = (element, funcComponent) => {
    return (React.isValidElement(element)
        &&
            ((element.type === funcComponent)
                ||
                    ((typeof (element.type) === 'function')
                        &&
                            element.type.prototype
                        &&
                            funcComponent.prototype
                        &&
                            ((element.type.prototype === funcComponent.prototype)
                                ||
                                    (element.type.prototype instanceof funcComponent)))));
};
export const setRef = (ref, value) => {
    if (ref) {
        if (typeof (ref) === 'function') {
            ref(value);
        }
        else {
            ref.current = value;
        } // if
    } // if
};
const isSingleValue = (expression) => (typeof (expression) === 'string') || (Array.isArray(expression) && (expression.length === 1));
export const parseNumber = (expression) => {
    if (typeof (expression) === 'number')
        return expression;
    if (!expression)
        return null;
    if (!isSingleValue(expression))
        return null;
    if (!expression)
        return null;
    expression = Number.parseFloat(expression);
    if (isNaN(expression))
        return null;
    return expression;
};
