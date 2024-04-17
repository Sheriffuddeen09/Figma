const Posts = ({message, handleDelete}) =>{

    return(
        <div>
        <p className="con11">{message.item} </p>
        <p className="con12">{message.date}</p>
        <button className='delete' onClick={() => handleDelete(message.id)}>X</button>
        </div>
    )
}
export default Posts