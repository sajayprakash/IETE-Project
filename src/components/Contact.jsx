
import '../components/Contact.css'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Contact(){
    return  <>
    <Navbar />
    
    <h1 style={{fontSize:"30px",fontWeight:"bold"}}>Contact us for more</h1>
    <p>Feel free to contact us</p>
    <form>
           <div id="hello">
           <input type="text" placeholder="Contact-name"/><br/>
           
            <input type="text" placeholder="Phone-number"/><br/>
            <input type="email" placeholder="Email"/><br/>
        <input type="text" placeholder="Message"/>  <br/>
        <br/>
      <button id="qwerty">Submit</button>    
      </div>     
    </form>	
    <div id="op2">
    <img src="https://www.freeiconspng.com/uploads/phone-icon-clip-art--royalty--7.png" height="25px" width="25 px"/><p>Phone<br/><span style={{color: "blue"}}>111111</span></p>
    
    
    <img src="https://banner2.cleanpng.com/20190225/pju/kisspng-email-transparency-portable-network-graphics-compu-5c7435d8c2cc18.5946210615511198327979.jpg"height="25px"width="25px"/><p>Email<br/><a href="info@company.com">info@company.com</a></p>
    
</div>
<div id="qw">
<img src="https://files.propertywala.com/maps/202305/P7245436.jpg" height="350px"width="450px" style={{position:"absolute",bottom:"280px"}} id="meow"/>
<address>
    Iete  Chennai Center,<br/>
    No:137,Conron Smith Road Center,<br/>
    Gopalapuram,Chennai-86.
</address>
</div>

<Footer/>
    </>  
 }