import ProgressBar from "./ProgressBar"
import ListItem from "./ListItem"
import Order from "./Order"
import Main from "./Main"
const List = ({items, posts}) =>{

    return (
<div className='div30'>
    <div>
       <ul className="mainer">
        {
            items.map((item) =>(
                <ListItem key={item.id} item={item}/>
            ))
        }
       </ul>
    <div className="col">
       <div>
        <Main />
       </div>
       <div className="pro">
       <ProgressBar/>
       </div>
    </div>
    </div>
        <div className='div31'>
        <Order posts={posts}/>
    </div>
</div>
    )
}
export default List