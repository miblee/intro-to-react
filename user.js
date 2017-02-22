class Github extends React.Component {
  constructor(){
    super();
    this.state = {
      person:{}
    }

    // this.getProfile = this.getProfile.bind(this);

    console.log('initialized');
  };

  // handleClick(evt) {
  // some code here ~
  // };

  // componentWillUnmount() {
  //   clearInterval(this.inc);
  // }

  componentDidMount() {
    console.log('we mounted');
    let url = 'https://api.github.com/users/' + this.props.user;
    console.log("url:", url, "typeof is", typeof url)
    fetch(url)
    .then( (response) => {
      this.setState({
        person: response.json()
      })
      console.log(response.json());
    })
    .catch( (error) => {
      console.log("DANGER, PORTER ROBINSON:", error);
    })
  };

  // componentUpdate() {

  // }

  // function getProfile() {
  // };

  render() {
    console.log('We are rendering.');

    return (
      <div>
        {this.state.person}
      </div>
    )
  }
}

github personal access token
a3a98845f2e7a39e01cfef6b8f8cd21473893665


ReactDOM.render(<Github user="fat"/>, document.querySelector('#root'))
