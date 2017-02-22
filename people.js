class People extends React.Component {
  // constructor () {
  //   super();
  //   this.state = {
  //     counter: 5
  //   }
  // }

  // handleClick(evt){
  //   this.setState({
  //     counter: this.state.counter + this.props.incr
  //   })
  // }

  render() {
    const people = this.props.data.map( (n, i)=> <li key={i}>{n}</li>);
    return (
      <ul>
        {people}
      </ul>
    )
  }
}


