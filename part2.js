class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <br /> Username: {this.props.username}
        <br /> Name: {this.props.name}
        <br /> Date: {this.props.date}
        <br /> Message: {this.props.message}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Tweet username="gromel" name="Glenn" date="Today" message="hello" />
        <Tweet username="vivek" name="Vivek" date="Today" message="hey there" />
        <Tweet username="gromel" name="Glenn" date="Today" message="goodbye" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
