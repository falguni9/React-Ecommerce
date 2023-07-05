import React,{useState} from 'react'
import './login.css'
import {AiOutlineEyeInvisible,AiOutlineEye, AiOutlineCheck, AiOutlineCloseCircle} from 'react-icons/ai'
// import validation from '../Utility/Validation'
const Login = () => {
    const [sign, setsign] = useState(false)
   
   
    const [error, seterror] = useState({email:"",
        password:"",
        massage:""
    })
    const handleError = (event) =>{
        const email_pattern =/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/
        const password_pattern =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/
        seterror(prev => ({...prev,[event.target.name ]: event.target.value}))
        console.log(error.password)
        if( (!password_pattern.test(error.password))){
            error.massage = "Password should be atleast 8 alphabet, one number, one spacial key, one number"
        }else error.massage = "";

        if(!email_pattern.test(error.email)){
            error.emaill = "Email Didn't match"
        }else error.emaill = ""
    }

    

    const handlesubmit = (event) => {
        event.preventDefault();
        
        if(error.emaill === "" && error.massage === "" ){
            localStorage.setItem("Email", error.email);
            localStorage.setItem("Password", error.password);
            window.alert(" Successfully Log in")
            error.success = " Successfully Log in"
            
        }else  window.alert("Invalid user")
    }
  return (
    <div className="logincontainer">
        <div className=' singIn-container'>
            {/* {error.success&&<p className='error' >{error.success}</p>} */}
            <h1>Existing User Sign IN</h1>
            <p>you are one step away.</p>
            <form action="" onSubmit={handlesubmit}>
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
                <button type="submit">SIGN IN</button>
                
            </form>
        </div>
  
    </div>
   )
}

export default Login