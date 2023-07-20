import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { className: 'parent' }, [
  React.createElement('h1', { className: 'heading', key: 1 }, 'Learning React'),
  React.createElement(
    'p',
    { className: 'paragraph', key: 2 },
    'React is a JS library used for creating UI for web'
  ),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
