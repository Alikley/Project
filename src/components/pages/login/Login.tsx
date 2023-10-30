import { useForm } from 'react-hook-form'
import { LoginContext } from '../../../context/LoginContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './login.scss'
interface UserLog {
  login: () => void;
}
interface DataBase{
  email:string;
  password:string;
}




function Login() {

  const userLog: UserLog = useContext(LoginContext);
  const form = useForm<DataBase>({
    defaultValues:{
      email:"",
      password:"",
      
    },
    mode:'onTouched'
  })
  const{register,handleSubmit,formState,reset}=form;
  const {errors,isDirty,isValid} = formState;
  const onSubmit =async (dataa : DataBase) =>{
    // console.log("Form Submited",dataa);
    // let response = await fetch("http://localhost:8080/assessment", { 
    //   method: "POST",
    // });
    
    // let data = await response.text();
    userLog.login();
    console.log(dataa);
    
  }
  return (
    <div className='login'>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
        <input type="text"  id='firstName' {...register("email" ,{
          required:{
            value:true,
            message:"Please Enter your email"
          }
        })} />
        <p style={{color:"white",background:"red",display:"block"}}>{errors.email?.message}</p>


        <label htmlFor="password">Password</label>
        <input type="password" id='lastName' {...register("password",{
          required:{
            value:true,
            message:"Please Enter your email"
          }
        })}/>
        <p>{errors.password?.message}</p>



        <button type='submit' disabled={!isDirty || !isValid} >Click me</button>
        <button type='button' onClick={() => reset()}>Rest</button>


      </form> */}


       <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 

        <div className="signin"> 

          <div className="content"> 

          <h2>Sign In</h2> 

          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className="inputBox">
              <label htmlFor="email">Email</label>
                <input type="text"  id='firstName' {...register("email" ,{
                  required:{
                    value:true,
                    message:"Please Enter your email"
                  }
                })} />
                <p style={{color:"white",background:"#0f0",display:"block"}}>{errors.email?.message}</p>
            </div>
            

            <div className="inputBox">
              <label htmlFor="password">Password</label>
                <input type="password" id='lastName' {...register("password",{
                  required:{
                    value:true,
                    message:"Please Enter your email"
                  }
                })}/>
                <p style={{color:"white",background:"#0f0",display:"block"}}>{errors.password?.message}</p>
            </div>
             
            <div className="links"> <NavLink to="#">Forgot Password</NavLink> <NavLink to="#">Signup</NavLink></div>

            <div className="inputBox">
              <button  type='submit' disabled={!isDirty || !isValid} >Click me</button>
            </div>
              {/* <button type='button' onClick={() => reset()}>Rest</button> */}


            </form> 

          </div> 

        </div> 

      </section> 
    </div>
  )
}

export default Login