import proxyState from "./proxyState.js";

window.onload = function () {
  setTimeout(() => {
    console.log(proxyState.data);
  }, 3000);
};
