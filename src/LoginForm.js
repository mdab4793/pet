
import { useState } from "react";
import styles from "./styles/LoginForm.module.css";
import Header from "./Layouts/Header";
const LoginForm = () => {


    
    


    return(


  
     <div>
     
        <head>
        <title>로그인 / 회원가입</title>
    </head>
    <div className={styles.wrap}>
            <div className={styles.formwrap}>
                <div className={styles.buttonwrap}>
                    <div id="btn"></div>
                    <button type="button" className={styles.togglebtn} onClick="login">LOG IN</button>
                  
                </div>
                <div className={styles.socialicons}>
                    <img src="https://github.com/mdab4793/petwalk/blob/main/fb.png?raw=true" alt="facebook"/>
                    <img src="https://github.com/mdab4793/petwalk/blob/main/tw.png?raw=true" alt="twitter"/>
                    <img src="https://github.com/mdab4793/petwalk/blob/main/gl.png?raw=true" alt="google"/>
                </div>
                <div className={styles.LoginForm}>
                <form   id="login" action="" className={styles.inputgroup}>
                    <input type="text" className={styles.inputfield} placeholder="User name or Email" required/>
                    <input type="password" className={styles.inputfield} placeholder="Enter Password" required/>
                    <input type="checkbox" className={styles.checkbox}/><span>Remember Password</span>
                    <button  className={styles.submit}>Login</button>
                </form>
                </div>
               
            </div>
        </div>
       
        <Header/>

                
                
         </div>  
                
                
          
      

    )
}

export default LoginForm;