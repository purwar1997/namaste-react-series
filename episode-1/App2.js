const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1', key: 'child-1' }, [
    React.createElement(
      'h1',
      { className: 'heading', style: { textAlign: 'center' }, key: 1 },
      'Learning React!'
    ),

    React.createElement(
      'h2',
      { className: 'heading', style: { textAlign: 'center' }, key: 2 },
      'Loving React!'
    ),

    React.createElement('p', { className: 'paragraph', key: 3 }, 'React was created by Facebook'),
  ]),

  React.createElement('div', { id: 'child2', key: 'child-2' }, 'Angular was created by Google'),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
