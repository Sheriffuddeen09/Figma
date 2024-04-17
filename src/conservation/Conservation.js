import Message from "./Message"
import Head  from "./Head"
import Foot from "./Foot"
import Chat from "./Chat"
import Icons from "./Icons"
import logo from './images/images5.png'
const Conservation = ({chats, handleSubmit, handleDelete,search,messages,comment,setComment,setSearch}) =>{

return (
<div className="dashboa">
<img src={logo} alt='logo' width={40} height={40} className='ims'/>
    <div className="dashi">
        <div className="dashn">
        <Icons />
        </div>
        <div>
        <Foot />
        </div>
    </div>
    
    <div>
        <Head/>
        <div className='message'>
        <div style={{
display: 'flex',
marginLeft: '10px',
marginTop: '-10px',
margiBottom: '-30px',
flexDirection: 'row',
justifyContent: 'space-between'
}}>
<p>Conservation with customer</p>
<p style={{
backgroundColor:'blue',
color: 'white',
borderRadius: '10px',
fontSize: '12px',
width: '100px',
translate: '-10px',
padding: '3px',
textAlign: 'center'
}}>New Message</p>
</div>

    <div className="mess">
    <div>
        <Chat
        chats={chats}
        search={search}
        setSearch={setSearch}
        />
    </div>
        <div>
        <Message 
        comment={comment}
        setComment={setComment}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        messages={messages}
        />
       </div>
    </div>
    </div>
    </div>
</div>
)
}
export default Conservation