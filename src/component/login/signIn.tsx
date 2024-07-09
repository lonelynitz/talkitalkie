import { useNavigate } from 'react-router-dom'
import './signIn.css'
import { useForm } from 'react-hook-form';
import { service } from '../common/server';

const Fields = (props:any) => {
  const { register, errors } = props
  const inputFields = [
    { id: 1, field: "Full Name", name: "fullName", type: "text"},
    { id: 2, field: "Email", name: "email", type: "email"},
    { id: 3, field: "Password", name: "password", type: "password"},
  ];

  return (
    <div>
      {inputFields.map((field) => (
        <div className="fields" key={field.id}>
          <input 
            type={field.type} 
            placeholder={field.field} 
            className="inputField" 
            {...register(field.name)}
          />
          {errors[field.name] && <p className="error">{errors[field.name].message}</p>}
        </div>
      ))}
    </div>
  );
};

const Privacy = () => {
  return(
    <div className="privacyField">
            <p className="privacy"> 
              <input type="checkbox" name="" id="" /> Respect the privacy and personal information of all users.
            </p>
            <p className="privacy">  
              <input type="checkbox" name="" id="" /> Accept updates and changes to the app and terms.
            </p>
       </div>
  )
}

export const SignIn = () => {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignIn = async (value:any) => {
    try {
      const res = await service.post('/signIn', value)
      console.log(res.data);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  }
  
  return(
    <div className="SignInContainer">
        <div className="infoContainer">
          <p style={{ fontSize : "30px"}}>Sign up</p>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Fields register={register} errors={errors}/>
            <Privacy/>
            <div>
              <button className="signBtn" type='submit'>Sign Up</button>
            </div>
          </form>
          <div className='btmsignbotton'>
            <p style={{ margin : 0 , fontSize : '14px' , paddingTop : '5px'}}>Do you have an account ? <span style={{ color : "#E8305E"}} onClick={() => navigate('/login')}>Log in</span></p>
          </div>
        </div> 
    </div>
  )
}