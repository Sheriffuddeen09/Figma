import ChatList from "./ChatList"

const Chat = ({chats, setSearch, search}) =>{


    return (
    <div style={{
        backgroundColor:'white',
        padding: '10px',
        borderRadius: '10px',
        margin: '0px 0px',
        translate: '10px',
        width: '350px'
    }}>
       <div style={{
display: 'flex',
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: '-10px'
}}>
        <p>Contact</p>
        <p>36</p>
        </div>
        <form>
        <input type='text' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id='search'
        className="inputs"/>
        </form>
          <div className='div30'>
    <div>

        {
            chats.map((chat) =>(
                <ChatList key={chat.id} chat={chat}/>
            ))
        }
    </div>
</div>
</div>
    )
}
export default Chat