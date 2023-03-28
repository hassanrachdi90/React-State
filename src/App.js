import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "Hassan Rachdi",
      bio: "Je suis un développeur Full Stack.",
      imgSrc: "https://gomycodelearndev.blob.core.windows.net/profiles/91bc3338-41c9-4756-bc77-b959e36dca84-133177340137895919.jpg",
      profession: "Developer Full Stack",
    },
    shows: false,
    mountedTime: null,
  };

  componentDidMount() {
    this.setState({ mountedTime: new Date().getTime() });
    setInterval(
      () =>
        this.setState({ mountedTime: new Date().getTime() }),
      1000
    );
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    return (
      <div  style={{ textAlign: 'center'}}>
        <button onClick={this.toggleShow}>Toggle show</button>
        {this.state.shows && (
          <div>
            <img style={{ width: '300px'}} src={this.state.person.imgSrc} alt="person" />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Component mounted {Math.floor((new Date().getTime() - this.state.mountedTime) / 1000)} seconds ago</p>
      </div>
    );
  }
}

export default App;
