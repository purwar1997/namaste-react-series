import { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    console.log('User mounted');

    try {
      const response = await fetch('https://api.github.com/users/akshaymarch7', {
        method: 'GET',
        headers: {
          accept: 'application/vnd.github+json',
        },
      });

      const json = await response.json();
      this.setState({ userInfo: json });
    } catch (err) {
      console.log(err.message);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('User updated');

    // accessing props and state of previous render
    console.log(prevProps, prevState);

    // accessing props and state of current render
    console.log(this.props, this.state);

    if (prevState !== this.state) {
      console.log('State is updated');
    }
  }

  componentWillUnmount() {
    console.log('User unmounted');
  }

  render() {
    const { name, bio, location, blog, twitter_username, avatar_url } = this.state.userInfo;

    return (
      <div className='user-card'>
        <img src={avatar_url} />
        <h4>Name: {name}</h4>
        <p>Location: {location}</p>
        <p>Contact: {twitter_username || blog}</p>
        {bio && <p>Bio: {bio}</p>}
      </div>
    );
  }
}

export default User;
