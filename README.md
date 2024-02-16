# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Bruger oprettet som test: test@techcollege.dk med kode: password

Fikset: 
* Antal varer kan ikke gå i negativt i PosterDetails
* I PosterList fjernet synligt scrollbar med     

    ::-webkit-scrollbar {
        display:none;
      }
 I Global.style.js
 * I CartList sat den til at slette en item/vare af gangen og når man holder affaldikonet i 3 sekunder, slettes ordrerækken helt