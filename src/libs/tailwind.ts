import { create } from "twrnc";

const tailwindRn = create(require(`../../tailwind.config.js`));

const tw = tailwindRn.style;
export { tw };
