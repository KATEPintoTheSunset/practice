const createComponent = (type, name, id) => {
    const component = document.createElement(type);
    component.className = name;
    component.id = id;
    return component;
};

export { createComponent };
