import moment from "moment/moment";
import { useState } from "react"
import Logo from './images/image-1.jpeg'
import Log from './images/image-3.jpeg'
import Logos from './images/image-2.jpeg'
import Home from "./dashboard/Home"
import Conservation from "./conservation/Conservation"
import { Route, Routes } from "react-router-dom"
const App = () =>{
    const [comment, setComment] = useState('')
    const [messages, setMesages] = useState(JSON.parse(localStorage.getItem('shoppinglist')))
    const [search, setSearch] = useState('')
    const [chats, setChats] = useState([
        {
          icon: Logo,
          names: "jane Doe",
          text: "Hi, i want make enquiries about yo...",
          new: "new",
          mins: "12:55am",
          id: "1"
        },
        {
          icon: Logos,
          id: "2",
          names: "janet Adebayo",
          text: "Hi, i want make enquiries about yo...",
          new: "new",
          mins: "12:55am"
        },
        {
          id: "3",
          icon: Log,
          names: "Kunle Adekunle",
          text: "Hi, i want make enquiries about yo...",
          new: "new",
          mins: "12:55am"
        },
        {
          id: "4",
          icon: Logo,
          names: "jane Doe",
          text: "Hi, i want make enquiries about yo...",
          new: "2",
          mins: "12:55am"
        },
        {
          icon: Logos,
          id: "5",
          names: "janet Adebayo",
          text: "Hi, i want make enquiries about yo...",
          mins: "12:55am"
        },
        {
          icon: Log,
          id: "6",
          names: "Kunle Adekunle",
          text: "Hi, i want make enquiries about yo...",
          mins: "12:55am"
        },
        {
          id: "7",
          names: "jane Doe",
          text: "Hi, i want make enquiries about yo...",
          icon: Logo,
          mins: "12:55am"
        },
        {
          id: "8",
          names: "janet Adebayo",
          text: "Hi, i want make enquiries about yo...",
          icon: Logos,
          mins: "12:55am"
        },
        {
          id: "9",
          names: "Kunle Adekunle",
          text: "Hi, i want make enquiries about yo...",
          icon: Log,
          mins: "12:55am"
        }
      ])

    const saveListItem = (comments) =>{
        setMesages(comments)
        localStorage.setItem('shoppinglist', JSON.stringify(comments))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!comment) return 
        addItem(comment)
        setComment('')
    }
    const addItem = (item) =>{
        const date = moment().format('h:mm a')
        const id = messages.length ? messages[messages.length - 1].id + 1 : 1
        const items = {id,item, date}
        const results = [...messages, items]
        saveListItem(results)
    }
    const handleDelete = async(id) =>{
        const results = messages.filter((message) => message.id !== id)
        saveListItem(results)
    }
       
    return(

        <div>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Conservation chats={chats}
                    search={search}
                    handleSubmit={handleSubmit}
                    messages={messages}
                    handleDelete={handleDelete}
                    comment={comment}
                    setComment={setComment}
                    setChats={setChats}
                    setSearch={setSearch}
            />} />
            </Routes>
        
        </div>
    )
}
export default App