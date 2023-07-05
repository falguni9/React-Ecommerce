import React,{useState} from 'react'
import styled from "styled-components";

const Address = () => {
  // const { clearAddress } = useCartContext();
  var localaddressData = {}, getState = {};
 if(JSON.parse( localStorage.getItem("CartAddress"))!== null){
      localaddressData = JSON.parse( localStorage.getItem("CartAddress"));
      getState = {
        Name:localaddressData.Name,
        Country:localaddressData.Country,
        Address1:localaddressData.Address1,
        Address_line_1:localaddressData.Address_line_1,
        Pin:localaddressData.Pin,
        Phone:localaddressData.Phone,
        City:localaddressData.City,
        State:localaddressData.State,
      }
 }



  const initialState = {
  Name:"",
  Country:"",
  Address1:"",
  Address_line_1:"",
  Pin:"",
  Phone:"",
  City:"",
  State:"",
 } 
 
 const ResetState = {
 Name:"",
 Country:"",
 Address1:"",
 Address_line_1:"",
 Pin:"",
 Phone:"",
 City:"",
 State:"",
} 
  const [address, setaddress] = useState(initialState);
  const [addressview, setaddresssview] = useState(true)


  // handel reset function
  const handelReset = (event) =>{
    setaddress(ResetState)
    localStorage.setItem("CartAddress", JSON.stringify(ResetState));
   

  }
  const handelclick = () =>{
    localStorage.setItem("CartAddress", JSON.stringify(address));
    setaddresssview(!addressview)
   }
  const handelChange = (event) =>{
    
    setaddress(prev => ({...prev,[event.target.name ]: event.target.value}))
    
    
  }
  return (
    <Wrapper>
      {addressview? <div className='add-container'>
    
        <form action="" className="add-form-container" onReset={ handelReset}>
            <h3 className='hedding'>Fill your shipping address for delivery </h3>
            <hr />
            <input onChange={handelChange} type="text" name="Name" id="Name" className="add-input half-space" placeholder='Name' required/>
            <input onChange={handelChange} type="text" name="Country" id="country" className="add-input half-space" placeholder='country'required/>
            <input onChange={handelChange} type="text" name="Address1" id="Address" className="add-input" placeholder='Address'required/>
            <input onChange={handelChange} type="text" name="Address_line_1" id="Address_line_1" className="add-input" placeholder='Address line 1'/>
            <input onChange={handelChange} type="number" max={6} name="Pin" id="Pin" className="add-input half-space" placeholder='Pin'required/>
            <input onChange={handelChange} type="number" max={10} id="Phone" name="Phone"   className="add-input half-space" placeholder='Phone Number'required/>
            <input onChange={handelChange} type="text" name="City" id="City" className="add-input half-space" placeholder='City'required/>
            <input onChange={handelChange} type="text" name="State" id="State" className="add-input half-space" placeholder='State'required/>
          <div className='btn-flex'>
            <button onClick={handelclick} type="submit" className='btn'>Confirm</button>
            <button type="reset" className='btn'>Reset</button>
          </div>
           
        
        </form>
    </div>:<Wrapper>
    <div className='add-container'>
        <form action="" className="add-form-container" >
            <h3 className='hedding'>your shipping address for delivery </h3>
            <hr />
            {
                Object.entries(getState).map((item,index)=>{
                
                         return <p className="add-input" key={index}> {item[0]} :- {item[1]} </p>
                })
            }
            <button onClick={handelclick} className='btn' type="button">Change your address</button>
            <hr />
            <br />
            <br />
            <h3 className='hedding'>Check items </h3>
            <hr />
            <br />
           
        
        </form>
    </div>
    </Wrapper>}
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-bottom:5rem;
.btn-flex{
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.hedding{
    text-align:center;
    margin:1rem;
    color:#2300e8;
}
 .add-container{
    display: block;
    background-color: #f7f7f7c9;
    padding:1rem;
  }
 .add-form-container{
    width:50%;
    margin:1rem auto;
 }
  .add-input{
    width:100%;
    display:block;
    margin:.2rem 0;
    max-width: 100%;

  }
  .half-space{
    width:50%;
    display:inline-block;

  }
  .btn{
    background-color: #3211eac9;
    // width: 40%;
    color: white;
    border-radius: 50px;
    padding: 1rem;
    font-size: medium;
    margin: 1rem auto;
    box-shadow: 0 0 10px 1px #8d8a8796;
  }

`

export default Address;