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
export const setRef = (elmRef, elm) => {
    if (elmRef) {
        if (typeof (elmRef) === 'function') {
            elmRef(elm);
        }
        else {
            elmRef.current = elm;
        } // if
    } // if
};
const isSingleValue = (num) => (typeof (num) === 'string') || (Array.isArray(num) && (num.length === 1));
export const parseNumber = (num) => {
    if (typeof (num) === 'number')
        return num;
    if (!num)
        return null;
    if (!isSingleValue(num))
        return null;
    if (!num)
        return null;
    num = Number.parseFloat(num);
    if (isNaN(num))
        return null;
    return num;
};
