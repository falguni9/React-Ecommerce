import React,{useState,useEffect} from 'react'
// import { NavLink } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';
// import './Orderlist.css'
import OrderItem from '../components/OrderItem';
// import { Button } from './styles/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';

const OrderList = () => {

  const [Sortlist, setSortlist] = useState("a-z")
  const [AllOrderlist, setAllOrderlist] = useState([])
 
  const Username = JSON.parse( localStorage.getItem("User-email"))
    // http://localhost:8000/reacteccomBack/api/v1/getAllorder?Username=falguniray3@gmail.com
  const API = "https://react-backend-ecommerce.onrender.com/reacteccomBack/api/v1/getAllorder"
    const getOrderList = async(url) =>{
       try {
        const res = await axios.get(url);
        const allOrderlist = await res.data.response;
  
        setAllOrderlist(allOrderlist);
        //changes done
        console.log("oder list",allOrderlist)
       } catch (error) {
        console.log(error)
       }
    }
    const newSortData = (event) => {
      let userValue = event.target.value;
      setSortlist(userValue)
    }
    AllOrderlist.sort((a,b) => { 
      
      var c = new Date(a.createdAt);
      var d = new Date(b.createdAt);
      if(Sortlist === "a-z") return d - c;
       else return c- d ;             
      });
    
    useEffect(() => {

        getOrderList(`${API}?Username=${Username}`)

    },[Username])
    
  return (
    <>
    <Header/>
    <List>
    <div>
      <div className="headind">
        <h3>Total Order : {AllOrderlist.length}</h3>
       <div>
       <div className="order-sort">
        <label className="order-sort" htmlFor="sort">Sort</label><br />
          <select
            name="sort"
            id="sort"
            className="order-sort"
            onClick={newSortData}
            >
            <option  value="a-z">New-Old</option>
            {/* <option value="#" disabled></option> */}
            <option  value="z-a">Old-New</option>
            </select>
        </div>
       </div>
      </div>
      {
        AllOrderlist.map((items,indexs)=>{
          return <div className='olcontainer'>
            <div className="lgrid">
              <div className="left-grid">
                  <h4>Delivery Details</h4>
                  <hr className='hr' />
                  <p>Oder ID : {items._id}</p>
                  <p>User Email : {items.Username}</p>
                  <p>Payment Status : {items.orderStatus}</p>
                  <p>Delivery Status : {items.orderDeliveryStatus}</p>
              </div>
              <div className="right-grid">
                  <h4>Delivery Address</h4>
                  <hr className='hr' />
                  {items.adderss.map((item,index)=>{ 
                  return  Object.entries(item).map((items,index)=>{
                    return <p>{items[0]}:{items[1]}</p> })})}
                
              </div>
           
            
            </div>
            <div className="Ordered-items">
            <h4>Ordered items</h4>
              
                {items.orderItem.map((curElem,index)=>{ 
                  return <OrderItem key={curElem.id} {...curElem}/>        
                  })
                }
            
            </div>         
          </div>
          } )
      }

    </div>
    </List>
    <Footer/>
    </>
  )
}

const List = styled.section`
margin-top:12rem;
img{
  width: 5rem;
  height: 5rem;
  border-radius:1rem
}
.olcontainer{
  
  background-color: rgba(234, 241, 241, 0.279);
  
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 2rem;
  text-align: center;
  border-radius: 1rem;
  box-shadow: 0 0 1rem .2rem rgba(81, 81, 81, 0.701);
  
}
.lgrid{
  text-align: left;
  background-color: rgba(126, 241, 158, 0.279);
  display: grid;
  grid-template-columns: 1fr 2fr;
  
  padding:1rem;
  margin: .5rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem .2rem rgba(81, 81, 81, 0.518);
  
}
.lgrid>p{
  font-size: small;
  padding: 0;
}
.rgrid{
  background-color: rgba(254, 254, 224, 0.279);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
 
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0 rgba(81, 81, 81, 0.57);
}
.order-sort{
     font-size: 1.1em;
    text-align: center;
    padding: 0.1em;
    border: none;
    box-shadow: 0 0 0.1rem 0 #504f4f8a;
  
}
.iconColor{
  border: 1px solid black;
}
.headind{
  display: flex;
  justify-content: space-between;
  margin: 1rem 5rem;
}

.right-grid p{
  font-size: 1.1em;
  margin: 0;
  color: #0333cb;

}
.Ordered-items p{
  font-size: 1.5em;
  margin: 0;
  color: #04fa31;
  text-align: center;
}
.left-grid p{
  font-size: 1.2em;
  margin: .5rem;
  color: #0333cb;
} 
.hr{
 opacity: 1;
}
@media(max-width: 768px){
  .olcontainer{
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;  
  }
  .lgrid{
      text-align: left;
      
      
  }
  .right-grid p{
    font-size: 1.1em;
    margin: 0;
    color: #0333cb;
  
  }
  .Ordered-items p{
    font-size: 1em;
    font-weight: 700;
    margin: 0;
    color: #04fa31;
    text-align: center;
    align-items: left; 
  }
  .left-grid p{
    font-size: 1.2em;
    margin: .5rem;
    color: #0333cb;
  } 
}
}
`;

export default OrderList