var Home = props => {

  var addPicture = function(e) {
    var photo = $('.picture').val();
    $.ajax({
      url: '/api/picture',
      method: 'POST',
      data: JSON.stringify({
        picture: photo,
        username: props.photos.user
      }),
      contentType: 'application/json',
      success: (data) => {
        props.photos.photos.push(photo)
        props.state.setState({photos: props.photos.photos})
        $('.picture').val('')

      }
    })
  }

    if(props.photos.user) {
      return (
        <div className="Home">
          Enter Picture Url Here: <input className='picture'></input> <button className='btn-xs btn-warning Submit' onClick={addPicture.bind(this)}>submit</button>
        </div>
      )   
    } else {
      return (
        <div className="Home">
          
        </div>
      )
    }
  
}

window.Home = Home;

