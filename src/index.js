import { defineCustomElement } from "vue";
import MyComponent from "./components/my-component.ce.vue";

console.log(MyComponent.styles); // NOTE: Expecting this to contain styles!

const MyComponentElement = defineCustomElement(MyComponent);

customElements.define("my-component", MyComponentElement);
