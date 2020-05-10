import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />                         {/* loads the "App" component - App.js */}
  </React.StrictMode>,
  document.getElementById('root')   // -> NOTE: index.html ... <div id="root"><div>
);

// serviceWorker.unregister();
