import moment from "moment/moment";
import { useState } from "react"
import Home from "./dashboard/Home"
import Conservation from "./conservation/Conservation"
import { Route, Routes } from "react-router-dom"
const App = () =>{
    const [comment, setComment] = useState('')
    const [messages, setMesages] = useState(JSON.parse(localStorage.getItem('shoppinglist')))
    const [search, setSearch] = useState('')
    const [chats, setChats] = useState([
        {
          icon: "images/image-1.jpeg",
          names: "jane Doe",
          text: "Hi, i want make enquiries about yo...",
          new: "new",
          mins: "12:55am",
          id: "1"
        },
        {
          icon: "images/image-2.jpeg",
          id: "2",
          names: "janet Adebayo",
          text: "Hi, i want make enquiries about yo...",
          new: "new",
          mins: "12:55am"
        },
        {
          id: "3",
          icon: "images/image-3.jpeg",
          names: "Kunle Adekunle",
          text: "Hi, i want make enquiries about yo...",
          new: "new",
          mins: "12:55am"
        },
        {
          id: "4",
          icon: "images/image-1.jpeg",
          names: "jane Doe",
          text: "Hi, i want make enquiries about yo...",
          new: "2",
          mins: "12:55am"
        },
        {
          icon: "images/image-2.jpeg",
          id: "5",
          names: "janet Adebayo",
          text: "Hi, i want make enquiries about yo...",
          mins: "12:55am"
        },
        {
          icon: "images/image-3.jpeg",
          id: "6",
          names: "Kunle Adekunle",
          text: "Hi, i want make enquiries about yo...",
          mins: "12:55am"
        },
        {
          id: "7",
          names: "jane Doe",
          text: "Hi, i want make enquiries about yo...",
          icon: "images/image-1.jpeg",
          mins: "12:55am"
        },
        {
          id: "8",
          names: "janet Adebayo",
          text: "Hi, i want make enquiries about yo...",
          icon: "images/image-2.jpeg",
          mins: "12:55am"
        },
        {
          id: "9",
          names: "Kunle Adekunle",
          text: "Hi, i want make enquiries about yo...",
          icon: "images/image-3.jpeg",
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