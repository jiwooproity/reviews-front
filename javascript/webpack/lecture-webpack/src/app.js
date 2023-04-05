import "./app.css";
import yuna_profile from "../assets/images/yuna.jpeg";

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `
        <img src=${yuna_profile}/>
    `;
})