import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    console.log('Child Constructor');

    // super(props) will call the constructor of parent class and pass props to it
    super(props);

    // this.state will contain all the state variables
    this.state = {
      count: 0,
      countTwo: 0,
      number: 1,
    };
  }

  componentDidMount() {
    console.log('Child component mounted');
  }

  componentDidUpdate() {
    console.log('Child component updated');
  }

  render() {
    console.log('Child Render');

    // this.props holds all the prop values
    const { name, location, contact } = this.props;

    // this.state holds all the state variables
    const { count, countTwo, number } = this.state;

    return (
      <div className='user-card'>
        <h4>Name: {name}</h4>
        <p>Location: {location}</p>
        <p>Contact: {contact}</p>
        <h4>Count: {count}</h4>
        <h4>Count Two: {countTwo}</h4>
        <button onClick={() => this.setState({ count: count + 1, countTwo: countTwo + 2 })}>
          Increase count
        </button>
        <h4>Number: {number}</h4>
        <button onClick={() => this.setState({ number: number + 1 })}>Increase number</button>
      </div>
    );
  }
}

export default UserClass;
