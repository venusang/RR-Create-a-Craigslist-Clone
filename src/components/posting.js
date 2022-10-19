function Posting(props) {
  // let posting = props.data; 
  // ask if using props.data is a React best practices - seems weird to me

  return (
    <div className="posting">
      <div>{props.data.price}</div>
      <img src={props.data.imageURL} alt={props.data.description} />
      <h3>{props.data.title}</h3>
      <p>{props.data.description}</p>
    </div>
  )
}

export default Posting;