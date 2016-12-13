var LogIn = props => {
  var login = function(e) {
    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: JSON.stringify({
        username: $('.login-username').val(),
        password: $('.login-password').val()
      }),
      contentType: 'application/json',
      success: (data) => {
        
        $.ajax({
          url: '/api/getPics',
          method: 'POST',
          data: JSON.stringify({
            username: $('.login-username').val()
          }),
          contentType: 'application/json',
          success: (data) => {
            document.getElementsByClassName('Photos')[0].style.display = 'block';
            props.photos.setState({photos: data, user: $('.login-username').val()})
          }
        })
      }
    })
  }

  var signUp = function(e) {
    $.ajax({
      url: '/api/user',
      method: 'POST',
      data: JSON.stringify({
        username: $('.login-username').val(),
        password: $('.login-password').val()
      }),
      contentType: 'application/json',
      success: (data) => {
        document.getElementsByClassName('Photos')[0].style.display = 'block';
        props.photos.setState({user: $('.login-username').val()})
      }
    })
  }

  var logout = function(e) {
    document.getElementsByClassName('Photos')[0].style.display = 'none';
    props.photos.setState({photos: [], user: null})
  }

    if(props.state.user === null) {
	    return (
	      <div className="LogIn">
	        <div className='Title'> <h1> Log In or Sign Up</h1> </div>
	          <div className='Username'> Username:
	            <input className='login-username'></input>
	          </div>
	          <div className='Password'> Password:
	            <input type='password' className='login-password'></input>
	          </div>
	          <div> 
	            <button className='btn btn-primary LogIn' onClick={login.bind(this)}> Log In </button>
	            <button className='btn btn-warning SignUp' onClick={signUp.bind(this)}> Sign Up </button>
	          </div>
	      </div>
	    )
    } else {
      return (
        <div className="LogIn">
          <h1 className="Title">Welcome to Your Album</h1>
          <button className='btn btn-primary' onClick={logout.bind(this)}> Log Out</button>
        </div>
      )
    }
}

window.LogIn = LogIn;