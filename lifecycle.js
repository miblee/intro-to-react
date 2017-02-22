class Timer extends React.Component {
  constructor(){
    super();

    this.state = {
      counter:0
    }
    this.handleClick = this.handleClick.bind(this);
    console.log('initialized');
  }

  handleClick(evt) {
    setInterval( () => {
      clearInterval(this.inc);
      this.inc = this.setState({
        counter: this.state.counter + 1
      });
      // // this.setState ***** OPTION 2 *****
      // this.setState( (prevState, props) => {
      //   return {
      //     counter: prevState.counter + 1
      //   }
      // });
    }, 1000)
  };

  componentWillUnmount() {
    clearInterval(this.inc);
  }

  // componentDidMount() {
  //   console.log('we mounted');
  // };


  render() {
    console.log('We are rendering.');
    return (
      <button onClick={this.handleClick}>{this.state.counter}</button>
    )
  };
}

ReactDOM.render(<Timer />, document.querySelector('#root'))
