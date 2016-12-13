class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      photos: []
    };
  }

  render() {
    return (
      <div className='app'>
        <div className='LogIn'>
          <LogIn photos={this} state={this.state}/>
        </div>
        <div>
          <Home photos={this.state} state={this}/>
        </div>
        <div className='Photos'>
          {this.state.photos.map(photos => <Photos key={photos} photos={photos} state={this.state}/>)}
        </div>
      </div>
    ) 
  }
}

window.App = App;

