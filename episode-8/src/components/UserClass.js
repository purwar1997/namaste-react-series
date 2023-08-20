import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    console.log(`Child ${props.id} constructor`);

    // super(props) will call the constructor of parent class and pass props to it
    super(props);

    // this.state contains all the state variables
    this.state = {
      count: 0,
      countTwo: 0,
      number: 1,
    };
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1, countTwo: this.state.countTwo + 2 });
  }

  increaseNumber() {
    this.setState({ number: this.state.number + 1 });
  }

  componentDidMount() {
    console.log(`Child ${this.props.id} mounted`);
  }

  componentDidUpdate() {
    console.log(`Child ${this.props.id} updated`);
  }

  componentWillUnmount() {
    console.log(`Child ${this.props.id} unmounted`);
  }

  render() {
    console.log(`Child ${this.props.id} render`);

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
        <button onClick={() => this.increaseCount.call(this)}>Increase count</button>
        <h4>Number: {number}</h4>
        <button onClick={() => this.increaseNumber.call(this)}>Increase number</button>
      </div>
    );
  }
}

export default UserClass;
