const ChatList = ({chat}) =>{

    return(
        <div>
        <div className='div32'>
            
            <div className='div28a'>
                <img src={chat.icon} alt='iphone' width={30} height={30} />
            <div className='div27'>
            <p>
                {chat.names}
            </p>
            <p >
                {chat.text}
            </p>
            </div>
            <div className='div27'>
            <p className='div29'>
                {chat.new}
            </p>
            <p className=''>
                {chat.mins}
            </p>
            </div>
            </div>
        </div>
        </div>
    )
}
export default ChatList