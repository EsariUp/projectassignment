function projectObject(source, prototype) {
    const projected = {};

    for (const key in prototype) {
        if (key in source) {
            if (typeof prototype[key] === 'object' && prototype[key] !== null) {
                projected[key] = projectObject(source[key], prototype[key]);
            } else {
                projected[key] = source[key];
            }
        }
    }
    return projected;
}

const sourceObject = {
    prop1: {
        subProp1: 1,
        subProp2: {
            subSubProp1: 11,
            subSubProp2: 12
        }
    },
    prop2: 42
};

const prototypeObject = {
    prop1: {
        subProp2: null
    }
};

const result = projectObject(sourceObject, prototypeObject);
console.log(result);