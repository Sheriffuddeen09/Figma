import Posts from "./Posts"
const Comment = ({comment, setComment, handleDelete, messages}) =>{
    
   const content = messages.map((message) =>{
        return (
        <Posts message={message} key={message.id} 
        handleDelete={handleDelete}
        />
        )
    })

    const Input = (
        <form onSubmit={(e) => e.preventDefault()}>
    <p className='emoj'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className='iconxi'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</p>
        <p className='emo'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className='iconx'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>
</p>
            <input 
            value={comment}
            onChange={(e) => setComment(e.target.value) }
            placeholder= 'Message'
            id="messages"
            className="input"
            type="text"
            />
    <button type='button' className='butt'>Send<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className='iconx'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg></button>
</form>
    )
    return(
        <div>
        {content}
        {Input}
        </div>
    )
}
export default Comment