function Card(props){
  return <div>
    <h2>{props.name}</h2>
    <img src={props.img} alt="avatar" />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
}
export default Card;