export const additionsClasses = (additions = [], style) => additions.map(addition => style[addition]);

export const optionsCreator = (options = [], textKey, valueKey ) => options.map(option => ({
    key: option[valueKey],
    text: option[textKey]
})
);