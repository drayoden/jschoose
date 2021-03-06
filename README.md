### Helps me pick/choose among JS frameworks

##### Traversy Media crash courses - Brad Traversy -- January 2019
---
* React - (facebook)
    - chrome react deveoper tools
    - create react app: `npx create-react-app .` -- "npx" runs create-react-app without installing react
        - package.json - manafest file
        - /public/index.html - SPA, everthing starts here (`<div id="root"><div>`)
        - /src/index.js - react entry point
        - /src/App.js - see index.js -> "ReactDOM.render(`<App />, ...`);" -- Class base component
    - run server: `npm start`
    - some cleanup:
        * delete /src/index.css -> index.js 'import'
        * delete /src/logo.svg -> App.js 'import' && remove \<header\>
        * replaced all /src/App.css with basic reset, body and anchor styles (see comment)
    - had to change App to a class to use 'state' -> created 'render' method 

* Vue - 
    - chrome vue.js dev tools
    - install vue: `npm install -g @vue/cli`
    - verify install/version: `vue --version`
    - create new vue app(cli): `vue create <name>` - creates all files, etc.
    - run dev server: `npm run serve`
    - create new vue app(ui): `vue ui` - starts UI in browser (port 8000)
        - /public/index.html -- SPA start of it all (`<div id="app"><div>`)
        - /src/main.js -- vue entry point



* Angular - (google)
    - like React - Components, services, and modules, etc.
    - install angular: `sudo npm install -g @angular/cli`
    - verify install/version `ng --version`
    - create new app: `ng new <name>` -- creates \<name\> folder with all needed files
    - run dev server: `ng server --open`
        - package.json - manafest file, lots of depends
        - /src/index.html - SPA start of it all -> (`<app-root></app-root>`)
        - /app/app.module.ts - (ts=typscript file) angular entry point
