var Photos = props => {
    if(props.photos.length > 3 && window.LoggedIn) {
      return (
        <div className="Photos">
        <img src={props.photos} height='100px' width='100px'></img>
        </div>
      )   
    } else {
      return (
        <div className="photos">
        </div>
      )
    }
  }

window.Photos = Photos;