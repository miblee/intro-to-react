class App extends React.Component {
  render() {
    return (
      <div>
        <People data={["Mopey", "Dopey", "Frank"]} />
        <h1>Hi</h1>
        {[1, 2, 3].map ( (n, i)=> <Counter key = {i} incr={n} />)}
        <Counter incr={1}/>
        <Counter incr={2}/>
        <Counter incr={3}/>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.querySelector('#root'))
