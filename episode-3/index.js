import React from 'react';
import ReactDOM from 'react-dom/client';

/*
   - JSX is not a part of React
   - JSX is not HTML or XML inside javascript. It is HTML or XML like syntax
   - JSX is just a syntax to combine markup (HTML) and logic (javascript) together
   - Browsers can only understand HTML, CSS and JavaScript. It can't understand JSX
   - Parcel (module bundler) under the hood uses Babel (transpiler) which converts JSX into JS
    which the JS engine of browsers can understand
   - create-react-app also uses Babel as a transpiler
   - Conversion of code which a browser can't understand (JSX, SASS, CoffeeScript) into a code that a browser    can understand (HTML, CSS, JS) is known as transpilation
   - Babel can also convert newer JS syntax into a code that older browsers can understand  
   - JSX attributes are camelCased. They can't contain '-' because this special character is not allowed in JS.
     Hence, all CSS styles are also camelCased.
   - className and htmlFor are used as JSX attributes instead of class and for which are reserved words in JS
*/

const Heading = () => (
  <h1 className='heading' style={{ fontFamily: 'Segoe UI', fontWeight: 'normal' }}>
    Namaste React
  </h1>
);

const SubHeading = () => (
  <h2 className='sub-heading' style={{ fontFamily: 'Segoe UI', fontWeight: 'normal' }}>
    React is awesome
  </h2>
);

const span = <span>love</span>;

const paragraph = (
  <p className='paragraph' style={{ fontFamily: 'Segoe UI', fontSize: '16px' }}>
    React was developed by Facebook engineers with {span}
  </p>
);

/*
  - Functional components are regular JS functions which return some piece of JSX code
  - Functional components must start with a capital letter
  - Creating or composing a component by placing another component inside it is known as Component Composition
  - To inject javascript expressions inside JSX, use {}
  - Only numbers and strings are rendered by React
  - Boolean values, null and undefined are not rendered by React
  - Functional components can be rendered like <Component/> or <Component></Component>. Because functional 
    components are JS functions, they can also be rendered by injecting function calls inside curly braces
    i.e {Component()}
  - JSX expressions can have only one parent element. To group multiple elements without a parent element 
    inside JSX, we can either use React.Fragment or empty JSX tags (<></>). 
  - React.Fragment and empty JSX tags allows us to group multiple elements without inserting an 
    additional node in browser's DOM
  - React.Fragment can contain a key attribute but empty JSX tags can't
*/

const Header = () => (
  <>
    <div className='container'>
      <Heading />
      <SubHeading />
      {paragraph}
    </div>
    <div>Angular was developed by Google</div>
  </>
);

// React app can have multiple roots where different react elements can be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<Heading />);

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<SubHeading />);
