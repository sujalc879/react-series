function customRender(reactEl, mainContainer) {
   const domEl = document.createElement(reactEl.type);
   domEl.innerHTML = reactEl.children;

   for (const element of Object.keys(reactEl.props)) {
    domEl.setAttribute(element, reactEl.props[element]);
   }

   mainContainer.appendChild(domEl);




    // const domEl = document.createElement(reactEl.type);
    // domEl.setAttribute("href", reactEl.props.href);
    // domEl.setAttribute("target", reactEl.props.target);
    // domEl.innerHTML = reactEl.children;
    // mainContainer.appendChild(domEl);
}


const reactEl = {
    type: "a",
    props: {
        href: "https://www.github.com/",
        target: "_blank",
        draggable: "true"
    },
    children: "click me to visit github official page"
}


const mainContainer = document.getElementById("root");


customRender(reactEl, mainContainer);