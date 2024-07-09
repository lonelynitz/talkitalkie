import { useNavigate } from 'react-router-dom'
import '../login/login.css'

const InputFields = () => {
  const loginFields = [
    {id : 1 , field : "Username" , type : "text"},
    {id : 2 , field : "Password" , type : "password"},
  ]
  return(
    <>
        {
      loginFields.map((fields:any , index :number) => (
        <div key={index} style={{ padding : "10px"}}>
          <input 
            type={fields.type} 
            placeholder={fields.field} 
            style={{ border : "2px solid #ccc" , padding : "10px 20px" , borderRadius : "20px"}}/>
        </div>
      ))
     }
    </>
  )
}

export const Login = () => {

  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate('/signIn')
  }

  const handleLogin = () => {
    navigate('/home')
  }
  return(
    <div className="loginContainer">
        <div className='logininnercontainer'>
          <p style={{ color : '#000000' ,fontSize : "30px" , marginBottom : "5px" }}>Login</p>
          <p>Welcome back!</p>
           <InputFields/>
           <p style={{ fontSize : '14px'}}>Forgot password?</p>
           <div> <button className='loginBtn' onClick={handleLogin}>Login</button> </div>
        </div>
        <div className='bottomTag'>
            <p>Don't have an account? <span style={{ color : '#E8305E' , cursor: "pointer"}} onClick={handleSignIn}>Sign up</span></p>
          </div>
    </div>
  )
}