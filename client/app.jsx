window.changeState = function() {
  window.this.setState({user: window.LoggedIn})
  if(window.LoggedIn) {
    $.ajax({
      url: '/getPics',
      method: 'POST',
      data: JSON.stringify({
        username: window.LoggedIn.username
      }),
      contentType: 'application/json',
      success: (data) => {
        window.this.setState({photos: data})
      }
    })
    
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      photos: ['https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201611091758', 'https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg']
    };
    window.this = this;
  }

  render() {
    return (
      <div className='app'>
        <div className='LogIn'>
          <LogIn />
        </div>
        <div>
          <Home />
        </div>
        <div className='Photos'>
          {this.state.photos.map(photos => <Photos photos={photos} />)}
        </div>
      </div>
      ) 
  }
}

App.propTypes = {
  // none
};

window.App = App;

