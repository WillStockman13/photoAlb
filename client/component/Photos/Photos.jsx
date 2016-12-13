var Photos = props => {
  return (
    <div className="Photo">
      <img src={props.photos} height='100px' width='100px'></img>
    </div>
  )   
  }

window.Photos = Photos;