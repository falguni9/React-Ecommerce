import React,{useState} from 'react'
import './login.css'
import {AiOutlineEyeInvisible,AiOutlineEye, AiOutlineCheck, AiOutlineCloseCircle} from 'react-icons/ai'
// import validation from '../Utility/Validation'
const SingUp = () => {
    const [sign, setsign] = useState(false)
   
   
    const [error, seterror] = useState({name:"",email:"",
        password:"",
        massage:""
    })
    const handleError = (event) =>{
        const email_pattern =/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/
        const password_pattern =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/
        seterror(prev => ({...prev,[event.target.name ]: event.target.value}))
        // check for password

        if( (!password_pattern.test(error.password))){
            error.massage = "Password should be atleast 8 alphabet, one number, one spacial key, one number"
        }else error.massage = "";

        // check for email 

        if(!email_pattern.test(error.email)){
            error.emaill = "Email Didn't match"
        }else error.emaill = ""

        // check for name 

        if(error.name === ""){
            error.ename = "Name sould not be empty"
        }else error.ename = ""
    }

    

    const handlesubmit = (event) => {
        event.preventDefault();
        
        if(error.emaill === "" && error.massage === "" && error.name !=="" ){
            
            window.alert(" Successfully Sign Up")
            
            
        }else  window.alert("Invalid user")
    }
  return (
    <div className="logincontainer">
        <div className=' singIn-container'>
            {/* {error.success&&<p className='error' >{error.success}</p>} */}
            <h1>New User Sign IN</h1>
            <p>you are one step away.</p>
            <form action="" onSubmit={handlesubmit}>
                <div className="input groupInput">
                    <input type="text" name='name' onChange={handleError} placeholder='Enter Your name' />
                    {error.ename !== ""?<AiOutlineCloseCircle className='iconInput red '/> :<AiOutlineCheck style={{color:"green"}} className='iconInput ' />}
   
                </div>
                {(error.name)&&<p className='error' >{error.ename}</p> }


                <div className="input groupInput">
                    <input type="text" name='email' onChange={handleError} placeholder='Enter Your Email' />
                    {error.emaill !== ""?<AiOutlineCloseCircle className='iconInput red '/> :<AiOutlineCheck style={{color:"green"}} className='iconInput ' />}
   
                </div>
                {(error.email)&&<p className='error' >{error.emaill}</p> }


                <div className="input groupInput">
                <input type={sign?"text":"password"} onChange={handleError} name='password' placeholder='Enter Your password' />
                {(!sign) ?<AiOutlineEye onClick={()=>setsign(!sign)} className='iconInput'/> 
                : <AiOutlineEyeInvisible onClick={()=>setsign(!sign)} className='iconInput '/>}
                     
                </div>
                {(error.password)&&<p className='error' >{error.massage}</p> }


                <div className="input input-2">
                    <div className='bb'>
                        <input type="checkbox" name=" Remember_Me" id=" Remember_Me" />
                        <label for = " Remember_Me" className='label'>Ramember Me</label>
                    </div>
                
                    <p>Forgot password ?</p>
                </div>
                <button type="submit">SIGN UP</button>
                
            </form>
        </div>
  
    </div>
  )
}

export default SingUp