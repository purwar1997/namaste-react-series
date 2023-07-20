const heading = React.createElement(
  'h1',
  { id: 'heading', style: { color: 'red', textAlign: 'center', textDecoration: 'underline' } },
  'Hello World from React!'
);

// React elements are plain Javascript objects
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

// render() takes react element (plain JS object), converts it into an HTML element
// and injects it inside browser DOM
root.render(heading);
