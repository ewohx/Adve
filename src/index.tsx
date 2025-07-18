import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/baseStore';
import { BrowserRouter } from 'react-router-dom';
import { AppDesktop } from './components/desktop/app/AppDesktop';
import { AppMobile } from './components/mobile/app/AppMobile';
import reportWebVitals from './metrics/reportWebVitals';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppDesktop />
                <AppMobile />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();