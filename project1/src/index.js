import React from 'react';
import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
import App from './ChatUI/App';
import Video from './ChatUI/useEffectReview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Video />
    </React.StrictMode>
);

// reportWebVitals();
