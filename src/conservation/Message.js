import logo from './images/image-1.jpeg'
import logos from './images/Logo-1.png'
import Comment from './Comment'
const Message = ({handleSubmit, messages, comment, setComment, handleDelete}) =>{

    return(

<section className="section">
  <div className="con7">      
   <div> 
    <img src={logo} alt="logo" height={30} width={30} className="img" />  
    </div> 
    <div className="con8">
   <div className="con4"> 
    <p> Jane Doe </p>
    <div className="con5"> 
        <p className="con6">New Customer </p>
        <p className="con3">View Profile</p>    
    </div>
</div>
<div className="con4">
    <div className="con"> 
        <p className="con1"></p> 
    <p className="con2">online 12:55am</p>
    </div>
    <p className="con7a">0 Order</p>
</div>
</div>
</div>
<hr />
<p className="con9">12 August 2022</p>
<div>
    <div className="con19">
        <img src={logos} alt='logo' width={30} height={30} className='imgs'/>
        <div className="con18"><p className="con17">Iphone 13</p>
        <p>#730,000.00</p></div>
        <p className="con15">12 in stocks</p>
        
    </div>
<div>
        
        <div className="con10">
           <p>Hello, I want to make enquiry about your <br />products </p>
            
        </div>
        <p className="con10a">12:55am</p>
    </div>

    <div>
        <p className="con11">Hello janet, thanks for the reaching out.</p>
        <p className="con12">12:57am</p>
    </div>
    <div>
        <p className="con11">what did you need to know?</p>
        <p className="con12">12:57am</p>
    </div>
    <p className="con9a">Today</p>
    <div className="con10">
        <p>i want to know if the price is negotiable, i need about 2 Units</p>
         
     </div>
     <p className="con10a">12:55am</p>
 </div>
        <div>
            <Comment messages={messages} 
             handleSubmit={handleSubmit}
             handleDelete={handleDelete}
             comment={comment}
             setComment={setComment}
             />
        </div>
    </section>

    

    )
}
export default Message