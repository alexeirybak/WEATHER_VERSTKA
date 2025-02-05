import "./styles/main.css";

import { initApp } from "./init.js";

initApp();

function causeRuntimeError() {
  const obj = { key: "value" };
  console.log(obj.undefinedProperty.someValue);
}

causeRuntimeError();
