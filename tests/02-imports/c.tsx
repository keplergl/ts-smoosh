/**
 * A function with a JSDoc type import that is different from its name
 * @type {typeof import('./b').MyFn}
 */
function c(a: number, b: number): number {
    console.log("haha hi");
    return a + b;
}
