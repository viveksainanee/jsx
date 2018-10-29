class Person extends React.Component {
  render() {
    return (
      <div>
        <p>
          Learn some info about this person:
          {this.props.name.length > 8
            ? this.props.name.substring(0, 8)
            : this.props.name}
          is {this.props.age}
        </p>
        <h3>{this.props.age >= 18 ? 'Go Vote' : 'You must be 18'} </h3>
        <ul>
          {this.props.hobbies.map(hob => (
            <li> {hob}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Person
          name="Vivek Sainanee"
          age="88"
          hobbies={['coding', 'frisbee', 'basketball']}
        />{' '}
        <Person
          name="Glenn Ramel"
          age="2"
          hobbies={['coding', 'cooking', 'gardening']}
        />{' '}
        <Person
          name="Abraham Lincoln"
          age="48"
          hobbies={['being a president', 'america']}
        />{' '}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
