console.log('✨')

// define a welcome class that renders "Hello Johnny"

class Welcome extends React.Component {
  handleDblClk(){
    window.alert(this.props.name);
  }
  render(){
    return (
      <div style={{color:'pink'}} onDoubleClick={this.handleDblClk.bind(this)}>
        <p>Hello, <span>{this.props.adjective}</span> {this.props.name}</p>
      </div>
      )
  }
}

class SuperButton extends React.Component {
  handleClick(){
    window.alert('Hi!¨̮ ')
  }
  render(){
    const style = {backgroundColor: this.props.color}
    return (
      <button onClick={this.handleClick} style={style}>SuperButton
      </button>
      )
  }
}

class NameTag extends React.Component {
  render(){
    nameSpaceStyle.color=this.props.color;
    return(
      <div style={NameTagStyle}>
        <h1>H E L L O</h1>
        <p> My Name Is</p>
        <div style={nameSpaceStyle}>
          {this.props.name}
        </div>
      </div>
      )
  }
}

const NameTagStyle = {
  backgroundColor: 'blue',
  color: 'white',
  borderRadius: 10,
  width:'500px',
  height: '300px',
  fontFamily: 'arial',
  // fontSize: '2em',
  textAlign: '-webkit-center'
}

const nameSpaceStyle = {
  backgroundColor:'white',
  textAlign: '-webkit-center',
  height: '190px',
  fontFamily: 'impact',
  fontSize: '4em'
  // color: {this.props.color}
}

const AppStyles ={
  backgroundColor:'navajowhite',
  margin:'5px'
}

class App extends React.Component {
  render(){
    return (
      <div style={AppStyles}>
        <h1>Hello {2+2}</h1>
        <NameTag name="Sonny" color="purple" />
        <Welcome adjective="pretty" name="Polly"/>
        <Welcome adjective="hulky" name="Sam"/>
        <Welcome name="Keith"/>
        <SuperButton color="yellow"/>
        <p>Playing with React</p>
      </div>
      )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
