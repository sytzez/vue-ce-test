import { defineCustomElement } from "vue";
import MyComponent from "./components/my-component.ce.vue";

console.log(MyComponent.styles); // NOTE: Expecting this to contain styles!

const MyComponentElement = defineCustomElement(MyComponent);

// NOTE: Styles work when I disable shadow root, but <slot> requires
// shadow DOM, and I absolutely need to be able to use <slot>

// const MyComponentElement = defineCustomElement(MyComponent, {
//   shadowRoot: false,
// });

customElements.define("my-component", MyComponentElement);
