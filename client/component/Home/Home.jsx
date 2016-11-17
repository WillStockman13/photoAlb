class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  addPicture(e) {
    $.ajax({
      url: '/picture',
      method: 'POST',
      data: JSON.stringify({
        picture: $('.picture').val(),
        username: window.LoggedIn.username
      }),
      contentType: 'application/json',
      success: (data) => {
        $('.picture').val('')
        window.changeState()
      }
    })
  }

  render() {
    if(window.LoggedIn) {
      return (
        <div className="Home">
          Enter Picture Url Here: <input className='picture'></input> <button onClick={this.addPicture.bind(this)}>submit</button>
        </div>
      )   
    } else {
      return (
        <div className="Home">
          
        </div>
      )
    }
  }
}

window.Home = Home;

