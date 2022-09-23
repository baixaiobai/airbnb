import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom"
import { Provider } from 'react-redux';
// 通过使用该组件去使用定义的theme的样式
import { ThemeProvider } from 'styled-components';



import App from '@/App';
import "normalize.css"
import "./assets/css/reset.less"
import store from "./store/index"
import theme from "./assets/theme"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      {/* 使用theme的样式，需要在这里提供 */}
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  // </React.StrictMode>
);
