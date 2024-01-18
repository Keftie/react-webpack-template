import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const Main = () => (
    <h1>Hello World!</h1>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
