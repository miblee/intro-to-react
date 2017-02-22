class Counter extends React.Component {
  constructor () {
    super();
    this.state = {
      counter: 5
    }
  }

  handleClick(evt){
    this.setState({
      counter: this.state.counter + this.props.incr
    })
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.counter}
      </button>
    )
  }
}


