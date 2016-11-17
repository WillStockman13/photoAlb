class LogIn extends React.Component {
	
  constructor(props) {
	  super(props);
	  this.state = {
	    user: null
	  };
  }

  login(e) {
    $.ajax({
      url: '/users',
      method: 'POST',
      data: JSON.stringify({
        username: $('.login-username').val(),
        password: $('.login-password').val()
      }),
      contentType: 'application/json',
      success: (data) => {
        window.LoggedIn = {
          username: $('.login-username').val()
        };
        window.changeState()
      }
    })
  }

  signUp(e) {
    $.ajax({
      url: '/user',
      method: 'POST',
      data: JSON.stringify({
        username: $('.login-username').val(),
        password: $('.login-password').val()
      }),
      contentType: 'application/json',
      success: (data) => {
        window.LoggedIn = {
          username: $('.login-username').val()
        };
        window.changeState()
      }
    })
  }

  logout(e) {
    delete window.LoggedIn
    window.changeState()
  }

  render() {
    if(!window.LoggedIn) {
	    return (
	      <div className="LogIn">
	        <div> <h1> Log In or Sign Up</h1> </div>
	          <div> Username:
	            <input className='login-username'></input>
	          </div>
	          <div> Password:
	            <input className='login-password'></input>
	          </div>
	          <div> 
	            <button onClick={this.login.bind(this)}> Log In </button>
	            <button onClick={this.signUp.bind(this)}> Sign Up </button>
	          </div>
	      </div>
	    )
    } else {
      return (
        <div className="LogIn">
          <h1> Welcome to Your Album                <button onClick={this.logout.bind(this)}> Log Out</button></h1>

        </div>
      )
    }
  }
}

window.LogIn = LogIn;