document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
new Glide('.glide').mount({ Controls, Breakpoints })