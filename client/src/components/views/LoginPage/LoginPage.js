import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../../_actions/user_action'
function LoginPage(props){
    const dispatch = useDispatch()
    //React Hook
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler=(event)=>{
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler=(event)=>{
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault();//하지 않았다면, submit버튼을 누를 때마다 page가 refresh가 됨
       // console.log('Email',Email)
       // console.log('Password',Password)
        
    
        //server에게 email과 password를 보냄
    let body={
        email:Email,
        password:Password
    }
    dispatch(loginUser(body))
        .then(response=>{
            if(response.payload.loginSuccess){
                props.history.push('/')
            }else{
                alert('Error`')
            }
        })
    }
    return(
        <div style={{display: 'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>

            <form style={{display:'flex',flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>
                <br/>
                <button type="submit">Login</button>

            </form>
        </div>
    )
    
    
}
export default LoginPage;
